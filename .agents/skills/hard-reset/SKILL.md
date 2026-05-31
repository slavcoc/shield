---
name: hard-reset
description: "Short alias for runtime-reset-rerun. Use when processes are stale, ports are occupied, or compose is hanging; stop everything and restart from a clean baseline."
---

# Hard Reset

Use this skill when runtime verification is blocked by stale processes or inconsistent service state.

## Intent

Perform a safe full stop of workspace runtime processes and restart services from a known-good baseline.

## Trigger Conditions

- Health checks return stale behavior after code changes.
- `EADDRINUSE` errors appear.
- `docker compose` commands hang or provide no actionable output.
- Repeated reruns produce inconsistent results.

## Rules

- Only stop processes related to this workspace.
- Prefer graceful termination before force kill.
- Never use destructive git commands.
- Stop retry loops after repeated identical failures.

## Procedure

1. Inspect active listeners and relevant processes.
- `lsof -nP -iTCP:3000,4000,5432,6379 -sTCP:LISTEN`
- `ps -ax -o pid=,command=`

2. Stop orchestration layer.
- `docker compose down --remove-orphans`

3. Kill lingering workspace-owned app processes.
- Terminate related Node/Nest/Vite processes.
- Confirm target app ports are free.

4. Rebuild runtime artifacts.
- `cd api && npm run build`

5. Restart in deterministic order.
- Infra first: Postgres, Redis.
- API second.
- Website/Admin last.

6. Verify immediately after each startup.
- `curl -s http://localhost:4000/health`
- `curl -s http://localhost:4000/health/observability`
- `curl -sI http://localhost:3000 | head -n 1`

7. Report concise outcome.
- What was stopped.
- What was restarted.
- Endpoint results and any blocker.

## Alias Note

This skill is equivalent in purpose to `runtime-reset-rerun`; use whichever name is easier to remember.
