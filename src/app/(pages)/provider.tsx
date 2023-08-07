"use client";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { CookiesProvider } from 'react-cookie';

const client = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    </CookiesProvider>
  );
}