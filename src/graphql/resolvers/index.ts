import { Resolvers } from "../generated/graphql.ts";
import { clientMutations, clientQueries } from "./clients.resolver.ts";
import { collabMutations, collabQueries } from "./collaboration.resolver.ts";
import { userMutations, userQueries } from "./users.resolver.ts";
import { subscriptionResolvers } from "./subscription.resolver.ts";

export const resolvers: Resolvers = {
  Query: {
    ...userQueries,
    ...collabQueries,
    ...clientQueries,
  },
  Mutation: {
    ...userMutations,
    ...collabMutations,
    ...clientMutations,
  },
  Subscription: {
    ...subscriptionResolvers,
  },
};

export default resolvers;
