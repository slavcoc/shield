import {
  Controller,
  Get,
  INestApplication,
  Req,
  UseGuards
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import * as request from 'supertest';
import { Request } from 'express';
import { AuthModule } from '../src/auth/auth.module';
import { Roles } from '../src/common/decorators/roles.decorator';
import { JwtAuthGuard } from '../src/common/guards/jwt-auth.guard';
import { RolesGuard } from '../src/common/guards/roles.guard';

@Controller('protected')
@UseGuards(JwtAuthGuard, RolesGuard)
class ProtectedTestController {
  @Get('tenant-context')
  @Roles('ADMIN', 'ACCOUNTANT', 'FINANCE_MANAGER')
  tenantContext(@Req() req: Request) {
    return {
      ok: true,
      user: req.user
    };
  }
}

describe('Auth + Protected Routes', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          ignoreEnvFile: true,
          load: [
            () => ({
              JWT_SECRET: 'emailshield-test-secret'
            })
          ]
        }),
        AuthModule
      ],
      controllers: [ProtectedTestController],
      providers: [JwtAuthGuard, RolesGuard]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('logs in with valid demo credentials', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'admin@demo-tenant.local', password: 'demo1234' })
      .expect(201);

    expect(response.body.accessToken).toBeDefined();
    expect(response.body.user.tenantId).toBe('tenant_demo_alpha');
    expect(response.body.user.role).toBe('ADMIN');
  });

  it('rejects invalid login', async () => {
    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'admin@demo-tenant.local', password: 'wrong-password' })
      .expect(401);
  });

  it('rejects protected access without token', async () => {
    await request(app.getHttpServer()).get('/protected/tenant-context').expect(401);
  });

  it('allows protected access with valid token and returns tenant context', async () => {
    const login = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'finance@demo-tenant.local', password: 'demo1234' })
      .expect(201);

    const token = login.body.accessToken;

    const response = await request(app.getHttpServer())
      .get('/protected/tenant-context')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.ok).toBe(true);
    expect(response.body.user.tenantId).toBe('tenant_demo_alpha');
    expect(response.body.user.role).toBe('FINANCE_MANAGER');
  });
});
