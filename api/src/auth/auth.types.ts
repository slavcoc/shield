export type UserRole = 'ADMIN' | 'ACCOUNTANT' | 'FINANCE_MANAGER';

export interface AuthUser {
  userId: string;
  email: string;
  tenantId: string;
  role: UserRole;
}

export interface LoginResult {
  accessToken: string;
  tokenType: 'Bearer';
  expiresInSeconds: number;
  user: AuthUser;
}
