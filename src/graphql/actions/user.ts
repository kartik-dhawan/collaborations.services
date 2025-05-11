import prisma from "../../prisma/index.ts";
import {
  CreateUserPayload,
  DeleteStatus,
  DeleteUserResponse,
  FetchUserPayload,
  UpdateUserPayload,
  User,
  UserRole,
} from "../generated/graphql.ts";
import {
  graphQLToPrismaSortingLabels,
  responseMessages,
} from "../utils/index.ts";

export const fetchAllUsers = async (payload?: FetchUserPayload) => {
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
  const finalRes: User = {
    ...user,
    role: user?.role as UserRole,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  };

  return finalRes;
};

export const updateUserDetails = async (payload: UpdateUserPayload) => {
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
  const finalRes: User = {
    ...updatedUser,
    role: updatedUser.role as UserRole,
    createdAt: updatedUser.createdAt.toISOString(),
    updatedAt: updatedUser.updatedAt.toISOString(),
  };

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

  const finalRes: User = {
    email: createdUser.email,
    id: createdUser.id,
    name: createdUser.name,
    role: createdUser.role as UserRole,
    createdAt: createdUser.createdAt.toISOString(),
    updatedAt: createdUser.updatedAt.toISOString(),
  };

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
