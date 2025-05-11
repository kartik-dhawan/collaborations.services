import commonDefs from "./common.type.ts";
import mutationDefs from "./mutationDefs.ts";
import queryDefs from "./queryDefs.ts";
import userDefs from "./users.type.ts";

const typeDefs = [queryDefs, mutationDefs, commonDefs, userDefs];

export default typeDefs;
