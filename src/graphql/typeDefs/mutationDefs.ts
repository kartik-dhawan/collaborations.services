import { gql } from "graphql-tag";

const mutationDefs = gql`
  type Mutation {
    # USER mutations
    createUser(payload: CreateUserPayload!): User!
    updateUser(payload: UpdateUserPayload!): User!
    deleteAUser(id: Int!): DeleteUserResponse!

    # COLLABORATION mutations
    csCreateCollaboration(payload: CreateCollaborationPayload!): Collaboration!
    csEditCollaboration(payload: UpdateCollaborationPayload): Collaboration!
  }
`;

export default mutationDefs;
