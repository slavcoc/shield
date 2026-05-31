# emailShield Admin

React + TypeScript admin shell for signup/login/dashboard workflows.

## Run locally with API integration

1. Start the API (repo root):

```bash
docker compose up -d postgres redis api
```

2. Start the admin app:

```bash
cd admin
npm install
npm run dev
```

3. Open:

```text
http://localhost:5173
```

## API proxy behavior

During local development, Vite proxies these paths to `http://localhost:4000`:

- `/auth`
- `/protected`
- `/jobs`
- `/health`

This means login submission from the admin app uses your local Nest API without browser CORS issues.

## Validation commands

```bash
npm run lint
npm run build
npm test
```
