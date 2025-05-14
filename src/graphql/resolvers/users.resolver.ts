import { GraphQLError } from "graphql";
import { Resolvers, SignInResponse, User } from "../generated/graphql.ts";
import {
  createNewUser,
  deleteUser,
  fetchAllUsers,
  fetchUserById,
  generateNewUserToken,
  updateUserDetails,
  userLoginHandler,
} from "../actions/index.ts";
import { responseMessages } from "../utils/index.ts";

/** QUERIES */
export const userQueries: Resolvers["Query"] = {
  getAllUsers: async (_, { payload }) => {
    try {
      const users: User[] = await fetchAllUsers(payload);
      return users;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },

  getUserById: async (_, { id: userId }) => {
    try {
      const user = await fetchUserById(userId);
      return user;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },

  umsLogin: async (_, { payload }) => {
    try {
      const signInResponse: SignInResponse = await userLoginHandler(payload);
      return signInResponse;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },
};

/** MUTATIONS */
export const userMutations: Resolvers["Mutation"] = {
  updateUser: async (_, { payload }) => {
    try {
      const updatedUser = await updateUserDetails(payload);
      return updatedUser;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },

  createUser: async (_, { payload }) => {
    try {
      const createdUser = await createNewUser(payload);
      return createdUser;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
      );
    }
  },

  deleteAUser: async (_, { id: userId }) => {
    try {
      const response = await deleteUser(userId);
      return response;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error ? error.message : error.toString()
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
      const accessToken = generateNewUserToken(createdUser);

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
        error instanceof Error ? error.message : error.toString()
      );
    }
  },
};
