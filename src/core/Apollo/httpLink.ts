import { createHttpLink } from '@apollo/client';

export const httpLink = createHttpLink({
  uri: window.location.origin
});
