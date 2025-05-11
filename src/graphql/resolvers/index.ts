import { Resolvers } from "../generated/graphql.ts";
import { collabMutations, collabQueries } from "./collaboration.resolver.ts";
import { userMutations, userQueries } from "./users.resolver.ts";

export const resolvers: Resolvers = {
  Query: {
    ...userQueries,
    ...collabQueries,
  },
  Mutation: {
    ...userMutations,
    ...collabMutations,
  },
};

export default resolvers;
