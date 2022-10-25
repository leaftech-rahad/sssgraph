import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "./generated/graphql";
import { SERVER_URL } from "../src/config";

const gqlClient = new GraphQLClient(SERVER_URL);
export const { getUser, getUsers, createUser } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
