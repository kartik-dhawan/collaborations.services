import prisma from "../../prisma/index.ts";
import {
  CreateClientPayload,
  CsClientSummary,
  User,
} from "../generated/graphql.ts";
import { ClientsDataToGQL } from "../utils/interfaces.ts";

// This is a mapper function to convert the Prisma data structure to the GraphQL data structure
export const clientsDataMapperToGQL = (
  item: ClientsDataToGQL
): CsClientSummary => ({
  id: item.id,
  name: item.name,
  instagram: item.instagram,
  clientNotes: item.clientNotes,
  createdAt: item.createdAt.toISOString(),
  user: item.user,
  clientContacts:
    item.contactPeople.map((contact) => ({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      clientNotes: contact.contactNotes,
      createdAt: contact.createdAt.toISOString(),
    })) ?? [],
});

export const fetchAllClients = async (): Promise<CsClientSummary[]> => {
  const clients = await prisma.clientData.findMany({
    include: {
      contactPeople: true,
      user: true,
    },
  });

  const finalRes: CsClientSummary[] = clients.map((item) =>
    clientsDataMapperToGQL(item)
  );

  return finalRes;
};

export const createNewClient = async (
  payload: CreateClientPayload,
  user: User
): Promise<CsClientSummary> => {
  const createdClient = await prisma.clientData.create({
    data: {
      name: payload.name,
      instagram: payload.instagram,
      clientNotes: payload.clientNotes,
      user: {
        connect: {
          id: user.id,
        },
      },
      contactPeople: {
        create: payload.clientContacts.map((contact) => ({
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
    },
    include: {
      contactPeople: true,
      user: true,
    },
  });

  const finalRes: CsClientSummary = clientsDataMapperToGQL(createdClient);

  return finalRes;
};
