import { GraphQLError } from "graphql";
import { Resolvers, SignInResponse, User } from "../generated/graphql.ts";
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
import {
  getNotificationObject,
  GraphqlCustomContextType,
  responseMessages,
  SERVICES,
} from "../utils/index.ts";
import {
  assignPermissionsInputSchema,
  createUserInputSchema,
  deleteUserInputSchema,
  updateUserInputSchema,
} from "../utils/validation/inputSchema.ts";
import { notificationsPubSub } from "../pubsub.ts";
import logger from "../../../winston.config.ts";
import schemaValidateOrThrow from "../utils/validation/index.ts";

/** QUERIES */
export const userQueries: Resolvers<GraphqlCustomContextType>["Query"] = {
  getAllUsers: async (_, { payload }) => {
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
  updateUser: async (_, { payload }, context) => {
    const validatedPayload = await schemaValidateOrThrow(
      updateUserInputSchema,
      payload
    );

    try {
      const updatedUser = await updateUserDetails(validatedPayload);

      notificationsPubSub.publish(
        getNotificationObject({
          message: `User with ID: ${payload.id} has been updated by ${context.user.name}`,
          data: updatedUser,
          service: SERVICES.UMS,
          user: context.user,
        })
      );

      return updatedUser;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  createUser: async (_, { payload }, context) => {
    // validate the `input` entered by the user inthe mutation, if the schema & input dont match, it will throw error
    const validatedPayload = await schemaValidateOrThrow(
      createUserInputSchema,
      payload
    );

    try {
      // use the validated input to create user
      const createdUser = await createNewUser(validatedPayload);

      notificationsPubSub.publish(
        getNotificationObject({
          message: `A new user has been created by ${context.user.name}`,
          data: createdUser,
          service: SERVICES.UMS,
          user: context.user,
        })
      );

      return createdUser;
    } catch (error) {
      logger.user.error("Error while creating a user.", {
        error,
        payload,
      });
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  deleteAUser: async (_, { id: userId }, context) => {
    // validate the `input` entered by the user inthe mutation, if the schema & input dont match, it will throw error
    const validatedInput = await schemaValidateOrThrow(
      deleteUserInputSchema,
      userId
    );

    try {
      const response = await deleteUser(validatedInput);

      notificationsPubSub.publish(
        getNotificationObject({
          message: `User with ID: ${userId} has been deleted by ${context.user.name} (${context.user.role})`,
          data: response,
          service: SERVICES.UMS,
          timeStamp: Date.now(),
          user: context.user,
        })
      );

      return response;
    } catch (error) {
      logger.user.error("Error while deleting a user.", {
        error,
        payload: { userId },
      });
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  umsSignUp: async (_, { payload }) => {
    // validate the `input` entered by the user inthe mutation, if the schema & input dont match, it will throw error
    const validatedPayload = await createUserInputSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });

    try {
      // create a user
      const createdUser = await createNewUser(validatedPayload);

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
      logger.user.error("User Sign Up Error.", { error, payload });
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  umsAssignPermissionsToRole: async (_, { payload }) => {
    // validate the `input` entered by the user inthe mutation, if the schema & input dont match, it will throw error
    const validatedPayload = await schemaValidateOrThrow(
      assignPermissionsInputSchema,
      payload
    );

    try {
      const userWithUpdatedPerms = await updateRolePermissions(
        validatedPayload
      );

      return userWithUpdatedPerms;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },
};
