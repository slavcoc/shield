---
name: runtime-reset-rerun
description: "Use when local services are stuck, ports are occupied, container output hangs, or runtime state appears stale. Performs a safe full stop and deterministic restart from zero."
---

# Runtime Reset And Rerun

Use this skill when verification is blocked by stale processes, hanging compose commands, wrong code being served, or port conflicts.

## When To Trigger

- Health endpoints return old behavior after code changes.
- `docker compose` commands hang or produce no useful output.
- Ports are unexpectedly in use (`EADDRINUSE`).
- Runtime checks fail inconsistently across attempts.
- Multiple terminals have leftover background processes from prior runs.

## Safety Rules

- Do not use destructive git commands.
- Only stop processes related to the current workspace.
- Prefer explicit process and port checks before killing anything.
- If a command asks for secrets, stop and let the user type them directly.
- If Docker daemon is unhealthy, report that explicitly instead of looping.

## Inputs

- Project root path.
- Expected service ports (for this repo: API `4000`, website `3000`, Postgres `5432`, Redis `6379`).
- Required env vars for local API start.

## Standard Reset Procedure

1. Snapshot current state.
- Record active terminals and last commands.
- Run process/port inspection:
  - `lsof -nP -iTCP:3000,4000,5432,6379 -sTCP:LISTEN`
  - `ps -ax -o pid=,command=`

2. Stop orchestrated services first.
- From project root:
  - `docker compose down --remove-orphans`
- If compose hangs, capture that as a blocker and continue with local process cleanup.

3. Kill lingering workspace processes.
- Find Node/Nest/Vite processes referencing project path.
- Terminate with `kill <pid>`; use `kill -9 <pid>` only if normal termination fails.
- Re-check listening ports until expected app ports are free.

4. Clean and rebuild runtime artifacts.
- API:
  - `cd api && npm run build`
- If stale build is suspected, verify compiled output contains new route handlers before restart.

5. Restart dependencies in deterministic order.
- Start infrastructure first (`postgres`, `redis`).
- Start API next.
- Start website/admin last.
- Avoid parallel startup when diagnosing; prefer one service at a time.

6. Verify after each startup step.
- API:
  - `curl -s http://localhost:4000/health`
  - `curl -s http://localhost:4000/health/observability`
- Website:
  - `curl -sI http://localhost:3000 | head -n 1`
- If a check fails, stop and inspect that service logs immediately before continuing.

7. Report final state.
- What was killed/stopped.
- What was restarted.
- Exact endpoint results.
- Any remaining blocker with root-cause guess and next concrete action.

## Anti-Loop Rules

- Maximum 2 restart attempts with the same command shape.
- If the same command hangs twice, switch to an alternative diagnostic command or escalate as environment issue.
- Do not keep polling unchanged terminal output.

## Repo-Specific Quick Command Sequence

Run from project root in this order:

```sh
# 1) Stop compose stack
cd /path/to/repo
docker compose down --remove-orphans

# 2) Free common ports if still occupied
lsof -nP -iTCP:3000,4000 -sTCP:LISTEN

# 3) Rebuild api artifact
cd api
npm run build

# 4) Start compose dependencies and app services
docker compose up -d postgres redis api website

# 5) Verify runtime
curl -s http://localhost:4000/health
curl -s http://localhost:4000/health/observability
curl -sI http://localhost:3000 | head -n 1
```

If `docker compose up` hangs repeatedly, switch to local process startup and verify endpoints per service while documenting Docker as the active blocker.
