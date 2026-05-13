import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { AuthRoute } from 'core/Auth';
import { PageLoader } from 'shared/components/PageLoader/PageLoader';

const Login = lazy(() => import('./Login'));
// const Dashboard = lazy(() => import('./Dashboard'));
const Dashboard = lazy(() =>
  new Promise((r) => setTimeout(r, 5000)).then(() => import('./Dashboard'))
);
const NotFound = lazy(() => import('./NotFound'));

export const App: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AuthRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="/404" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);
