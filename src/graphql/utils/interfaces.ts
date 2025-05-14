import { Prisma } from "../../prisma/generated/index.js";

/** COMMON INTERFACES */
export type HmacHashObject = {
  salt: string;
  hash: string;
};

/** USER INTERFACES */
export type UserPrismaToGQL = Prisma.UserGetPayload<{}>;

/** COLLABORATION INTERFACES */
export type CollaborationWithClientToGQL = Prisma.CollaborationsGetPayload<{
  include: {
    client: {
      include: {
        contactPeople: true;
      };
    };
  };
}>;

/** CLIENTS DATA INTERFACES */
export type ClientsDataToGQL = Prisma.ClientDataGetPayload<{
  include: {
    contactPeople: true;
  };
}>;
