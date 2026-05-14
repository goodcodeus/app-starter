import { FC } from 'react';
import { H1, P } from 'reablocks';
import { useAuth } from 'core/Auth';

// Demo data — replace with real content based on project requirements.
export const Dashboard: FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      <H1>Welcome back, {user?.name ?? 'friend'} 👋</H1>
      <P>
        This is your fake dashboard. Use the navigation above to move around or
        sign out from the top-right.
      </P>
    </div>
  );
};
