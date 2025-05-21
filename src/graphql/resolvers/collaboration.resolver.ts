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
