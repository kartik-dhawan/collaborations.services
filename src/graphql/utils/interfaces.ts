import { JwtPayload } from "jsonwebtoken";
import { Prisma, User } from "../../prisma/generated/index.js";
import { Resolvers } from "../generated/graphql.ts";

/** =========== COMMON INTERFACES ================================================================================================ */
export type HmacHashObject = {
  salt: string;
  hash: string;
};

export type QueryMutationKeys = keyof (Resolvers["Query"] &
  Resolvers["Mutation"]);

/** ===========USER INTERFACES ================================================================================================== */
export type UserPrismaToGQL = Prisma.UserGetPayload<{
  include: {
    roleData: {
      include: {
        permissions: true;
      };
    };
  };
}>;

export type JwtUser = User & JwtPayload;

export type MyAuthCtx = { user?: JwtUser };

/** =========== COLLABORATION INTERFACES ======================================================================================== */
export type CollaborationWithClientToGQL = Prisma.CollaborationsGetPayload<{
  include: {
    client: {
      include: {
        contactPeople: true;
      };
    };
  };
}>;

/** =========== CLIENTS DATA INTERFACES  ======================================================================================== */
export type ClientsDataToGQL = Prisma.ClientDataGetPayload<{
  include: {
    contactPeople: true;
  };
}>;
