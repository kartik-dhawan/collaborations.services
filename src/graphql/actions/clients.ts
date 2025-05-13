import prisma from "../../prisma/index.ts";
import { CreateClientPayload, CsClientSummary } from "../generated/graphql.ts";
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
    },
  });

  const finalRes: CsClientSummary[] = clients.map((item) =>
    clientsDataMapperToGQL(item)
  );

  return finalRes;
};

export const createNewClient = async (
  payload: CreateClientPayload
): Promise<CsClientSummary> => {
  const createdClient = await prisma.clientData.create({
    data: {
      name: payload.name,
      instagram: payload.instagram,
      clientNotes: payload.clientNotes,
      contactPeople: {
        create: payload.clientContacts.map((contact) => ({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          contactNotes: contact.clientNotes,
        })),
      },
    },
    include: {
      contactPeople: true,
    },
  });

  const finalRes: CsClientSummary = clientsDataMapperToGQL(createdClient);

  return finalRes;
};
