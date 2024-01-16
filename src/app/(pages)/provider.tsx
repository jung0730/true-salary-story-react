'use client';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const client = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}