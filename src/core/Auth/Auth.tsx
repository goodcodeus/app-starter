import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthProvider } from './AuthContext';
import { useApolloClient } from '@apollo/client';

export const Auth: FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = useApolloClient();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    async function setupUser() {
      if (import.meta.env.PROD) {
        // Put things like sentry/fullstory boot here
      }
    }

    // If we got the auth0 user and we are not already loading the user
    if (user) {
      setupUser();
    }
  }, [user]);

  const login = useCallback(async () => {
    // TODO
  }, []);

  const logout = useCallback(async () => {
    // TODO
    client.clearStore();
  }, [client]);


  const values = useMemo(
    () => ({
      user,
      login,
      isLoading,
      isAuthenticated,
      logout
    }),
    [isAuthenticated, isLoading, login, logout, user]
  );

  return <AuthProvider value={values}>{children}</AuthProvider>;
};
