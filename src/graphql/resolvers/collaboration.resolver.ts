import { GraphQLError } from "graphql";
import { Resolvers } from "../generated/graphql.ts";
import { createNewCollaboration } from "../actions/index.ts";

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
};
