# emailShield

Sprint 0 foundation is now scaffolded with:

- `website/`: existing Next.js marketing site
- `api/`: NestJS API skeleton with Prisma, BullMQ, Redis wiring, and health endpoint
- `docker-compose.yml`: local PostgreSQL + Redis + API service orchestration

## Quick Start (Sprint 0)

### 1) Infrastructure (PostgreSQL + Redis + API + Website)

```bash
docker compose up -d postgres redis api website
```

To include the admin app in Compose (full-stack parity mode):

```bash
docker compose --profile fullstack up -d postgres redis api website admin
```

### 2) API service (optional local run outside Docker)

```bash
cd api
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
```

Health check:

```bash
curl http://localhost:4000/health
```

### 3) Website service

```bash
cd website
npm install
npm run dev
```

### 3b) Admin service (host run recommended, compose optional)

```bash
cd admin
npm install
npm run dev
```

### 4) Observability stub check

```bash
curl http://localhost:4000/health/observability
```

## Optional: Run API via Docker Compose

```bash
docker compose up --build api
```

## Notes

- The API schema includes core Sprint 0 entities: tenants, users, mailboxes, alerts, audit entries.
- BullMQ boot wiring is verified by enqueueing a harmless `boot-check` job on API startup.
- This is a foundation scaffold to unblock Sprint 1 (signup + onboarding + DNS auto-detection).
