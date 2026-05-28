# emailShield MVP — Locked Decisions

Decisions made on 19 May 2026 to finalize the implementation roadmap.

## 1. Email Access Model
**Decision: IMAP first, OAuth later**

- v1 supports IMAP only
- Google Workspace and Microsoft 365 OAuth will be added in v1.1
- Rationale: Matches the local SMB reality (cPanel/shared hosting), keeps onboarding fast, avoids overbuilding OAuth before customers exist

## 2. Sublime Security Role
**Decision: Sublime is the main detection engine**

- Sublime Security Platform handles most detection rules and threat analysis
- emailShield focuses on: onboarding, tenant logic, regional rules, UI, and business logic
- Rationale: Fast shipping, lets the team focus on product layer instead of rebuilding detection, leverages Sublime's proven email security foundation

## 3. Deployment Model
**Decision: No MX changes, direct IMAP connection**

- v1 connects directly to customer mailboxes via IMAP
- No MX record modifications
- Mail routing through emailShield is out of scope for v1 (v1.1+)
- Rationale: Simple onboarding for SMBs, avoids DNS migration friction, keeps infrastructure light

## 4. Balkan-Specific Rules
**Decision: Small initial set of localized rules**

- v1 includes curated regional fraud patterns and lookalike domains
- Examples: EVN Macedonia utility imitation, Makedonski Telekom phishing patterns, local bank IBAN variations
- Broad threat database deferred to v1.1
- Rationale: Real regional edge without delaying launch, shows market understanding

## 5. Onboarding Flow
**Decision: DNS auto-detect with smart defaults**

- Sign up → enter business email → system analyzes MX/SPF/DMARC records → pre-fills provider and connection settings → customer confirms and connects with email/password or provider-specific auth
- Rationale: Feels magical, fast for SMBs, removes manual email host setup, matches "autofill magic" strategy

## 6. Go-to-Market Channel
**Decision: Accountants/bookkeepers and MSPs first**

- Partner motion: referral + managed service add-on
- Incentives: recurring commission + free internal use
- Direct sales and paid ads deferred to later stage
- Rationale: Partners sit next to invoice workflows, trusted intermediaries, easier to scale with less sales overhead

## 7. Partner Support Boundary
**Decision: Partners can refer and manage client tenants**

- Partners can create tenants for clients
- Partners can manage their client's configuration and onboarding
- Partners cannot override client's own role-based access or admin decisions
- Rationale: Gives partners enough power to support clients, avoids making them super-admins

## 8. Localized Rules
**Decision: Small curated set of regional threat intelligence**

- v1 includes MQL rules for common Balkan fraud vectors
- Regional lookalike domains and known malicious IBANs
- Framework for growing the threat database over time
- Rationale: Defensible moat, regional specificity, ready for v1.1 expansion

---

## Implementation Priorities (from these decisions)
1. IMAP ingestion and mailbox connection
2. Sublime Security Platform integration
3. Tenant onboarding with DNS auto-detection
4. Core invoice-fraud detection (bank account matching + supporting signals)
5. Dashboard and alert workflow
6. Audit trail and compliance controls
7. Regional Balkan fraud rules
8. Partner referral and tenant management endpoints

## Out of Scope for v1
- OAuth for Google Workspace or Microsoft 365
- MX routing through emailShield
- Broad threat intelligence database
- Direct SMB sales
- White-label partner portal
- Advanced analytics and reporting
