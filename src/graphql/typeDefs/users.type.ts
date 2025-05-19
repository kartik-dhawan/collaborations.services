import { gql } from "graphql-tag";

const userDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    role: UserRole
    createdAt: String!
    updatedAt: String!
    permissions: [String!]!
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
    password: String!
    role: UserRole
  }

  input UserLoginPayload {
    email: String!
    password: String!
  }

  type SignInResponse {
    token: String!
    user: User!
    message: String
  }

  type DeleteUserResponse {
    status: DeleteStatus!
    message: String!
  }
`;

export default userDefs;
