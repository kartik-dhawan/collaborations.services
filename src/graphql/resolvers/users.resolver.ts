import { GraphQLError } from "graphql";
import {
  Resolvers,
  SignInResponse,
  User,
  UserRole,
} from "../generated/graphql.ts";
import {
  createNewUser,
  deleteUser,
  fetchAllUsers,
  fetchUserById,
  generateNewUserToken,
  getPermissionsByUserId,
  updateUserDetails,
  updateRolePermissions,
  userLoginHandler,
} from "../actions/index.ts";
import { GraphqlCustomContextType, responseMessages } from "../utils/index.ts";
import {
  createUserInputSchema,
  deleteUserInputSchema,
} from "../utils/validation/inputSchema.ts";

/** QUERIES */
export const userQueries: Resolvers<GraphqlCustomContextType>["Query"] = {
  getAllUsers: async (_, { payload }, context) => {
    try {
      const users: User[] = await fetchAllUsers(payload);
      return users;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  getUserById: async (_, { id: userId }) => {
    try {
      const user = await fetchUserById(userId);
      return user;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  umsLogin: async (_, { payload }) => {
    try {
      const signInResponse: SignInResponse = await userLoginHandler(payload);
      return signInResponse;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  umsGetUserPermissions: async (_, { userId }) => {
    try {
      const permissions = await getPermissionsByUserId(userId);
      return permissions;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },
};

/** MUTATIONS */
export const userMutations: Resolvers<GraphqlCustomContextType>["Mutation"] = {
  updateUser: async (_, { payload }) => {
    try {
      const updatedUser = await updateUserDetails(payload);
      return updatedUser;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  createUser: async (_, { payload }) => {
    try {
      // validate the `input` entered by the user inthe mutation, if the schema & input dont match, it will throw error
      const validatedPayload = await createUserInputSchema.validate(payload, {
        abortEarly: false,
        stripUnknown: true,
      });

      // use the validated input to create user
      const createdUser = await createNewUser(validatedPayload);
      return createdUser;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  deleteAUser: async (_, { id: userId }) => {
    const validatedInput = await deleteUserInputSchema.validate(userId);

    try {
      const response = await deleteUser(validatedInput);
      return response;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  umsSignUp: async (_, { payload }) => {
    try {
      // create a user
      const createdUser = await createNewUser(payload);

      // if a user is not created throw error
      if (!createdUser) {
        throw new GraphQLError(responseMessages.USER.CREATION_ERROR);
      }

      // if the user is created, generate a token for the user
      // and return the user & token
      const { permissions, ...restUser } = createdUser;
      const accessToken = generateNewUserToken(restUser);

      if (!accessToken) {
        throw new GraphQLError(responseMessages.USER.SIGN_UP_FAILED);
      }

      return {
        user: createdUser,
        token: accessToken,
        message: responseMessages.USER.CREATION_SUCCESS,
      };
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  umsAssignPermissionsToRole: async (_, { payload }) => {
    try {
      const userWithUpdatedPerms = await updateRolePermissions(payload);
      return userWithUpdatedPerms;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },
};
