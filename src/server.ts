import { ApolloServer } from "apollo-server";
import { createSchema } from "./schema";

const startServer = async () => {
  const schema = await createSchema();
  const server = new ApolloServer({ schema });
  server.listen({ port: 4000 }, () =>
    console.log("Server is running on http://localhost:4000")
  );
};

startServer();
