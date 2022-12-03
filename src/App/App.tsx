import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRoute } from 'core/Auth';
import './App.module.css';

const NotFound = lazy(() => import('./NotFound'));

export const App: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<AuthRoute />}>
        <Route path="/404" element={<NotFound />} />
      </Route>
      <Route>
        {/* <Route path="/login/*" element={<Login />} /> */}
      </Route>
    </Routes>
  </Suspense>
);
