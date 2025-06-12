import { gql } from "graphql-tag";

const subscriptionDefs = gql`
  type Subscription {
    appNotifications: String!
  }
`;

export default subscriptionDefs;
