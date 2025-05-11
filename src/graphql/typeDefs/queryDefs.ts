import { gql } from "graphql-tag";

const queryDefs = gql`
  type Query {
    # USER queries
    getAllUsers(payload: FetchUserPayload): [User!]
    getUserById(id: Int!): User!

    # COLLABORATION queries
    csGetCollaborations: [Collaboration!]!
  }
`;

export default queryDefs;
