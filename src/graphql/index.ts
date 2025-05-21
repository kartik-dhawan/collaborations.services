import express from "express"; // Importing the express framework for building the server
import { ApolloServer } from "@apollo/server"; // Importing ApolloServer for GraphQL server functionality
import { expressMiddleware } from "@apollo/server/express4"; // Importing expressMiddleware to integrate Apollo with Express
import dotenv from "dotenv";
import prisma from "../prisma/index.ts";
import { getProtectedSchema, protectedRoutesPlugin } from "./protected.ts";
import { JwtUser } from "./utils/interfaces.ts";
import { verifyJwtAndAuthenticate } from "./actions/index.ts";

dotenv.config();

const PORT = process.env.PORT || 3002; // Setting the port from environment variable or defaulting to 3002

// Function to start the server
const startServer = async () => {
  const app = express(); // Creating an instance of an Express application

  // Middleware to parse JSON request bodies
  app.use(express.json());

  // schema (typedefs with protection of permissions)
  const protectedSchema = getProtectedSchema();

  // Creating a new Apollo Server instance with type definitions and resolvers
  const server = new ApolloServer({
    schema: protectedSchema,
    plugins: [protectedRoutesPlugin],
    formatError: (err) => {
      return {
        message: err.message,
        path: err.path,
      };
    },
  });

  try {
    await server.start(); // Starting the Apollo Server
    await prisma.$connect();

    // Setting up the GraphQL endpoint with middleware
    app.use(
      "/graphql",
      expressMiddleware(server, {
        context: async (params) => {
          const { req, res } = params;

          const authToken = req.headers.authorization;
          const user: JwtUser | undefined = await verifyJwtAndAuthenticate(
            authToken
          ); // verify the token & return the data from it if present

          return { req, res, user }; // Returning the request, response & user objects in the context
        },
      })
    );

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/graphql`); // Logging the server URL
    });
  } catch (error) {
    console.error("Server startup error:", error); // Logging any errors that occur during server startup
    prisma.$disconnect();
  }
};

// Invoking the function to start the server
startServer();
