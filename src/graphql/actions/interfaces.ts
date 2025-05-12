import { Prisma } from "../../prisma/generated/index.js";

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
