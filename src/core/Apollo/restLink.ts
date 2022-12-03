import { RestLink } from 'apollo-link-rest';

// Note: This is just a stop gap until the GraphQL API is ready
export const restLink = new RestLink({
  uri: window.location.origin,
  credentials: 'same-origin'
});
