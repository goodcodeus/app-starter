import { useQueryClient } from '@tanstack/react-query';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthProvider } from './AuthContext';

interface FakeUser {
  id: string;
  username: string;
  name: string;
}

const STORAGE_KEY = 'fake-auth-user';

const readUser = (): FakeUser | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FakeUser) : null;
  } catch {
    return null;
  }
};

export const Auth: FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = useQueryClient();
  const [user, setUser] = useState<FakeUser | null>(() => readUser());
  const [isLoading] = useState<boolean>(false);
  const isAuthenticated = !!user;

  useEffect(() => {
    async function setupUser() {
      if (import.meta.env.PROD) {
        // Put things like sentry/fullstory boot here
      }
    }

    if (user) {
      setupUser();
    }
  }, [user]);

  const login = useCallback(async (username?: string) => {
    const name = (username && username.trim()) || 'Guest';
    const nextUser: FakeUser = {
      id: 'fake-' + Date.now(),
      username: name,
      name: name.charAt(0).toUpperCase() + name.slice(1)
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }, []);

  const logout = useCallback(async () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setUser(null);
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
