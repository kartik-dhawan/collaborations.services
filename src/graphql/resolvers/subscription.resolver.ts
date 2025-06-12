import { Resolvers } from "../generated/graphql.ts";
import { notificationsPubSub } from "../pubsub.ts";

export const subscriptionResolvers: Resolvers["Subscription"] = {
  appNotifications: {
    subscribe: () => notificationsPubSub.asyncIterableIterator(),
    resolve: (payload: any) => {
      return payload.message;
    },
  },
};
