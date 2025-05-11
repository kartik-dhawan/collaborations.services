import { gql } from "graphql-tag";

const mutationDefs = gql`
  type Mutation {
    # USER mutations
    createUser(payload: CreateUserPayload!): User!
    updateUser(payload: UpdateUserPayload!): User!
    deleteAUser(id: Int!): DeleteUserResponse!

    # COLLABORATION mutations
    csCreateCollaboration(payload: CreateCollaborationPayload!): Collaboration!
  }
`;

export default mutationDefs;
