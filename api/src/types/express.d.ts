import { UserRole } from 'src/auth/auth.types';

declare global {
  namespace Express {
    interface User {
      userId: string;
      email: string;
      tenantId: string;
      role: UserRole;
    }

    interface Request {
      user?: User;
    }
  }
}

export {};
