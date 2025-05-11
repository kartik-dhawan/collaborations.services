import { Resolvers } from "../generated/graphql.ts";
import { userMutations, userQueries } from "./users.resolver.ts";

export const resolvers: Resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
};

export default resolvers;
