-- Drop legacy global uniqueness for user email.
DROP INDEX IF EXISTS "User_email_key";

-- Add tenant-scoped uniqueness and query-path indexes.
CREATE UNIQUE INDEX "User_tenantId_email_key" ON "User"("tenantId", "email");
CREATE UNIQUE INDEX "Mailbox_tenantId_emailAddress_key" ON "Mailbox"("tenantId", "emailAddress");
CREATE INDEX "Alert_tenantId_status_createdAt_idx" ON "Alert"("tenantId", "status", "createdAt");
CREATE INDEX "AuditEntry_tenantId_createdAt_idx" ON "AuditEntry"("tenantId", "createdAt");
