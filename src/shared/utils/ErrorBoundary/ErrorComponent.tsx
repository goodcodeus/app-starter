import { FC, useEffect, useRef } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router';

export const ErrorComponent: FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  const location = useLocation();
  const initialPathname = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== initialPathname.current) {
      resetErrorBoundary();
    }
  }, [initialPathname, location.pathname, resetErrorBoundary]);

  return (
    <div>
      <h1>Error</h1>
      <h2>Something bad happened</h2>
      <pre>{error.message}</pre>
    </div>
  );
};
