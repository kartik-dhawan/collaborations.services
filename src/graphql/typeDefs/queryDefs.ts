import { gql } from "graphql-tag";

const queryDefs = gql`
  type Query {
    getAllUsers: [User!]
    getUserById(id: Int!): User!
  }
`;

export default queryDefs;
