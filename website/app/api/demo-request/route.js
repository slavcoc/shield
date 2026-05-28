import { NextResponse } from 'next/server';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function getRateLimitStore() {
  const globalKey = '__emailshield_demo_rate_limit__';
  if (!globalThis[globalKey]) {
    globalThis[globalKey] = new Map();
  }

  return globalThis[globalKey];
}

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(request) {
  const store = getRateLimitStore();
  const clientIp = getClientIp(request);
  const now = Date.now();
  const state = store.get(clientIp);

  if (!state || now > state.resetAt) {
    store.set(clientIp, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (state.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  state.count += 1;
  store.set(clientIp, state);
  return false;
}

function isEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const company = typeof payload.company === 'string' ? payload.company.trim() : '';
  const role = typeof payload.role === 'string' ? payload.role.trim() : '';
  const website = typeof payload.website === 'string' ? payload.website.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (website) {
    return NextResponse.json({ error: 'Submission rejected.' }, { status: 400 });
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  if (!name || !isEmail(email) || !company || !role) {
    return NextResponse.json(
      { error: 'Name, company, role, and a valid email address are required.' },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.DEMO_REQUEST_WEBHOOK_URL;
  const contactEmail = process.env.DEMO_REQUEST_TO_EMAIL;

  const submission = {
    source: 'emailShield website',
    name,
    email,
    company,
    role,
    message,
    receivedAt: new Date().toISOString(),
  };

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'The demo request webhook returned an error.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  if (contactEmail) {
    console.info('Demo request routed to %s: %o', contactEmail, submission);
    return NextResponse.json({ ok: true });
  }

  console.info('Demo request received without external routing: %o', submission);
  return NextResponse.json({ ok: true, fallback: true });
}
