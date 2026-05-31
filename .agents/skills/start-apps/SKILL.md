---
name: start-apps
description: "Use when asked to run the local stack for development. Starts admin directly with Vite and runs API in Docker Compose with postgres and redis."
---

# Start Apps

Use this skill when the user asks to run the apps, start local development, or boot the stack.

## Repo Startup Contract

- Run `admin` directly on host with Vite.
- Run `api` in Docker Compose.
- Ensure API dependencies (`postgres`, `redis`) are up with API.

## Preconditions

- Current working directory is repo root.
- Docker Desktop/daemon is running.
- Node dependencies are already installed in `admin`.

## Standard Procedure

1. Start admin directly.
- Command:
```sh
cd /Users/cslavco/Documents/Docs/emailShield/admin && npm run dev
```
- Expected result: Vite serves on `http://localhost:5173`.

2. Start API via Docker Compose (with dependencies).
- Command:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && docker compose up -d postgres redis api
```
- Expected result: services `emailshield-postgres`, `emailshield-redis`, and `emailshield-api` are up.

3. Verify API health.
- Command:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && curl -sS http://localhost:4000/health
```
- Expected result contains:
```json
{"ok":true}
```

4. Verify compose status when needed.
- Command:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && docker compose ps
```

## Output To User

Always report:

- Admin URL: `http://localhost:5173`
- API URL: `http://localhost:4000`
- Health result summary for API

## Troubleshooting

- If admin port is occupied (`5173`), rerun Vite and use the new printed port.
- If API health fails, check:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && docker compose logs --tail=200 api
```
- If Docker services fail to start, run:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && docker compose ps
```
then inspect failing container logs (`postgres`, `redis`, `api`).

## Stop Commands

- Stop API stack:
```sh
cd /Users/cslavco/Documents/Docs/emailShield && docker compose down
```
- Stop admin: terminate the Vite terminal process.
