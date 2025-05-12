import prisma from "../../prisma/index.ts";
import {
  CreateUserPayload,
  DeleteStatus,
  DeleteUserResponse,
  MutationUpdateUserArgs,
  QueryGetAllUsersArgs,
  User,
  UserRole,
} from "../generated/graphql.ts";
import {
  graphQLToPrismaSortingLabels,
  responseMessages,
} from "../utils/index.ts";
import { UserPrismaToGQL } from "./interfaces.ts";

// This is a mapper function to convert the Prisma data structure to the GraphQL data structure
export const userDataMapperToGQL = (data: UserPrismaToGQL): User => {
  return {
    email: data.email,
    id: data.id,
    name: data.name,
    role: data.role as UserRole,
    createdAt: data.createdAt.toISOString(),
    updatedAt: data.updatedAt.toISOString(),
  };
};

export const fetchAllUsers = async (
  payload?: QueryGetAllUsersArgs["payload"]
) => {
  // fetch all users from DB - user
  const users = await prisma.user.findMany(
    payload
      ? {
          // also add searching filter to it
          where: {
            AND:
              payload.search?.map((it) => {
                return {
                  [it.key]: {
                    contains: it?.value,
                    mode: "insensitive",
                  },
                };
              }) ?? [],
          },
          // add sorting technique for user table
          orderBy: payload.sort
            ? {
                [payload.sort.key]:
                  graphQLToPrismaSortingLabels[payload.sort.value],
              }
            : {},
        }
      : {}
  );

  // map data from Prisma schema to graphql Schema
  const finalRes: User[] = users.map((it) => ({
    ...it,
    role: it.role as UserRole,
    createdAt: it.createdAt.toISOString(),
    updatedAt: it.updatedAt.toISOString(),
  }));

  return finalRes;
};

export const fetchUserById = async (userId: number) => {
  // fetch a single user from DB by id
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  // map data from Prisma schema to graphql Schema
  const finalRes: User = userDataMapperToGQL(user);

  return finalRes;
};

export const updateUserDetails = async (
  payload: MutationUpdateUserArgs["payload"]
) => {
  // update the user in DB
  const updatedUser = await prisma.user.update({
    // match the user by ID
    where: {
      id: payload.id,
    },
    // then update the data
    data: {
      email: payload.email,
      name: payload.name,
      role: payload.role,
    },
  });

  // map data from Prisma schema to graphql Schema
  const finalRes: User = userDataMapperToGQL(updatedUser);

  return finalRes;
};

export const createNewUser = async (payload: CreateUserPayload) => {
  // create new user in db using prisma client
  const createdUser = await prisma.user.create({
    data: {
      email: payload.email, // required
      name: payload.name, // required
      role: payload.role, // default role auto handled in DB
    },
  });

  const finalRes: User = userDataMapperToGQL(createdUser);

  return finalRes;
};

export const deleteUser = async (
  userId: number
): Promise<DeleteUserResponse> => {
  // delete user from DB
  const deletedUser = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  if (deletedUser) {
    return {
      message: responseMessages.USER.CREATION_SUCCESS,
      status: DeleteStatus.Success,
    };
  } else {
    return {
      message: responseMessages.USER.NOT_FOUND,
      status: DeleteStatus.Failed,
    };
  }
};
