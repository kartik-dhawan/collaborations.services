import { GraphQLError } from "graphql";
import { createNewClient, fetchAllClients } from "../actions/clients.ts";
import { Resolvers } from "../generated/graphql.ts";
import { GraphqlCustomContextType } from "../utils/interfaces.ts";

export const clientQueries: Resolvers<GraphqlCustomContextType>["Query"] = {
  csGetClients: async () => {
    try {
      const clientsData = await fetchAllClients();
      return clientsData;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },
};

export const clientMutations: Resolvers<GraphqlCustomContextType>["Mutation"] =
  {
    csCreateClient: async (_, { payload }, context) => {
      // use logged in user's data from context to store userId in other tables
      const userContext = context.user;

      try {
        const createdClient = await createNewClient(payload, userContext);
        return createdClient;
      } catch (error) {
        throw new GraphQLError(
          error instanceof Error ? error.message : error.toString()
        );
      }
    },
  };
