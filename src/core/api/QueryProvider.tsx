import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren, useMemo } from 'react';

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {

  const client = useMemo(() => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false
        },
        mutations: {
          retry: false,
          onError: (error: any) => {
            console.error(`Mutation error: ${error.message}`);
          }
        }
      }
    });

    return queryClient;
  }, []);

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};
