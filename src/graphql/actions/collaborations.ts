import prisma from "../../prisma/index.ts";
import {
  Collaboration,
  CreateCollaborationPayload,
  CsCollabDeliverables,
  CsCollabStatus,
  CsCollabType,
  CsDeliverableStatus,
  CsPaymentStatus,
} from "../generated/graphql.ts";
import { CollaborationWithClientToGQL } from "../utils/interfaces.ts";

// This is a mapper function to convert the Prisma data structure to the GraphQL data structure
const collborationDataMapper = (
  data: CollaborationWithClientToGQL
): Collaboration => ({
  collabNotes: data.collabNotes,
  collabStatus: data.collabStatus as CsCollabStatus,
  createdAt: data.createdAt.toISOString(),
  dealDate: data.dealDate?.toISOString(),
  deliverableDate: data.deliverableDate?.toISOString(),
  deliverableLink: data.deliverableLink,
  deliverableNotes: data.deliverableNotes,
  deliverableStatus: data.deliverableStatus as CsDeliverableStatus,
  id: data.id,
  name: data.name,
  paymentAmount: data.paymentAmount,
  paymentDate: data.paymentDate?.toISOString(),
  paymentStatus: data.paymentStatus as CsPaymentStatus,
  type: data.type as CsCollabType,
  updatedAt: data.updatedAt?.toISOString(),
  deliverables: data.deliverables as CsCollabDeliverables[],
  client: {
    id: data.client.id,
    name: data.client.name,
    instagram: data.client.instagram,
    clientNotes: data.client.clientNotes,
    createdAt: data.client.createdAt.toISOString(),
    clientContacts:
      data.client.contactPeople.map((contact) => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        createdAt: contact.createdAt.toISOString(),
        clientNotes: contact.contactNotes,
      })) ?? [],
  },
});

export const createNewCollaboration = async (
  payload: CreateCollaborationPayload
) => {
  const createdCollab = await prisma.collaborations.create({
    data: {
      collabStatus: payload.collabStatus,
      type: payload.type,
      name: payload.name,
      collabNotes: payload.collabNotes,
      dealDate: new Date(payload.dealDate),
      deliverables: payload.deliverables,
      deliverableStatus: payload.deliverableStatus,
      deliverableDate: payload.deliverableDate,
      deliverableLink: payload.deliverableLink,
      paymentAmount: payload.paymentAmount,
      paymentDate: payload.paymentDate,
      paymentStatus: payload.paymentStatus,
      deliverableNotes: payload.deliverableNotes,
      client: {
        create: {
          clientNotes: payload.clientPayload.clientNotes,
          instagram: payload.clientPayload.instagram,
          name: payload.clientPayload.name,
          contactPeople: {
            create: payload.clientPayload.clientContacts.map((contact) => ({
              name: contact.name,
              email: contact.email,
              phone: contact.phone,
              contactNotes: contact.clientNotes,
            })),
          },
        },
      },
    },
    include: {
      client: {
        include: {
          contactPeople: true,
        },
      },
    },
  });

  const finalRes: Collaboration = collborationDataMapper(createdCollab);

  return finalRes;
};

export const fetchAllCollaborations = async (): Promise<Collaboration[]> => {
  const collabs = prisma.collaborations.findMany({
    include: {
      client: {
        include: {
          contactPeople: true,
        },
      },
    },
  });

  return (await collabs).map((item) => collborationDataMapper(item));
};
