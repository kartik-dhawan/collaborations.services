import { GraphQLError } from "graphql";
import { Resolvers, User } from "../generated/graphql.ts";
import { fetchAllUsers, fetchUserById } from "../actions/index.ts";

export const userQueries: Resolvers["Query"] = {
  getAllUsers: async () => {
    try {
      const users: User[] = await fetchAllUsers();
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
