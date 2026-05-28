# emailShield MVP Spec

## Goal
Build a narrow, sellable MVP that helps SMBs in North Macedonia detect invoice fraud, prevent payment instruction tampering, and keep a clear audit trail of every decision.

## Product Principles
- Invoice fraud first, generic email security second
- Simple enough for SMBs and partners to deploy
- Tenant-configurable strictness
- Default to low-friction adoption
- Every decision should be explainable and auditable

## Locked Decisions (19 May 2026)
See [emailShield_DECISIONS.md](emailShield_DECISIONS.md) for the complete decision set. Key points:
- Email access: IMAP only (OAuth in v1.1)
- Sublime Security is the main detection engine
- No MX changes; direct IMAP connection
- Small curated set of Balkan fraud rules for v1
- DNS-based auto-detection onboarding
- Partners (accountants/MSPs) can refer and manage client tenants
- Regional threat intelligence in v1, expanded in v1.1

## Architecture Deep Dive
See [emailShield_Architecture_Deep_Dive.md](emailShield_Architecture_Deep_Dive.md) for the implementation architecture, service boundaries, and processing flow.

## MVP Scope
### In scope
- Web signup with Macedonian/English language selection
- Tenant creation and partner attribution
- IMAP mailbox connection with DNS auto-detection
- Invoice/payment email detection via Sublime + custom regional rules
- Fraud rule evaluation across email (Sublime as core engine)
- Bank account / payment instruction matching against approved registry
- Flag-and-allow default behavior (customer-configurable)
- Quarantine option per tenant
- Dashboard with side-by-side comparison of approved vs detected payment details
- Manual override after confirmation with reason tracking
- Audit trail for all alerts, overrides, and configuration changes
- English and Macedonian UI
- RBAC: admin, accountant, finance manager
- GDPR-oriented handling with masked bank accounts
- EU or local data residency option
- Partner portal for managing referred tenants

### Out of scope for v1
- OAuth for Google Workspace or Microsoft 365 (planned v1.1)
- MX record changes or mail routing through emailShield (planned v1.1+)
- Accounting platform integrations
- White-label partner portal
- Advanced reporting and analytics
- Multi-language beyond English and Macedonian
- Full generic email security suite
- Automated payout / payment execution
- Broad threat intelligence database (v1.1+)

## Autofill Magic Strategy
When a customer enters their business email address during onboarding, emailShield should analyze public DNS records in the background to infer the most likely email provider and mail hosting setup.

### What it should detect
- MX records to identify where inbound mail is hosted
- SPF, DKIM, and DMARC records to confirm the domain's mail ecosystem
- Provider-specific DNS patterns for common hosts such as Google Workspace, Microsoft 365, Zoho, MKhost, and similar regional providers

### What the UI should do
- Pre-fill the likely provider and recommended IMAP/SMTP settings
- Reduce the onboarding form to the minimum required fields
- Show a confidence label when the provider is inferred rather than explicitly chosen
- Allow the customer to confirm or change the detected provider before connecting

### Authentication strategy
- Use email + password as the default fast path only when the provider supports IMAP/basic auth or app passwords
- If the provider requires OAuth or a provider-specific app password, present that path automatically after detection
- Never silently force an insecure connection method

### Why this matters
- Cuts onboarding time dramatically
- Makes the product feel magical and low-friction
- Removes manual email host setup for most SMBs
- Still keeps the flow safe and compatible with real-world provider requirements

## Suggested Technology Stack
### Product UI
- Next.js 15 for the web app and dashboard
- TypeScript for frontend and backend code
- Tailwind CSS for fast UI implementation
- shadcn/ui for accessible, reusable components

### Backend
- Node.js 22 runtime
- NestJS for structured APIs and modular services
- Prisma for database access
- Zod for request validation and shared schema typing

### Data and Infrastructure
- PostgreSQL for tenant data, alerts, audit logs, and configuration
- Redis for caching and background job coordination
- BullMQ for IMAP polling, message processing, and alert jobs
- Docker for local development and deployment parity

