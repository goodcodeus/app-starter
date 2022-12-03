import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { DesignTokensProvider } from 'reablocks';

import { theme } from 'shared/utils/DesignTokens';
import { ErrorBoundary } from 'shared/utils/ErrorBoundary';
import { Auth } from 'core/Auth';
import { ApolloProvider } from 'core/Apollo';
import { App } from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider>
        <HelmetProvider>
          <Helmet titleTemplate="%s | Starter" defaultTitle="Starter" />
          <DesignTokensProvider value={theme}>
            <ErrorBoundary>
              <Auth>
                <App />
              </Auth>
            </ErrorBoundary>
          </DesignTokensProvider>
        </HelmetProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
