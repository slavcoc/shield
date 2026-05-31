import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { loginWithPassword } from './api/authClient';

type Language = 'en' | 'mk';

function Shell() {
  return (
    <header>
      <h1>emailShield Admin</h1>
      <nav aria-label="Primary">
        <Link to="/login">Login</Link>{' '}
        <Link to="/signup">Signup</Link>{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

function LoginPage({ language, onLanguageChange }: { language: Language; onLanguageChange: (value: Language) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loginWithPassword({ email, password });
  }

  return (
    <section>
      <h2>Sign in</h2>
      <p>Current language: {language === 'en' ? 'English' : 'Македонски'}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <div aria-label="Language toggle placeholder">
        <button type="button" onClick={() => onLanguageChange('en')}>EN</button>{' '}
        <button type="button" onClick={() => onLanguageChange('mk')}>MK</button>
      </div>
    </section>
  );
}

function SignupPage() {
  return <h2>Create account</h2>;
}

function DashboardPage() {
  return <h2>Dashboard placeholder</h2>;
}

function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <main>
      <Shell />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </main>
  );
}

export default App;
