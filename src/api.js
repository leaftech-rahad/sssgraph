import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "./generated/graphql";

// const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");
const serverURL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL}/api/graphql`
    : "http://localhost:3000/api/graphql";
const gqlClient = new GraphQLClient(serverURL);
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
