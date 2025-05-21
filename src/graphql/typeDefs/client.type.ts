import { gql } from "graphql-tag";

const clientDefs = gql`
  type CsClientSummary {
    id: ID!
    name: String!
    instagram: String
    createdAt: String!
    clientContacts: [CsClientContactDetails!]!
    clientNotes: String
    user: UserProfile
  }

  type CsClientContactDetails {
    id: ID!
    name: String!
    email: String
    phone: String
    createdAt: String!
    clientNotes: String
    user: UserProfile
  }

  input CreateClientContactPayload {
    name: String!
    email: String
    phone: String
    clientNotes: String
    gender: CsGender
  }

  input CreateClientPayload {
    name: String!
    instagram: String
    clientContacts: [CreateClientContactPayload!]!
    clientNotes: String
  }

  input UpdateCollabClientPayload {
    name: String!
    instagram: String
    clientNotes: String
  }

  enum CsGender {
    MALE
    FEMALE
    OTHER
    PREFER_NOT_TO_SAY
  }
`;

export default clientDefs;
