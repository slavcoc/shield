import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUser, LoginResult, UserRole } from './auth.types';

interface DemoUser extends AuthUser {
  password: string;
}

@Injectable()
export class AuthService {
  private readonly demoUsers: DemoUser[] = [
    {
      userId: 'demo-admin-1',
      email: 'admin@demo-tenant.local',
      password: 'demo1234',
      tenantId: 'tenant_demo_alpha',
      role: 'ADMIN'
    },
    {
      userId: 'demo-finance-1',
      email: 'finance@demo-tenant.local',
      password: 'demo1234',
      tenantId: 'tenant_demo_alpha',
      role: 'FINANCE_MANAGER'
    }
  ];

  constructor(private readonly jwtService: JwtService) {}

  async login(email: string, password: string): Promise<LoginResult> {
    const user = this.demoUsers.find(
      (candidate) => candidate.email.toLowerCase() === email.toLowerCase()
    );

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.userId,
      email: user.email,
      tenantId: user.tenantId,
      role: user.role as UserRole
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresInSeconds: 3600,
      user: {
        userId: user.userId,
        email: user.email,
        tenantId: user.tenantId,
        role: user.role
      }
    };
  }
}
