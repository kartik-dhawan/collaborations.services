import prisma from "../../prisma/index.ts";
import {
  Collaboration,
  CreateCollaborationPayload,
  CsCollabDeliverables,
  CsCollabStatus,
  CsCollabType,
  CsDeliverableStatus,
  CsPaymentStatus,
  UpdateCollaborationPayload,
  User,
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
  user: data.user,
});

export const fetchAllCollaborations = async (
  user: User
): Promise<Collaboration[]> => {
  const collabs = prisma.collaborations.findMany({
    include: {
      client: {
        include: {
          contactPeople: true,
        },
      },
      user: true,
    },
  });

  return (await collabs).map((item) => ({
    ...collborationDataMapper(item),
    isMine: user.id === item.userId,
  }));
};

export const createNewCollaboration = async (
  payload: CreateCollaborationPayload,
  user: User
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
      user: {
        connect: {
          id: user.id,
        },
      },
      // if there's already a clientId, we will connect to that client
      // otherwise, we will create a new client
      client: payload.clientId
        ? {
            connect: {
              id: payload.clientId,
            },
          }
        : {
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
                  user: {
                    connect: {
                      id: user.id,
                    },
                  },
                })),
              },
              user: {
                connect: {
                  id: user.id,
                },
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
      user: true,
    },
  });

  const finalRes: Collaboration = collborationDataMapper(createdCollab);

  return finalRes;
};

export const updateCollaborationByID = async (
  payload: UpdateCollaborationPayload
) => {
  const updatedUser = await prisma.collaborations.update({
    where: {
      id: payload.id,
    },
    data: {
      collabStatus: payload.collabStatus,
      type: payload.type,
      name: payload.name,
      collabNotes: payload.collabNotes,
      dealDate: payload.dealDate ? new Date(payload.dealDate) : undefined,
      deliverables: payload.deliverables,
      deliverableStatus: payload.deliverableStatus,
      deliverableDate: payload?.deliverableDate
        ? new Date(payload?.deliverableDate)
        : undefined,
      deliverableLink: payload.deliverableLink,
      paymentAmount: payload.paymentAmount,
      paymentDate: payload.paymentDate
        ? new Date(payload.paymentDate)
        : undefined,
      paymentStatus: payload.paymentStatus,
      deliverableNotes: payload.deliverableNotes,
      client: {
        update: {
          clientNotes: payload.clientPayload?.clientNotes,
          instagram: payload.clientPayload?.instagram,
          name: payload.clientPayload?.name,
        },
      },
    },
    include: {
      client: {
        include: {
          contactPeople: true,
        },
      },
      user: true,
    },
  });

  const finalRes: Collaboration = collborationDataMapper(updatedUser);

  return finalRes;
};
