import { gql } from "graphql-tag";

const userDefs = gql`
  type UserProfile {
    id: Int!
    email: String!
    name: String!
    role: UserRole
  }

  type User {
    id: Int!
    email: String!
    name: String!
    role: UserRole
    createdAt: String!
    updatedAt: String!
    permissions: [PermissionValue!]!
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

  type PermissionsResponse {
    permissions: [PermissionValue!]!
    totalCount: Int
    role: UserRole
  }

  enum PermissionValue {
    CREATE_NEW_USER
    READ_USER_DATA
    UPDATE_USER
    DELETE_A_USER
    CREATE_COLLABORATION
    READ_COLLABORAIONS_DATA
    EDIT_COLLABORATION
    CREATE_CLIENT
    READ_CLIENT_DATA
  }
`;

export default userDefs;
