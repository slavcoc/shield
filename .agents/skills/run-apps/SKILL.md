---
name: run-apps
description: "Alias for start-apps. Use when asked to run apps locally; starts admin directly and API via Docker Compose with postgres and redis."
---

# Run Apps

This is an alias skill for start-apps.

## Startup Contract

- Start admin directly on host.
- Start api in Docker Compose with postgres and redis.

## Commands

1. Admin direct:
```sh
cd /Users/cslavco/Documents/Docs/emailShield/admin && npm run dev
```

2. API in Docker:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && docker compose up -d postgres redis api
```

3. Verify API health:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && curl -sS http://localhost:4000/health
```

## Expected URLs

- Admin: http://localhost:5173
- API: http://localhost:4000

## Alias Note

Use start-apps and run-apps interchangeably.
