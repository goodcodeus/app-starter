import { useQueryClient } from '@tanstack/react-query';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthProvider } from './AuthContext';

export const Auth: FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = useQueryClient();
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
    client.clear();
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
