import { gql } from "graphql-tag";

const queryDefs = gql`
  type Query {
    getAllUsers: [User!]
  }
`;

export default queryDefs;
