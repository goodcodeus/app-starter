import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'reablocks';

import { theme } from 'shared/utils/Theme';
import { ErrorBoundary } from 'shared/utils/ErrorBoundary';
import { Auth } from 'core/Auth';
import { App } from './App';

import './index.css';
import { QueryProvider } from './core/api/QueryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <HelmetProvider>
          <Helmet titleTemplate="%s | Starter" defaultTitle="Starter" />
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <Auth>
                <App />
              </Auth>
            </ErrorBoundary>
          </ThemeProvider>
        </HelmetProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