### Email and Fraud Processing
- Sublime Security Platform as the detection engine foundation
- Custom Node.js service for tenant onboarding, IMAP ingestion, and business rules
- Open-source MIME parsing and email processing libraries for message normalization
- DNS lookup libraries for provider inference during onboarding

### Observability and Security
- OpenTelemetry for traces and structured metrics
- Sentry for application error reporting
- Row-level security or tenant scoping in PostgreSQL for isolation

## Open Source / Reusable Components
### Use directly
- Sublime Security Platform
- Next.js
- TypeScript
- NestJS
- Prisma
- PostgreSQL
- Redis
- BullMQ
- Tailwind CSS
- shadcn/ui
- Zod
- OpenTelemetry SDKs

### Good candidates for email parsing and utilities
- mailparser for MIME and email body parsing
- Postal Mime or similar MIME helpers for attachment and header normalization
- libphonenumber or similar utilities if contact data normalization is needed later

### Why this stack
- Fast to ship with a familiar TypeScript stack
- Easy to hire for and maintain
- Strong fit for multi-tenant SaaS
- Lets Sublime handle the hard email-security core while the team focuses on the product layer

## Primary User Personas
- SMB owner
- Accountant / bookkeeper
- MSP operator
- Finance manager

## User Outcomes
- Stop invoice fraud before money leaves the business
- Reduce time spent validating payment instructions
- Provide evidence for every alert and override
- Let partners manage customers with minimal support overhead

## Epic 1: Tenant Signup and Onboarding
### Objective
Let a new SMB sign up, connect email, and start protecting invoice emails quickly.

### Stories
1. As a visitor, I can create an emailShield account so that I can start onboarding.
   - Acceptance criteria:
     - Sign up is available from the website
     - User can create a tenant during signup
     - User is prompted to select English or Macedonian

2. As an admin, I can connect a mailbox via IMAP so that emailShield can scan incoming and outgoing mail.
   - Acceptance criteria:
     - IMAP credentials can be entered securely
     - Connection test succeeds or returns a clear error
     - Mailbox connection status is visible in the UI

3. As an admin, I can add approved bank accounts so that the system knows the canonical payment instructions.
   - Acceptance criteria:
     - Bank accounts can be added, edited, and removed
     - Bank account numbers are masked in the UI
     - Approved accounts are stored per tenant

4. As an admin, I can configure detection strictness so that I choose between flagging and quarantining.
   - Acceptance criteria:
     - Tenant can choose flag-and-allow or quarantine
     - Default is flag-and-allow
     - Change is saved per tenant

## Epic 2: Invoice Email Classification
### Objective
Identify emails that are likely to be invoices or payment-related messages.

### Stories
1. As the system, I can detect invoice/payment-related emails so that fraud rules are applied to relevant messages.
   - Acceptance criteria:
     - Detection uses multiple signals
     - Signals include folders/labels, sender registry, subject/body patterns, and attachments
     - Classified messages are marked for fraud analysis

2. As an admin, I can mark folders, labels, or senders as invoice-related so that detection becomes more accurate.
   - Acceptance criteria:
     - Tenant can define invoice-related folders or labels
     - Tenant can add known suppliers or vendors
     - Rules apply only within the tenant

## Epic 3: Fraud Detection Engine
### Objective
Detect invoice fraud patterns and surface suspicious changes.

### Stories
1. As the system, I can compare payment instructions against approved values so that changed bank account details are flagged.
   - Acceptance criteria:
     - Approved bank account registry is used as the source of truth
     - Mismatched bank account numbers trigger a fraud event
     - Payment instruction changes are logged

2. As the system, I can detect supporting fraud signals so that suspicious emails are scored more accurately.
   - Acceptance criteria:
     - Lookalike sender domains are detected
     - Display-name spoofing is detected
     - Urgency or pressure language is detected
     - Attachment or invoice tampering is detected

3. As the system, I can apply tenant-specific policy so that each customer chooses how strict the response is.
   - Acceptance criteria:
     - Policy is configurable per tenant
     - High-confidence matches can be quarantined if enabled
     - Lower-confidence matches are flagged when quarantine is disabled

## Epic 4: Alerting and Review
### Objective
Show suspicious messages clearly so humans can make fast decisions.

