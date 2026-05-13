import { FC } from 'react';
import { Controller, Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate, useNavigate } from 'react-router';
import { Button, Field, H2, Input, Muted } from 'reablocks';
import * as yup from 'yup';
import { useAuth } from 'core/Auth';

const loginSchema = yup.object({
  username: yup.string().trim().required('Username is required'),
  password: yup.string().required('Password is required')
});

type LoginFormData = yup.InferType<typeof loginSchema>;

export const Login: FC = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    defaultValues: { username: '', password: '' },
    resolver: yupResolver(loginSchema) as Resolver<LoginFormData>
  });

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = handleSubmit(async ({ username }) => {
    await login(username);
    navigate('/', { replace: true });
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 max-w-[500px] p-8 rounded-lg border border-surface bg-panel"
      >
        <H2 className="text-center border-0 pb-0">Sign in</H2>
        <Muted className="text-center">
          Any username / password — this is a demo login.
        </Muted>
        <Field label="Username" required error={errors.username?.message}>
          <Controller
            name="username"
            control={control}
            render={({ field: { value, onChange, onBlur, name } }) => (
              <Input
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="alice"
                autoFocus
                fullWidth
                error={!!errors.username}
              />
            )}
          />
        </Field>
        <Field label="Password" required error={errors.password?.message}>
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange, onBlur, name } }) => (
              <Input
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type="password"
                placeholder="••••••"
                fullWidth
                error={!!errors.password}
              />
            )}
          />
        </Field>
        <Button
          type="submit"
          color="primary"
          variant="filled"
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>
    </div>
  );
};
