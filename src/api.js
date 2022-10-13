import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "./generated/graphql";

// const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");
const gqlClient = new GraphQLClient(
  `https://${process.env.VERCEL_URL}/api/graphql`
);
export const { allusers } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