### Stories
1. As a finance user, I can see an alert when an invoice email is suspicious so that I can review it quickly.
   - Acceptance criteria:
     - Alert appears in the dashboard
     - Alert includes reason codes
     - Alert links to the original email record

2. As a finance user, I can see approved vs detected payment details side by side so that I can verify the change.
   - Acceptance criteria:
     - Side-by-side comparison is visible
     - Approved bank account is masked
     - Detected bank account is masked

3. As an admin, I can manually override a suspicious message so that legitimate exceptions can proceed.
   - Acceptance criteria:
     - Override requires confirmation
     - Override reason is recorded
     - Override action appears in audit trail

## Epic 5: Audit Trail and Compliance
### Objective
Keep a complete record of alerts, actions, and access.

### Stories
1. As an admin, I can view a full audit log so that I can review all decisions and actions.
   - Acceptance criteria:
     - Audit log includes time, actor, action, tenant, and outcome
     - Audit log includes alerts, overrides, configuration changes, and mailbox events
     - Audit log is searchable

2. As a compliance-conscious user, I can access masked financial data so that sensitive details are not overexposed.
   - Acceptance criteria:
     - Full bank account numbers are not shown in the UI
     - Last four digits are visible where needed
     - Sensitive fields follow least-privilege principles

3. As an admin, I can manage user roles so that access matches responsibility.
   - Acceptance criteria:
     - Admin, accountant, and finance manager roles exist
     - Roles have defined permissions
     - Role changes are audited

## Epic 6: Localization and Regional Readiness
### Objective
Make the product usable for the target market from day one.

### Stories
1. As a user, I can switch between English and Macedonian so that I can use the product in my preferred language.
   - Acceptance criteria:
     - Core UI supports English
     - Core UI supports Macedonian
     - Language choice persists per user or tenant

2. As a customer, I can choose EU or local data residency so that I can meet my compliance needs.
   - Acceptance criteria:
     - Residency option is recorded per tenant
     - Data is stored according to tenant selection
     - Residency setting is visible in admin settings

## Epic 7: Partner-Ready Operations
### Objective
Support accountants/bookkeepers and MSPs as the first go-to-market channel.

### Stories
1. As a partner, I can refer a customer so that I can introduce emailShield without managing the full sales process.
   - Acceptance criteria:
     - Partner attribution is tracked
     - Referral source is visible internally
     - Customer signup can be tied to a partner

2. As a partner, I can use the product for my own firm so that I can trust what I recommend.
   - Acceptance criteria:
     - Internal-use tenant is supported
     - Partner can onboard their own mailbox
     - Partner can test the product before referring clients

3. As a partner, I can earn recurring commission so that I have an incentive to keep promoting the product.
   - Acceptance criteria:
     - Subscription revenue can be attributed to a partner
     - Commission basis is trackable
     - Partner reporting is available internally

## Data Model Notes
### Core entities
- Tenant
- User
- Role
- Mailbox connection
- Approved bank account
- Vendor / sender registry
- Invoice-related rule
- Email message
- Fraud event
- Alert
- Override
- Audit log entry
- Partner record

## Non-Functional Requirements
- Security:
  - Encrypt sensitive data at rest and in transit
  - Mask bank account numbers in the UI
  - Restrict access by role
- Reliability:
  - Mail scanning should be resilient to provider errors
  - Failed mailbox syncs must be visible to admins
- Usability:
  - Onboarding should be understandable without technical support
  - Alerts should explain why a message was flagged
- Localization:
  - English and Macedonian in MVP
- Compliance:
  - GDPR-oriented controls and auditability

## MVP Success Metrics
- Money saved or prevented loss
- Number of suspicious invoice attempts blocked or flagged
- False positive rate
- Time to onboard a new mailbox
- Number of active connected mailboxes

## Release Criteria
The MVP is ready when:
- A tenant can sign up and connect a mailbox
- A tenant can register approved bank accounts
- The system can detect invoice/payment emails
- The system can flag bank account changes and related fraud signals
- A dashboard can show the reason for each alert
- Manual override and audit logging work end to end
- The UI supports English and Macedonian
- Tenant-level strictness is configurable
