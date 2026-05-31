import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe('Admin route shell', () => {
  it('renders login route content and nav links', () => {
    renderAt('/login');

    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /signup/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
  });

  it('supports language toggle placeholder between EN and MK', async () => {
    const user = (await import('@testing-library/user-event')).default.setup();
    renderAt('/login');

    expect(screen.getByText(/current language: english/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /mk/i }));
    expect(screen.getByText(/current language: македонски/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /en/i }));
    expect(screen.getByText(/current language: english/i)).toBeInTheDocument();
  });

  it('submits login form through the typed auth API client contract', async () => {
    const user = (await import('@testing-library/user-event')).default.setup();
    const authClient = await import('./api/authClient');
    const loginSpy = vi
      .spyOn(authClient, 'loginWithPassword')
      .mockResolvedValue({
        accessToken: 'token',
        tokenType: 'Bearer',
        expiresInSeconds: 3600,
        user: {
          userId: 'u1',
          email: 'admin@demo-tenant.local',
          tenantId: 'tenant_demo_alpha',
          role: 'ADMIN'
        }
      });

    renderAt('/login');

    await user.type(screen.getByLabelText(/email/i), 'admin@demo-tenant.local');
    await user.type(screen.getByLabelText(/password/i), 'demo1234');
    await user.click(screen.getByRole('button', { name: /sign in/i }));

    expect(loginSpy).toHaveBeenCalledWith({
      email: 'admin@demo-tenant.local',
      password: 'demo1234'
    });

    loginSpy.mockRestore();
  });

  it('renders signup route content', () => {
    renderAt('/signup');

    expect(screen.getByRole('heading', { name: /create account/i })).toBeInTheDocument();
  });

  it('renders dashboard placeholder route content', () => {
    renderAt('/dashboard');

    expect(screen.getByRole('heading', { name: /dashboard placeholder/i })).toBeInTheDocument();
  });
});
