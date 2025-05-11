import { GraphQLError } from "graphql";
import { Resolvers, User } from "../generated/graphql.ts";
import {
  createNewUser,
  deleteUser,
  fetchAllUsers,
  fetchUserById,
  updateUserDetails,
} from "../actions/index.ts";

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
};
