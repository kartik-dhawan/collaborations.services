import { PubSub } from "graphql-subscriptions";
import { PubSubAsyncIterableIterator } from "graphql-subscriptions/dist/pubsub-async-iterable-iterator.js";

interface BoundPubSub {
  publish(payload: any): Promise<void>;
  subscribe(onMessage: (...args: any[]) => void): Promise<number>;
  asyncIterableIterator(): PubSubAsyncIterableIterator<any>;
}

enum PUBSUB_TOPICS {
  NOTIFICATIONS = "NOTIFICATIONS",
}

// a singleton class to make sure that there's always only one instance of pubsub running
class PubSubSingleton {
  private static instance: PubSub;

  private constructor() {}

  public static getInstance(): PubSub {
    if (!PubSubSingleton.instance) {
      PubSubSingleton.instance = new PubSub();
    }
    return PubSubSingleton.instance;
  }
}

export const createTopicPubSub = (topic: PUBSUB_TOPICS): BoundPubSub => {
  const base = PubSubSingleton.getInstance();

  return {
    publish: base.publish.bind(base, topic),
    subscribe: base.subscribe.bind(base, topic),
    asyncIterableIterator: base.asyncIterableIterator.bind(base, topic),
  };
};

// topic level instances of pubsub
export const notificationsPubSub = createTopicPubSub(
  PUBSUB_TOPICS.NOTIFICATIONS
);
