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

  const finalRes: Collaboration = {
    collabNotes: createdCollab.collabNotes,
    collabStatus: createdCollab.collabStatus as CsCollabStatus,
    createdAt: createdCollab.createdAt.toISOString(),
    dealDate: createdCollab.dealDate?.toISOString(),
    deliverableDate: createdCollab.deliverableDate?.toISOString(),
    deliverableLink: createdCollab.deliverableLink,
    deliverableNotes: createdCollab.deliverableNotes,
    deliverableStatus: createdCollab.deliverableStatus as CsDeliverableStatus,
    id: createdCollab.id,
    name: createdCollab.name,
    paymentAmount: createdCollab.paymentAmount,
    paymentDate: createdCollab.paymentDate?.toISOString(),
    paymentStatus: createdCollab.paymentStatus as CsPaymentStatus,
    type: createdCollab.type as CsCollabType,
    updatedAt: createdCollab.updatedAt?.toISOString(),
    deliverables: createdCollab.deliverables as CsCollabDeliverables[],
    client: {
      id: createdCollab.client.id,
      name: createdCollab.client.name,
      instagram: createdCollab.client.instagram,
      clientNotes: createdCollab.client.clientNotes,
      createdAt: createdCollab.client.createdAt.toISOString(),
      clientContacts:
        createdCollab.client.contactPeople.map((contact) => ({
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          createdAt: contact.createdAt.toISOString(),
          clientNotes: contact.contactNotes,
        })) ?? [],
    },
  };

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

  return (await collabs).map((item) => ({
    collabStatus: item.collabStatus as CsCollabStatus,
    createdAt: item.createdAt.toISOString(),
    dealDate: item.dealDate?.toISOString(),
    deliverableDate: item.deliverableDate?.toISOString(),
    deliverableLink: item.deliverableLink,
    deliverableNotes: item.deliverableNotes,
    deliverableStatus: item.deliverableStatus as CsDeliverableStatus,
    id: item.id,
    name: item.name,
    paymentAmount: item.paymentAmount,
    paymentDate: item.paymentDate?.toISOString(),
    paymentStatus: item.paymentStatus as CsPaymentStatus,
    type: item.type as CsCollabType,
    updatedAt: item.updatedAt?.toISOString(),
    deliverables: item.deliverables as CsCollabDeliverables[],
    client: {
      id: item.client.id,
      name: item.client.name,
      instagram: item.client.instagram,
      clientNotes: item.client.clientNotes,
      createdAt: item.client.createdAt.toISOString(),
      clientContacts:
        item.client.contactPeople.map((contact) => ({
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          createdAt: contact.createdAt.toISOString(),
          clientNotes: contact.contactNotes,
        })) ?? [],
    },
  }));
};
