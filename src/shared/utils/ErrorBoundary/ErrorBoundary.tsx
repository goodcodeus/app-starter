import React, { useCallback, FC } from 'react';
import { ErrorComponent } from './ErrorComponent';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import * as Sentry from '@sentry/browser';

export const ErrorBoundary: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const onError = useCallback((error: Error) => {
    if (import.meta.env.PROD) {
      // Lets add some additional context for the error
      Sentry.withScope(scope => {
        scope.setTag('type', 'react');
        Sentry.captureException(error);
      });
    }
  }, []);

  return (
    <ReactErrorBoundary FallbackComponent={ErrorComponent} onError={onError}>
      {children}
    </ReactErrorBoundary>
  );
};
