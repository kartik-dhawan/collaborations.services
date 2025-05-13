import { GraphQLError } from "graphql";
import { createNewClient, fetchAllClients } from "../actions/clients.ts";
import { Resolvers } from "../generated/graphql.ts";

export const clientQueries: Resolvers["Query"] = {
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

export const clientMutations: Resolvers["Mutation"] = {
  csCreateClient: async (_, { payload }) => {
    try {
      console.log({ payload });
      const createdClient = await createNewClient(payload);
      return createdClient;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },
};
