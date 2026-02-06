//Here is the main endpoint that run the apollo server and import the typeDefs, resolvers from graphql/index.js
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import bodyParser from "body-parser";

//export the ./graphql/index.js
import { typeDefs, resolvers } from "./graphql/index.js";

const app = express();
//use the typedefs and resolver from graphql/index.js
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();
app.use(express.json());

//use the graphql endpoint
app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));
export default app;