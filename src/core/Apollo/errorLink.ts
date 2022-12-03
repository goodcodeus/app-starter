import { ServerError } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export const errorLink = navigate =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);

      // If we get a 401, let's redirect to the login page
      if ((networkError as ServerError).statusCode === 401) {
        navigate('/login');
      }
    }
  });
