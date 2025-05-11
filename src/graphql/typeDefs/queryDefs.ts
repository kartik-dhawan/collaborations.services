import { gql } from "graphql-tag";

const queryDefs = gql`
  type Query {
    getAllUsers(payload: FetchUserPayload): [User!]
    getUserById(id: Int!): User!
  }
`;

export default queryDefs;
