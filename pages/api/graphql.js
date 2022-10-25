//import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import Cors from "micro-cors";
import { Query } from "../../src/graphql/resolvers/Query.js";
import { Mutation } from "../../src/graphql/resolvers/Mutation";
import { typeDefs } from "../../src/graphql/typeDefs";

const cors = Cors();
const schema = makeExecutableSchema({
  resolvers: { Query, Mutation },
  typeDefs,
});

const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
