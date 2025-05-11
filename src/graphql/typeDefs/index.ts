import clientDefs from "./client.type.ts";
import collaborationsDef from "./collaborations.type.ts";
import commonDefs from "./common.type.ts";
import mutationDefs from "./mutationDefs.ts";
import queryDefs from "./queryDefs.ts";
import userDefs from "./users.type.ts";

const typeDefs = [
  queryDefs,
  mutationDefs,
  commonDefs,
  userDefs,
  clientDefs,
  collaborationsDef,
];

export default typeDefs;
