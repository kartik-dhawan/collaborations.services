import { GraphQLError } from "graphql";
import { Resolvers } from "../generated/graphql.ts";
import {
  createNewCollaboration,
  fetchAllCollaborations,
  updateCollaborationByID,
} from "../actions/index.ts";
import { GraphqlCustomContextType } from "../utils/index.ts";

/** QUERIES */
export const collabQueries: Resolvers<GraphqlCustomContextType>["Query"] = {
  csGetCollaborations: async (_, __, context) => {
    const userContext = context.user;

    try {
      const collaborations = await fetchAllCollaborations(userContext);
      return collaborations;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },
};

/** MUTATIONS */
export const collabMutations: Resolvers<GraphqlCustomContextType>["Mutation"] =
  {
    csCreateCollaboration: async (_, { payload }, context) => {
      // use logged in user's data from context to store userId in other tables
      const userContext = context.user;

      try {
        const createdCollaboration = await createNewCollaboration(
          payload,
          userContext
        );
        return createdCollaboration;
      } catch (error) {
        throw new GraphQLError(
          error instanceof Error ? error.message : String(error)
        );
      }
    },

    csEditCollaboration: async (_, { payload }) => {
      try {
        if (!payload) {
          throw new GraphQLError("Edit input is required");
        }
        const updatedCollaboration = await updateCollaborationByID(payload);
        return updatedCollaboration;
      } catch (error) {
        throw new GraphQLError(
          error instanceof Error ? error.message : String(error)
        );
      }
    },
  };
