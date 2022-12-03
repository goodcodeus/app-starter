import { FC, useMemo, PropsWithChildren } from 'react';
import {
  ApolloClient,
  ApolloProvider as ExternalApolloProvider,
  ApolloLink
} from '@apollo/client';

import { cache } from './cache';
import { errorLink } from './errorLink';
import { httpLink } from './httpLink';
import { authLink } from './authLink';
import { restLink } from './restLink';
import { useNavigate } from 'react-router-dom';

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  const client = useMemo(() => {
    const link = ApolloLink.from([
      errorLink(navigate),
      authLink(),
      restLink,
      httpLink
    ]);

    return new ApolloClient({
      link,
      cache,
      connectToDevTools: true,
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'ignore',
          notifyOnNetworkStatusChange: true
        },
        query: {
          errorPolicy: 'all',
          notifyOnNetworkStatusChange: true
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
