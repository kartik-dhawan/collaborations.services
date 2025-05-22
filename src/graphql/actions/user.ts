import { GraphQLError } from "graphql";
import prisma from "../../prisma/index.ts";
import {
  AssignPermissionsPayload,
  CreateUserPayload,
  DeleteStatus,
  DeleteUserResponse,
  MutationUpdateUserArgs,
  PermissionsResponse,
  PermissionValue,
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
import {
  HmacHashObject,
  JwtUser,
  UserPrismaToGQL,
} from "../utils/interfaces.ts";
import jwt from "jsonwebtoken";

// This is a mapper function to convert the Prisma data structure to the GraphQL data structure
export const userDataMapperToGQL = (data: UserPrismaToGQL): User => {
  return {
    email: data.email,
    id: data.id,
    name: data.name,
    role: (data.roleData?.roleEnum as UserRole) ?? undefined,
    createdAt: data.createdAt.toISOString(),
    updatedAt: data.updatedAt.toISOString(),
    permissions:
      (data.roleData?.permissions?.map(
        (it) => it.permissionName
      ) as PermissionValue[]) ?? [],
  };
};

export const fetchAllUsers = async (
  payload?: QueryGetAllUsersArgs["payload"]
) => {
  // fetch all users from DB - user
  const users = await prisma.user.findMany({
    include: {
      roleData: {
        include: {
          permissions: true,
        },
      },
    },
    ...(payload && {
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
      orderBy: payload?.sort && {
        [payload.sort.key]: graphQLToPrismaSortingLabels[payload.sort.value],
      },
    }),
  });

  // map data from Prisma schema to graphql Schema
  const finalRes: User[] = users.map((it) => ({
    ...it,
    role: it.roleData.roleEnum as UserRole,
    createdAt: it.createdAt.toISOString(),
    updatedAt: it.updatedAt.toISOString(),
    permissions:
      (it.roleData?.permissions?.map(
        (perm) => perm.permissionName
      ) as PermissionValue[]) ?? [],
  }));

  return finalRes;
};

export const fetchUserById = async (userId: number) => {
  // fetch a single user from DB by id
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      roleData: {
        include: {
          permissions: true,
        },
      },
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
    include: {
      roleData: {
        include: {
          permissions: true,
        },
      },
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
      roleData: {
        connect: {
          roleEnum: payload.role ?? UserRole.User,
        },
      },
    },
    include: {
      roleData: {
        include: {
          permissions: true,
        },
      },
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
      passwordHash: hashObject.hash,
      saltKey: hashObject.salt,
      roleData: {
        connect: {
          roleEnum: payload.role ?? UserRole.User,
        },
      },
    },
    include: {
      roleData: {
        include: {
          permissions: true,
        },
      },
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

export const verifyJwtAndAuthenticate = async (
  authToken?: string
): Promise<JwtUser | undefined> => {
  let user: JwtUser = undefined;

  if (authToken) {
    try {
      user = jwt.verify(authToken, process.env.JWT_SECRET) as JwtUser;
    } catch {
      user = undefined;
    }
  }

  return user;
};

export const getPermissionsByUserId = async (
  userId: number
): Promise<PermissionsResponse> => {
  const permissions = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      roleData: {
        include: {
          permissions: {
            select: {
              permissionName: true,
            },
          },
        },
      },
    },
  });

  return {
    permissions:
      (permissions.roleData?.permissions?.map(
        (it) => it.permissionName
      ) as PermissionValue[]) ?? [],
    role: permissions.roleData?.roleEnum as UserRole,
    totalCount: permissions.roleData?.permissions.length,
  };
};

export const updateRolePermissions = async (
  payload: AssignPermissionsPayload
): Promise<PermissionsResponse> => {
  // create all the new permissions in the table
  await prisma.permissions.createMany({
    data: payload.permissions.map((permissionName) => ({ permissionName })),
    skipDuplicates: true,
  });

  // connect those new permissions to the role
  const perms = await prisma.role.update({
    where: {
      roleEnum: payload.role,
    },
    data: {
      permissions: {
        connect: payload.permissions.map((permissionName) => ({
          permissionName,
        })),
      },
    },
    select: {
      permissions: true,
    },
  });

  // return all permissions for that role with updated ones
  const finalRes: PermissionsResponse = {
    permissions: perms.permissions.map(
      (it) => it.permissionName
    ) as PermissionValue[],
    role: payload.role,
    totalCount: perms.permissions.length,
  };

  return finalRes;
};
