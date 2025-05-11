import { gql } from "graphql-tag";

const mutationDefs = gql`
  type Mutation {
    createUser(payload: CreateUserPayload!): User!
    updateUser(payload: UpdateUserPayload!): User!
  }
`;

export default mutationDefs;
