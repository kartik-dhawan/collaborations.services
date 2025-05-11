import prisma from "../../prisma/index.ts";
import { UpdateUserPayload, User, UserRole } from "../generated/graphql.ts";

export const fetchAllUsers = async () => {
  // fetch all users from DB - user
  const users = await prisma.user.findMany();

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
