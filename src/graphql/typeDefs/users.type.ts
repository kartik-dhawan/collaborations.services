import { gql } from "graphql-tag";

const userDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    role: UserRole
  }

  enum UserRole {
    USER
    ADMIN
  }
`;

export default userDefs;
