# emailShield Sprint-by-Sprint Implementation Plan

This plan assumes 2-week sprints and a small product-engineering team shipping the MVP in dependency order. The goal is to get to a usable pilot quickly, not to build every v1.1 capability upfront.

## Planning Assumptions

- Sprint length: 2 weeks
- Delivery style: vertical slices with testable end-of-sprint outcomes
- Priority order: connectivity first, detection second, UX and partner workflows third, hardening last
- v1 constraints remain in force:
  - IMAP only
  - No MX changes
  - Sublime Security as the detection engine foundation
  - Small curated Balkan fraud rule set
  - Partner-led onboarding and tenant management

## Sprint 0: Foundation and Repo Setup

### Goal
Establish the technical base so the team can build the product without rework.

### Scope
- Set up the Next.js app and NestJS API structure
- Define the initial PostgreSQL schema for tenants, users, roles, mailboxes, alerts, and audit logs
- Add Redis and BullMQ wiring for background jobs
- Create tenant-scoped auth and authorization skeleton
- Add OpenTelemetry and Sentry baseline instrumentation
- Set up local Docker-based development parity

### Exit Criteria
- The app boots locally and in a repeatable containerized dev environment
- A tenant-scoped user can authenticate
- The database schema is in place for the core entities
- Background job infrastructure can enqueue and process a dummy job

### Dependencies
- None; this is the base sprint

## Sprint 1: Signup, Tenant Creation, and DNS Auto-Detection

### Goal
Make onboarding feel fast and credible before mailbox access is introduced.

### Scope
- Build signup and tenant creation flow
- Add English and Macedonian language selection
- Implement business email capture during onboarding
- Add DNS analysis for MX, SPF, DKIM, and DMARC records
- Pre-fill provider and connection suggestions from DNS inference
- Show confidence levels when provider detection is inferred

### Exit Criteria
- A new customer can create a tenant and choose a language
- The system can infer the likely email provider from public DNS records
- The UI pre-fills recommended connection settings
- The user can confirm or override the detected provider

### Dependencies
- Sprint 0 auth, tenant, and infrastructure foundation

## Sprint 2: IMAP Mailbox Connection and Sync

### Goal
Connect to real mailboxes and prove the ingestion path end to end.

### Scope
- Store mailbox credentials securely
- Implement IMAP connection test and mailbox status display
- Build mailbox sync checkpoints
- Add background jobs for message fetch and retry handling
- Record mailbox sync health and failures in the UI and audit trail

### Exit Criteria
- A tenant can connect at least one mailbox over IMAP
- Mailbox sync can fetch new messages reliably
- Sync failures are visible to admins
- Retry behavior does not create duplicate processing

### Dependencies
- Sprint 1 onboarding and provider inference

## Sprint 3: Message Normalization and Detection Core

### Goal
Turn raw email into a normalized message model and score it for invoice fraud.

### Scope
- Implement MIME normalization for headers, body, attachments, and links
- Integrate Sublime Security as the primary detection engine
- Build the local Balkan rules layer for a small curated fraud set
- Extract candidate payment instructions and bank details from messages
- Emit fraud events with explainable reason codes

### Exit Criteria
- A fetched message can be normalized into the internal model
- A suspicious invoice email can produce a fraud event
- The detection output includes human-readable reason codes
- Local regional rules can trigger alongside Sublime-based detection

### Dependencies
- Sprint 2 ingestion pipeline

## Sprint 4: Alert Review, Bank Registry, and Audit Trail

### Goal
Give finance users a clear decision workflow they can trust.

### Scope
- Build approved bank account registry management
- Compare detected payment instructions against approved values
- Create alert screens with side-by-side comparison
- Support flag-and-allow and quarantine policy modes
- Add manual override with required confirmation and reason capture
- Write all actions to the audit log

### Exit Criteria
- A user can register approved bank accounts per tenant
- A suspicious payment instruction change creates a visible alert
- The UI shows approved vs detected details side by side
- Manual override is possible and fully audited

### Dependencies
- Sprint 3 detection core

## Sprint 5: Partner Operations and Tenant Management

### Goal
Support the first go-to-market channel without overexposing tenant control.

### Scope
- Add partner attribution to tenant signup
- Build partner-facing tenant management views
- Allow partners to create and manage client tenants within their scope
- Support partner internal-use tenants
- Add partner reporting for referrals and attributable tenants

### Exit Criteria
- A partner can refer a customer and see the attribution
- A partner can manage only the tenants they own or support
- Partner internal-use onboarding works end to end
- Partner access remains bounded and does not become global admin access

### Dependencies
- Sprint 1 onboarding flows and Sprint 4 tenant state

## Sprint 6: Hardening, Localization Polish, and Pilot Readiness

### Goal
Stabilize the product for a real pilot customer and close the remaining MVP gaps.

### Scope
- Polish English and Macedonian UI copy across the main workflows
- Improve observability for mailbox sync, detection latency, and alert precision
- Tighten error handling and retry behavior
- Verify tenant isolation and audit coverage
- Review false positives on the first curated rule set
- Prepare a pilot onboarding checklist and support runbook

### Exit Criteria
- The product is stable enough for a pilot tenant
- Core workflows are fully localized in English and Macedonian
- Monitoring and audit logging are sufficient to support support and debugging
- The team has a repeatable pilot launch process

### Dependencies
- All prior sprints

## Suggested Release Gate

The MVP should be considered ready for a limited pilot when all of the following are true:

- A tenant can sign up and be correctly attributed to a partner when applicable
- A mailbox can be connected over IMAP with no MX changes
- The system can detect and flag invoice fraud in a way a finance user can understand
- Approved payment instructions can be maintained per tenant
- Manual overrides and audit logging work end to end
- English and Macedonian are available in the core workflow
- Observability is good enough to support real customer onboarding

## Why This Order Works

This sequence follows the dependency chain in the architecture:

1. Build the platform foundation first
2. Make onboarding frictionless before asking customers to connect mailboxes
3. Prove mailbox access before building fraud logic
4. Build detection before alerts and review tools
5. Add partner operations only after the core tenant model is stable
6. Hardening and localization polish happen last so pilot readiness is not blocked by unfinished core infrastructure