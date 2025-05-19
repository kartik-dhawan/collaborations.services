import { gql } from "graphql-tag";

const queryDefs = gql`
  type Query {
    # USER queries
    getAllUsers(payload: FetchUserPayload): [User!]
    getUserById(id: Int!): User!
    umsLogin(payload: UserLoginPayload!): SignInResponse!
    umsGetUserPermissions(userId: Int!): PermissionsResponse!

    # COLLABORATION queries
    csGetCollaborations: [Collaboration!]!

    # CLIENT queries
    csGetClients: [CsClientSummary!]!
  }
`;

export default queryDefs;
