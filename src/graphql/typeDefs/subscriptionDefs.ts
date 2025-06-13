import { gql } from "graphql-tag";

const subscriptionDefs = gql`
  scalar Json

  type NotificationResponse {
    message: String!
    timeStamp: Int!
    service: String!
    data: Json
    user: User
  }

  type Subscription {
    appNotifications: NotificationResponse!
  }
`;

export default subscriptionDefs;
