# Deployment

This site is a Next.js app in `website/`.

## Local development

```bash
cd website
npm install
npm run dev
```

## Environment variables

Set one of the following before deploying:

- `DEMO_REQUEST_WEBHOOK_URL`: POSTs demo requests to a webhook, automation endpoint, or CRM bridge.
- `DEMO_REQUEST_TO_EMAIL`: Optional fallback label for logs when a webhook is not configured.

Copy `.env.example` to `.env.local` and fill in the values.

## Deploying to Vercel

1. Import the `website/` folder as the project root.
2. Add the environment variables in the Vercel project settings.
3. Deploy with the default Next.js build settings.

## Notes

- The homepage is fully static except for the demo request form.
- The API route at `/api/demo-request` accepts the form submission and forwards it to the configured webhook.
