import { Resolvers } from "../generated/graphql.ts";
import { userQueries } from "./users.resolver.ts";

export const resolvers: Resolvers = {
  Query: {
    ...userQueries,
  },
};

export default resolvers;
