import prisma from "../../prisma/index.ts";
import { User, UserRole } from "../generated/graphql.ts";

export const fetchAllUsers = async () => {
  // fetch all users from DB - user
  const users = await prisma.user.findMany();

  // map data from Prisma schema to graphql Schema
  const finalRes: User[] = users.map((it) => ({
    id: it.id,
    email: it.email,
    name: it.name,
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
    id: user?.id,
    email: user?.email,
    name: user?.name,
    role: user?.role as UserRole,
  };

  return finalRes;
};
