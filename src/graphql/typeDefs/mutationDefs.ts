import { gql } from "graphql-tag";

const mutationDefs = gql`
  type Mutation {
    # USER mutations
    createUser(payload: CreateUserPayload!): User!
    updateUser(payload: UpdateUserPayload!): User!
    deleteAUser(id: Int!): DeleteUserResponse!
    umsSignUp(payload: CreateUserPayload!): SignInResponse!
    umsAssignPermissionsToRole(
      payload: AssignPermissionsPayload!
    ): PermissionsResponse!

    # COLLABORATION mutations
    csCreateCollaboration(payload: CreateCollaborationPayload!): Collaboration!
    csEditCollaboration(payload: UpdateCollaborationPayload): Collaboration!

    # CLIENT mutations
    csCreateClient(payload: CreateClientPayload!): CsClientSummary!
  }
`;

export default mutationDefs;
