import { setContext } from '@apollo/client/link/context';

export const authLink = () =>
  setContext(async () => ({
    headers: {
      // Note: This is where you would add auth headers
      Authorization: `Bearer `
    }
  }));
