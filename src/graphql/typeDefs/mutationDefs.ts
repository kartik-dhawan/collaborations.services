import { gql } from "graphql-tag";

const mutationDefs = gql`
  type Mutation {
    updateUser(payload: UpdateUserPayload!): User!
  }
`;

export default mutationDefs;
