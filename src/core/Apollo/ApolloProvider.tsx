import { FC, useMemo, PropsWithChildren } from 'react';
import {
  ApolloClient,
  ApolloLink
} from '@apollo/client';
import { ApolloProvider as ExternalApolloProvider } from '@apollo/client/react';

import { cache } from './cache';
import { errorLink } from './errorLink';
import { httpLink } from './httpLink';
import { authLink } from './authLink';
import { useNavigate } from 'react-router';

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  const client = useMemo(() => {
    const link = ApolloLink.from([
      errorLink(navigate),
      authLink(),
      httpLink
    ]);

    return new ApolloClient({
      link,
      cache,
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'ignore',
          notifyOnNetworkStatusChange: true
        },
        query: {
          errorPolicy: 'all',
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    });
  }, [navigate]);

  return (
    <ExternalApolloProvider client={client}>{children}</ExternalApolloProvider>
  );
};
