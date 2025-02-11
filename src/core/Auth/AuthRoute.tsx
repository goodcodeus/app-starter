import { FC } from 'react';
import { Navigate, Outlet, RouteProps, useLocation } from 'react-router';
import { useAuth } from './AuthContext';

const paths = ['', '/', '/login', '/logout'];
export const PREV_ROUTE = 'PREV_ROUTE';

export const AuthRoute: FC<RouteProps> = () => {
  const { isAuthenticated, logout, isLoading, user } = useAuth();
  const location = useLocation();

  const prevRoute = window.localStorage.getItem(PREV_ROUTE);
  const pathname = location.pathname;

  if (!isAuthenticated && !isLoading) {
    if (!prevRoute && pathname && !paths.includes(pathname)) {
      window.localStorage.setItem(PREV_ROUTE, pathname);
    }

    logout();
    return <Navigate to="/login" replace />;
  }

  if (user) {
    if (prevRoute && pathname !== prevRoute) {
      window.localStorage.removeItem(PREV_ROUTE);
      return <Navigate to={prevRoute} />;
    }
  } else if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
};
