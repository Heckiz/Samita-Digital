import React from "react";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
