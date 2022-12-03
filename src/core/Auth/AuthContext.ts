import { createContext, useContext } from 'react';

export interface AuthContextProps {
  user: any | null;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  login: () => void;
  logout: (redirect?: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => undefined,
  logout: async () => undefined,
});

export const { Provider: AuthProvider, Consumer: AuthConsumer } = AuthContext;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      '`useAuth` hook must be used within a `AuthProvider` component'
    );
  }

  return context;
};
