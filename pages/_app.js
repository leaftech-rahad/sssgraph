import "../styles/globals.css";
import { Hydrate, QueryClientProvider, QueryClient } from "react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";

// import { queryClient } from "../src/api";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  );
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
