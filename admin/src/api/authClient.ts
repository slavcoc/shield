export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: 'Bearer';
  expiresInSeconds: number;
  user: {
    userId: string;
    email: string;
    tenantId: string;
    role: 'ADMIN' | 'ACCOUNTANT' | 'FINANCE_MANAGER';
  };
}

export async function loginWithPassword(input: LoginInput): Promise<LoginResponse> {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return (await response.json()) as LoginResponse;
}
