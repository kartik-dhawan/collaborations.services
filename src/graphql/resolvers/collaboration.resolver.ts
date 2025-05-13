import { GraphQLError } from "graphql";
import { Resolvers } from "../generated/graphql.ts";
import {
  createNewCollaboration,
  fetchAllCollaborations,
  updateCollaborationByID,
} from "../actions/index.ts";

/** QUERIES */
export const collabQueries: Resolvers["Query"] = {
  csGetCollaborations: async () => {
    try {
      const collaborations = await fetchAllCollaborations();
      return collaborations;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },
};

/** MUTATIONS */
export const collabMutations: Resolvers["Mutation"] = {
  csCreateCollaboration: async (_, { payload }) => {
    try {
      const createdCollaboration = await createNewCollaboration(payload);
      return createdCollaboration;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },

  csEditCollaboration: async (_, { payload }) => {
    try {
      const updatedCollaboration = await updateCollaborationByID(payload);
      return updatedCollaboration;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },
};
