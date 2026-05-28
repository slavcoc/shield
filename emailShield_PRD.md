# emailShield PRD

## Product Summary
emailShield is a subscription email-fraud product for SMBs in North Macedonia. It focuses on invoice and payment fraud: when legitimate business emails are intercepted and edited to replace bank account details or other payment instructions.

## Problem
SMBs lose money when attackers intercept invoice emails, change payment instructions, and resend them to customers. Existing email security products focus on phishing and malware, not invoice fraud. emailShield fills that gap.

## Positioning
- Primary position: invoice fraud prevention
- Secondary value: broad email fraud detection
- Core promise: money saved / prevented loss
- Competitive angle: major email security vendors do not focus on invoice/payment manipulation

## Target Customers
- First beachhead: construction and trades, plus B2B services
- Primary buyers: accountants/bookkeepers and MSPs
- Partner motion: referral partner + managed service add-on

## MVP Scope
### Included
- IMAP-based onboarding for SMB mailboxes
- Invoice and payment email detection across email
- Fraud signals:
  - bank account or payment instruction changes
  - lookalike sender domains
  - display-name spoofing
  - urgency / payment-pressure language
  - attachment or invoice tampering
- Customer-configurable per tenant
- Default action: flag and allow
- Quarantine available for stricter customers
- Side-by-side alert view: approved account vs detected account
- Manual override after confirmation
- Audit trail for all actions and decisions
- English and Macedonian UI
- GDPR-oriented handling, masked bank account display, role-based access control
- EU or local data residency option

### Out of Scope for MVP
- Accounting software integrations
- Full generic email security suite
- Complex multi-product workflows
- White-label partner packaging
- Advanced analytics/reporting

## User Journey
1. Customer signs up on the website.
2. Connects mailbox via IMAP.
3. Registers approved bank accounts.
4. emailShield starts scanning.
5. Suspicious invoice email is flagged or quarantined.
6. Dashboard shows approved vs detected payment details.
7. Customer can approve or override.
8. Audit trail records the decision.

## Pricing
- Flat monthly subscription
- Suggested starting range: $99–199/month

## Partner Model
- Channel focus: accountants/bookkeepers and MSPs
- Incentives:
  - recurring commission
  - free internal use

## Success Metrics
- Primary metric: money saved / prevented loss
- Supporting metric: audit trail completeness
- Operational metric: low false positives

## Product Defaults
- Invoice/payment emails are the primary scope
- All email can be scanned, but fraud rules should focus on invoice/payment risk
- Tenant-level configuration controls strictness
- Start with flag-and-allow as the safest default

## Key Risks
- False positives on legitimate payment changes
- Onboarding friction if mailbox access is difficult
- Trust barrier for a new category
- Need to keep the MVP narrow enough to sell quickly

## v1.1 Opportunities
- Accounting platform integrations
- Broader Balkan language support
- Advanced dashboards and reporting
- Expanded partner tooling
- More automated fraud scoring and classification
