import { PrismaClient } from '@prisma/client';

type SeedClient = {
  tenant: {
    upsert: (args: {
      where: { id: string };
      update: { name: string; locale: string };
      create: { id: string; name: string; locale: string };
    }) => Promise<{ id: string }>;
  };
  user: {
    upsert: (args: {
      where: { tenantId_email: { tenantId: string; email: string } };
      update: { fullName: string; role: 'ADMIN'; tenantId: string };
      create: {
        id: string;
        email: string;
        fullName: string;
        role: 'ADMIN';
        tenantId: string;
      };
    }) => Promise<{ id: string }>;
  };
};

export async function seedDemoData(client: SeedClient): Promise<void> {
  await client.tenant.upsert({
    where: { id: 'tenant_demo_alpha' },
    update: { name: 'Demo Tenant Alpha', locale: 'en' },
    create: { id: 'tenant_demo_alpha', name: 'Demo Tenant Alpha', locale: 'en' }
  });

  await client.user.upsert({
    where: {
      tenantId_email: {
        tenantId: 'tenant_demo_alpha',
        email: 'admin@demo-tenant.local'
      }
    },
    update: {
      fullName: 'Demo Admin',
      role: 'ADMIN',
      tenantId: 'tenant_demo_alpha'
    },
    create: {
      id: 'demo-admin-1',
      email: 'admin@demo-tenant.local',
      fullName: 'Demo Admin',
      role: 'ADMIN',
      tenantId: 'tenant_demo_alpha'
    }
  });
}

async function main(): Promise<void> {
  const prisma = new PrismaClient();
  await seedDemoData(prisma as unknown as SeedClient);
  await prisma.$disconnect();
}

if (require.main === module) {
  void main();
}
