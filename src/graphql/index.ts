import express from "express"; // Importing the express framework for building the server
import { ApolloServer } from "@apollo/server"; // Importing ApolloServer for GraphQL server functionality
import { expressMiddleware } from "@apollo/server/express4"; // Importing expressMiddleware to integrate Apollo with Express
import dotenv from "dotenv";
import prisma from "../prisma/index.ts";
import { getProtectedSchema } from "./protected.ts";
import { JwtUser } from "./utils/interfaces.ts";
import {
  getPermissionsByUserId,
  verifyJwtAndAuthenticate,
} from "./actions/index.ts";
import { User } from "./generated/graphql.ts";
import logger from "../../winston.config.ts";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/use/ws";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

dotenv.config();

const PORT = process.env.PORT ?? 3002; // Setting the port from environment variable or defaulting to 3002

// Function to start the server
const startServer = async () => {
  const app = express(); // Creating an instance of an Express application

  // Middleware to parse JSON request bodies
  app.use(express.json());

  // schema (typedefs with protection of permissions)
  const protectedSchema = getProtectedSchema();

  /**
   * create a new http server for subscriptions
   *
   * A plain Node.js HTTP server instance.
   *
   * Our Express (or other) app by itself only defines how to handle requests, but doesn’t actually listen on a port until you hook it up to an HTTP server.
   *
   * By calling createServer(app), you wrap your Express app in a server that can both:
   * - Accept regular HTTP requests (for your queries and mutations), and
   * - Upgrade certain connections to WebSockets (for subscriptions).
   */
  const httpServer = createServer(app);

  /**
   * An instance of a WebSocket server (from the ws package) that “listens” for WebSocket handshake requests.
   */
  const wsServer = new WebSocketServer({
    // this is to distinctly separate your subscription traffic from your normal REST/GraphQL-over-HTTP traffic, while still using the same port.

    server: httpServer,
    // – This WebSocket server will handle the upgrade requests from the HTTP server.
    // You don’t open a second port just for WebSockets—you reuse the same door.

    path: "/graphql",
    // – Only treats ws://…/subscriptions upgrade requests as WebSockets.
    // – Everything else (e.g. GET /graphql) stays with Express.
  });

  const wsCleanup = useServer({ schema: protectedSchema }, wsServer);

  // Creating a new Apollo Server instance with type definitions and resolvers
  const server = new ApolloServer({
    schema: protectedSchema,
    formatError: (err) => {
      return err;
    },
    // plugins - An array of lifecycle hooks that let you run code at key moments (startup, shutdown, errors, etc.).
    plugins: [
      /**
       * Here you have two plugins:
       * one to cleanly shut down your HTTP server,
       * and one to cleanly shut down your WebSocket server.
       */

      /**
       * @ApolloServerPluginDrainHttpServer
       * By default, if you kill your process (e.g. CTRL+C), any in-flight HTTP requests could get cut off mid-stream.
       * This plugin makes sure Apollo first stops accepting new HTTP requests,
       * then waits for ongoing ones to finish, before finally shutting down the socket.
       */
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        /**
         * A lifecycle hook that Apollo calls right after the server has initialized, but before it starts listening.
         */
        serverWillStart: async () => {
          return {
            /**
             * By returning an object with a drainServer method, you tell Apollo:
             * -- “When you’re about to shut everything down, please call this drainServer function.”
             */
            drainServer: async () => {
              await wsCleanup.dispose(); // This is your cleanup logic for WebSockets.
            },
          };
        },
      },
    ],
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

          let userContext: User | undefined = undefined;

          // setup permissions in the context as well, we find permissions after we get the user
          if (user?.id) {
            const { permissions } = await getPermissionsByUserId(user.id);
            userContext = { ...user, permissions };
          }

          return { req, res, user: userContext }; // Returning the request, response & user objects in the context
        },
      })
    );

    httpServer.listen(PORT, () => {
      logger.common.info(
        `Server is running on http://localhost:${PORT}/graphql`
      );
      logger.common.info(
        `Subscription endpoint ready at ws://localhost:${PORT}/graphql`
      );
    });
  } catch (error) {
    logger.common.error("Server startup error:", error); // Logging any errors that occur during server startup
    prisma.$disconnect();
  }
};

// Invoking the function to start the server
startServer();
