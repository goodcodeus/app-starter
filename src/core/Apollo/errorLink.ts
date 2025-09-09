import { CombinedGraphQLErrors, ServerError } from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';

export const errorLink = navigate =>
  new ErrorLink(({ error, operation, forward }) => {
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    } else {
      console.error(`[Network error]: ${error.message}`);

      // If we get a 401, let's redirect to the login page
      if ((error as ServerError).statusCode === 401) {
        navigate('/login');
      }
    }

    return forward(operation);
  });
