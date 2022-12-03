import { FC } from 'react';

export const ErrorComponent: FC<{ error: any }> = ({ error }) => (
  <div>
    <h1>Error</h1>
    <h2>Something bad happened</h2>
    <pre>{error.message}</pre>
  </div>
);
