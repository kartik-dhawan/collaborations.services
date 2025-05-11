import { gql } from "graphql-tag";

const clientDefs = gql`
  type ClientDetails {
    id: ID!
    name: String!
    instagram: String
    createdAt: String!
    clientContacts: [ClientContactDetails!]!
    collaborations: [Collaboration!]!
    clientNotes: String
  }

  type ClientContactDetails {
    id: ID!
    name: String!
    email: String
    phone: String
    createdAt: String!
    client: ClientDetails!
    clientNotes: String
  }

  input CreateClientContactPayload {
    name: String!
    email: String
    phone: String
    createdAt: String!
    clientNotes: String
  }

  input CreateClientPayload {
    name: String!
    instagram: String
    createdAt: String!
    clientContacts: [CreateClientContactPayload!]!
    clientNotes: String
  }
`;

export default clientDefs;
