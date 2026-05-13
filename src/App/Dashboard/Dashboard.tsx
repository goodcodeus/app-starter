import { FC } from 'react';
import { useAuth } from 'core/Auth';

export const Dashboard: FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">
        Welcome back, {user?.name ?? 'friend'} 👋
      </h1>
      <p className="opacity-70">
        This is your fake dashboard. Use the navigation above to move around or
        sign out from the top-right.
      </p>
    </div>
  );
};
