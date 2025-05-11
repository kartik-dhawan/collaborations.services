import { gql } from "graphql-tag";

const collaborationsDef = gql`
  type Collaboration {
    id: ID!
    name: String
    type: CsCollabType!
    collabStatus: CsCollabStatus!
    createdAt: String!
    updatedAt: String
    dealDate: String
    paymentStatus: CsPaymentStatus!
    paymentAmount: Int
    paymentDate: String
    clientId: String!
    client: ClientDetails!
    deliverables: [CsCollabDeliverables!]!
    deliverableDate: String
    deliverableLink: String
    deliverableStatus: CsDeliverableStatus!
    deliverableNotes: String
    collabNotes: String
  }

  input CreateCollaborationPayload {
    name: String
    type: CsCollabType!
    collabStatus: CsCollabStatus!
    createdAt: String!
    updatedAt: String
    dealDate: String
    paymentStatus: CsPaymentStatus!
    paymentAmount: Int
    paymentDate: String
    deliverables: [CsCollabDeliverables!]!
    deliverableDate: String!
    deliverableLink: String
    deliverableStatus: CsDeliverableStatus!
    deliverableNotes: String
    collabNotes: String
    clientPayload: CreateClientPayload!
  }

  enum CsCollabType {
    UNPAID_COLLABORATION
    PAID_COLLABORATION
    BARTER_COLLABORATION
    PAID_PROMOTION
    PAID_GIG
  }

  enum CsPaymentStatus {
    PENDING
    PAID
    UNPAID
  }

  enum CsCollabStatus {
    FINALISED
    DID_NOT_HAPPEN
    COMPLETED
  }

  enum CsCollabDeliverables {
    REEL
    REEL_WITHOUT_COLLAB
    CAROUSEL_POST
    CAROUSEL_POST_WITHOUT_COLLAB
    STORIES
    SONG_PROMOTION
    PHOTO_SHOOT
    VIDEO_EDIT
  }

  enum CsDeliverableStatus {
    COMPLETED
    CANCELLED
    IN_PROGRESS
    REJECTED
    APPROVED
    IN_REVIEW
  }
`;

export default collaborationsDef;
