//import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { Query } from "../../src/graphql/resolvers/Query.js";
import { Mutation } from "../../src/graphql/resolvers/Mutation";
import { typeDefs } from "../../src/graphql/typeDefs";

const schema = makeExecutableSchema({
  resolvers: { Query, Mutation },
  typeDefs,
});

const server = new ApolloServer({
  schema,

  csrfPrevention: true,

  cache: "bounded",

  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
