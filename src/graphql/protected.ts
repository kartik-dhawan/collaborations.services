import {
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestListener,
  GraphQLRequestExecutionListener,
} from "@apollo/server";
import { GraphQLError } from "graphql";
import { QueryMutationKeys, MyAuthCtx } from "./utils/interfaces.ts";
import { responseMessages } from "./utils/messages.ts";
import { applyMiddleware } from "graphql-middleware";
import resolvers from "./resolvers/index.ts";
import typeDefs from "./typeDefs/index.ts";
import { GraphQLSchemaWithFragmentReplacements } from "graphql-middleware/types";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const WHITE_LIST: QueryMutationKeys[] = ["umsLogin", "umsSignUp"];

export const whiteListSet: Set<QueryMutationKeys> = new Set(WHITE_LIST);

/** @description
 * plugin
 *  └─ requestDidStart()                      ← once per HTTP request
 *      └─ executionDidStart()                ← once per operation document
 *          ├─ willResolveField()             ← once per field resolver
 *          └─ executionDidEnd()              ← once when execution finishes
 *
 * (That “nested approach” is an intentional design of the plugin API.)
 */
export const protectedRoutesPlugin: ApolloServerPlugin<MyAuthCtx> = {
  /** {requestDidStart} - it fires immediately after Apollo has parsed the HTTP envelope (headers/body) but before the request is parsed, validated, or executed. */
  async requestDidStart(
    _reqCtx: GraphQLRequestContext<MyAuthCtx>
  ): Promise<GraphQLRequestListener<MyAuthCtx>> {
    return {
      /** {executionDidStart} - it fires after the GraphQL document is successfully parsed and validated. You now know exactly which operation will run, the variables, and the typed AST. */
      async executionDidStart(): Promise<
        GraphQLRequestExecutionListener<MyAuthCtx>
      > {
        return {
          willResolveField({ contextValue, info }) {
            /**
             * `willResolveField` - it fires every time Apollo Server is about to run a resolver (root and every nested field)
             */

            /**
             * {info.parentType.name} - The GraphQL object/interface that owns the field (Query, User, Post, …). // refers to the `type` in typedefs
             * {info.path} - A linked list that records how deep you are: { key: 'email', prev: { key: 0, prev: … }}. Handy for error messages and alias detection.
             * {info.fieldName} - Name in the schema of the field the resolver will execute (getAllUsers, id, etc.).
             */

            /** Here we try to check if the current field is the root of the resolver/query/mutation */
            const isRoot =
              (info.parentType.name === "Query" ||
                info.parentType.name === "Mutation") && // since parentType.name returns the gql type of the parent, initially every request begins either with `Query/Mutation` keyword
              !info.path.prev; // since info.path is a linkedlist, if the current path doesnt have a parent, it means its a top level type i.e. either a query or a mutation, which means its a root

            if (!isRoot) return; // ignore nested resolvers

            /** since we're only reaching this point if we're on the root, the {fieldName} key provides us with the querynName (or the typedef for that query like `getAllUsers` etc) */
            if (whiteListSet.has(info.fieldName as QueryMutationKeys)) {
              return; // continue with the request call without checking for authentication if the query is whiteListed
            }

            /** the user that we decoded from jwt & set it in the context, if its undefined, it means the user cannot access the request. */
            if (!contextValue.user) {
              throw new GraphQLError(
                responseMessages.USER.USER_NOT_AUTHENTICATED
              );
            }
          },
        };
      },
    };
  },
};

/**
 *  a function which takes typeDefs & resolvers, converts them into a schema
 *
 *  later returns that schema with added permissions for authorization & authentication
 *
 * @returns {GraphQLSchemaWithFragmentReplacements}
 */
export const getProtectedSchema = (): GraphQLSchemaWithFragmentReplacements => {
  /* 1. Create executable schema */
  const rawSchema = makeExecutableSchema({ typeDefs, resolvers });

  /* 2. Wrap with shield */
  const schema = applyMiddleware(rawSchema, {} /** permissions */);

  return schema;
};
