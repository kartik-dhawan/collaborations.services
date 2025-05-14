import { GraphQLError } from "graphql";
import prisma from "../../prisma/index.ts";
import {
  CreateUserPayload,
  DeleteStatus,
  DeleteUserResponse,
  MutationUpdateUserArgs,
  QueryGetAllUsersArgs,
  SignInResponse,
  User,
  UserLoginPayload,
  UserRole,
} from "../generated/graphql.ts";
import {
  generateHmacHash,
  graphQLToPrismaSortingLabels,
  responseMessages,
} from "../utils/index.ts";
import { HmacHashObject, UserPrismaToGQL } from "../utils/interfaces.ts";
import jwt from "jsonwebtoken";

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
    payload && {
      where: {
        AND:
          payload?.search?.map((it) => {
            return {
              [it.key]: {
                contains: it?.value,
                mode: "insensitive",
              },
            };
          }) ?? [],
      },
      orderBy: payload?.sort
        ? {
            [payload.sort.key]:
              graphQLToPrismaSortingLabels[payload.sort.value],
          }
        : {},
    }
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

export const fetchUserByEmail = async (
  email: string
): Promise<{ user: User; passwordHash: HmacHashObject } | undefined> => {
  // fetch a single user from DB by email
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return undefined;
  }

  // map data from Prisma schema to graphql Schema
  const finalRes: User = userDataMapperToGQL(user);

  return {
    passwordHash: {
      salt: user.saltKey,
      hash: user.passwordHash,
    },
    user: finalRes,
  };
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
  // encrypt the password & store both its key & hashed password
  const hashObject = generateHmacHash(payload.password);

  // create new user in db using prisma client
  const createdUser = await prisma.user.create({
    data: {
      email: payload.email, // required
      name: payload.name, // required
      role: payload.role, // default role auto handled in DB
      passwordHash: hashObject.hash,
      saltKey: hashObject.salt,
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
      message: responseMessages.USER.DELETION_SUCCESS,
      status: DeleteStatus.Success,
    };
  } else {
    return {
      message: responseMessages.USER.NOT_FOUND,
      status: DeleteStatus.Failed,
    };
  }
};

export const generateNewUserToken = (user: User) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: 60 * 60, // 1 hour
  });
};

export const userLoginHandler = async (
  payload: UserLoginPayload
): Promise<SignInResponse> => {
  /** Find user by entered email */
  const { user, passwordHash: userPassword } =
    (await fetchUserByEmail(payload.email)) ?? {};

  /** if there is no user with that email, then throw error */
  if (!user) {
    throw new GraphQLError(responseMessages.USER.NOT_FOUND);
  }

  /** generate a new hash with the same key found from user in db */
  const generatedPasswordHash = generateHmacHash(
    payload.password,
    userPassword.salt
  );

  /** if the new hash matches the hash in the db, then password is the same */
  if (userPassword.hash !== generatedPasswordHash.hash) {
    throw new GraphQLError(responseMessages.USER.INCORRECT_PASSWORD);
  }

  const accessToken = generateNewUserToken(user);

  return {
    user,
    token: accessToken,
    message: responseMessages.USER.SIGN_IN_SUCCESS,
  };
};
