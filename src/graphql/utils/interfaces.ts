import { JwtPayload } from "jsonwebtoken";
import { Prisma } from "../../prisma/generated/index.js";
import { Resolvers, User } from "../generated/graphql.ts";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";

/** =========== COMMON INTERFACES ================================================================================================ */
export type HmacHashObject = {
  salt: string;
  hash: string;
};

export type QueryMutationKeys = keyof (Required<Resolvers>["Query"] &
  Required<Resolvers>["Mutation"]);

export type GraphqlCustomContextType = ExpressContextFunctionArgument & {
  user: User;
};

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
    user: true;
  };
}>;

/** =========== CLIENTS DATA INTERFACES  ======================================================================================== */
export type ClientsDataToGQL = Prisma.ClientDataGetPayload<{
  include: {
    contactPeople: true;
    user: true;
  };
}>;
