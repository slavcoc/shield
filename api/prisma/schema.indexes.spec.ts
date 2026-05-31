import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('Prisma tenant-scoped index conventions', () => {
  const schema = readFileSync(join(__dirname, 'schema.prisma'), 'utf8');

  it('uses tenant-scoped uniqueness for user email', () => {
    expect(schema).toContain('@@unique([tenantId, email])');
  });

  it('uses tenant-scoped uniqueness for mailbox email address', () => {
    expect(schema).toContain('@@unique([tenantId, emailAddress])');
  });

  it('indexes alert query hot paths by tenant, status, and created time', () => {
    expect(schema).toContain('@@index([tenantId, status, createdAt])');
  });

  it('indexes audit timeline queries by tenant and created time', () => {
    expect(schema).toContain('@@index([tenantId, createdAt])');
  });
});