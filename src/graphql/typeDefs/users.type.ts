import { gql } from "graphql-tag";

const userDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    role: UserRole
    createdAt: String!
    updatedAt: String!
  }

  enum UserRole {
    USER
    ADMIN
  }

  enum UserSearchFields {
    email
    name
  }

  input UserSearch {
    key: UserSearchFields!
    value: String!
  }

  input UserSorting {
    key: UserSearchFields!
    value: OrderBy!
  }

  input FetchUserPayload {
    search: [UserSearch!]
    sort: UserSorting
  }

  input UpdateUserPayload {
    id: Int!
    email: String
    name: String
    role: UserRole
  }

  input CreateUserPayload {
    email: String!
    name: String!
    role: UserRole
  }

  type DeleteUserResponse {
    status: DeleteStatus!
    message: String!
  }
`;

export default userDefs;
