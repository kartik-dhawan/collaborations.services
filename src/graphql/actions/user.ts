import prisma from "../../prisma/index.ts";
import {
  CreateUserPayload,
  FetchUserPayload,
  UpdateUserPayload,
  User,
  UserRole,
} from "../generated/graphql.ts";
import { graphQLToPrismaSortingLabels } from "../utils/index.ts";

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
  };

  return finalRes;
};
