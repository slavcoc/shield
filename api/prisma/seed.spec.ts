import { seedDemoData } from './seed';

describe('seedDemoData', () => {
  it('creates a minimal demo tenant and admin user', async () => {
    const tenantUpsert = jest.fn().mockResolvedValue({ id: 'tenant_demo_alpha' });
    const userUpsert = jest.fn().mockResolvedValue({ id: 'demo-admin-1' });

    await seedDemoData({
      tenant: { upsert: tenantUpsert },
      user: { upsert: userUpsert }
    });

    expect(tenantUpsert).toHaveBeenCalledTimes(1);
    expect(userUpsert).toHaveBeenCalledTimes(1);
    expect(userUpsert.mock.calls[0][0].where.tenantId_email).toEqual({
      tenantId: 'tenant_demo_alpha',
      email: 'admin@demo-tenant.local'
    });
    expect(userUpsert.mock.calls[0][0].create.tenantId).toBe('tenant_demo_alpha');
    expect(userUpsert.mock.calls[0][0].create.role).toBe('ADMIN');
  });
});
