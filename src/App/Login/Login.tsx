import { FC, SyntheticEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Button, Input } from 'reablocks';
import { useAuth } from 'core/Auth';

export const Login: FC = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || !password) return;
    setSubmitting(true);
    await login(username);
    setSubmitting(false);
    navigate('/', { replace: true });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 w-80 p-8 rounded-lg border border-surface bg-panel"
      >
        <h1 className="text-2xl font-semibold text-center">Sign in</h1>
        <p className="text-sm text-center opacity-70">
          Any username / password — this is a demo login.
        </p>
        <label className="flex flex-col gap-1 text-sm">
          Username
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="alice"
            autoFocus
            fullWidth
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Password
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••"
            fullWidth
          />
        </label>
        <Button
          type="submit"
          color="primary"
          variant="filled"
          disabled={submitting || !username.trim() || !password}
          fullWidth
        >
          {submitting ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>
    </div>
  );
};
