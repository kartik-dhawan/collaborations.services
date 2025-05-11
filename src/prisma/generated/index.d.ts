
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ClientData
 * 
 */
export type ClientData = $Result.DefaultSelection<Prisma.$ClientDataPayload>
/**
 * Model ClientContact
 * 
 */
export type ClientContact = $Result.DefaultSelection<Prisma.$ClientContactPayload>
/**
 * Model Collaborations
 * 
 */
export type Collaborations = $Result.DefaultSelection<Prisma.$CollaborationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CsGender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type CsGender = (typeof CsGender)[keyof typeof CsGender]


export const CollabType: {
  UNPAID_COLLABORATION: 'UNPAID_COLLABORATION',
  PAID_COLLABORATION: 'PAID_COLLABORATION',
  BARTER_COLLABORATION: 'BARTER_COLLABORATION',
  PAID_PROMOTION: 'PAID_PROMOTION',
  PAID_GIG: 'PAID_GIG'
};

export type CollabType = (typeof CollabType)[keyof typeof CollabType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  UNPAID: 'UNPAID'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const CollaborationStatus: {
  FINALISED: 'FINALISED',
  DID_NOT_HAPPEN: 'DID_NOT_HAPPEN',
  COMPLETED: 'COMPLETED'
};

export type CollaborationStatus = (typeof CollaborationStatus)[keyof typeof CollaborationStatus]


export const CollaborationDeliverables: {
  REEL: 'REEL',
  REEL_WITHOUT_COLLAB: 'REEL_WITHOUT_COLLAB',
  CAROUSEL_POST: 'CAROUSEL_POST',
  CAROUSEL_POST_WITHOUT_COLLAB: 'CAROUSEL_POST_WITHOUT_COLLAB',
  STORIES: 'STORIES',
  SONG_PROMOTION: 'SONG_PROMOTION',
  PHOTO_SHOOT: 'PHOTO_SHOOT',
  VIDEO_EDIT: 'VIDEO_EDIT'
};

export type CollaborationDeliverables = (typeof CollaborationDeliverables)[keyof typeof CollaborationDeliverables]


export const DeliverableStatus: {
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  IN_PROGRESS: 'IN_PROGRESS',
  REJECTED: 'REJECTED',
  APPROVED: 'APPROVED',
  IN_REVIEW: 'IN_REVIEW'
};

export type DeliverableStatus = (typeof DeliverableStatus)[keyof typeof DeliverableStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CsGender = $Enums.CsGender

export const CsGender: typeof $Enums.CsGender

export type CollabType = $Enums.CollabType

export const CollabType: typeof $Enums.CollabType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type CollaborationStatus = $Enums.CollaborationStatus

export const CollaborationStatus: typeof $Enums.CollaborationStatus

export type CollaborationDeliverables = $Enums.CollaborationDeliverables

export const CollaborationDeliverables: typeof $Enums.CollaborationDeliverables

export type DeliverableStatus = $Enums.DeliverableStatus

export const DeliverableStatus: typeof $Enums.DeliverableStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientData`: Exposes CRUD operations for the **ClientData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientData
    * const clientData = await prisma.clientData.findMany()
    * ```
    */
  get clientData(): Prisma.ClientDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientContact`: Exposes CRUD operations for the **ClientContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientContacts
    * const clientContacts = await prisma.clientContact.findMany()
    * ```
    */
  get clientContact(): Prisma.ClientContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaborations`: Exposes CRUD operations for the **Collaborations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborations
    * const collaborations = await prisma.collaborations.findMany()
    * ```
    */
  get collaborations(): Prisma.CollaborationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ClientData: 'ClientData',
    ClientContact: 'ClientContact',
    Collaborations: 'Collaborations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "clientData" | "clientContact" | "collaborations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ClientData: {
        payload: Prisma.$ClientDataPayload<ExtArgs>
        fields: Prisma.ClientDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>
          }
          findFirst: {
            args: Prisma.ClientDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>
          }
          findMany: {
            args: Prisma.ClientDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>[]
          }
          create: {
            args: Prisma.ClientDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>
          }
          createMany: {
            args: Prisma.ClientDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>[]
          }
          delete: {
            args: Prisma.ClientDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>
          }
          update: {
            args: Prisma.ClientDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>
          }
          deleteMany: {
            args: Prisma.ClientDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>[]
          }
          upsert: {
            args: Prisma.ClientDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDataPayload>
          }
          aggregate: {
            args: Prisma.ClientDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientData>
          }
          groupBy: {
            args: Prisma.ClientDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientDataCountArgs<ExtArgs>
            result: $Utils.Optional<ClientDataCountAggregateOutputType> | number
          }
        }
      }
      ClientContact: {
        payload: Prisma.$ClientContactPayload<ExtArgs>
        fields: Prisma.ClientContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>
          }
          findFirst: {
            args: Prisma.ClientContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>
          }
          findMany: {
            args: Prisma.ClientContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>[]
          }
          create: {
            args: Prisma.ClientContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>
          }
          createMany: {
            args: Prisma.ClientContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>[]
          }
          delete: {
            args: Prisma.ClientContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>
          }
          update: {
            args: Prisma.ClientContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>
          }
          deleteMany: {
            args: Prisma.ClientContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>[]
          }
          upsert: {
            args: Prisma.ClientContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientContactPayload>
          }
          aggregate: {
            args: Prisma.ClientContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientContact>
          }
          groupBy: {
            args: Prisma.ClientContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientContactCountArgs<ExtArgs>
            result: $Utils.Optional<ClientContactCountAggregateOutputType> | number
          }
        }
      }
      Collaborations: {
        payload: Prisma.$CollaborationsPayload<ExtArgs>
        fields: Prisma.CollaborationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaborationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaborationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>
          }
          findFirst: {
            args: Prisma.CollaborationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaborationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>
          }
          findMany: {
            args: Prisma.CollaborationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>[]
          }
          create: {
            args: Prisma.CollaborationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>
          }
          createMany: {
            args: Prisma.CollaborationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaborationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>[]
          }
          delete: {
            args: Prisma.CollaborationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>
          }
          update: {
            args: Prisma.CollaborationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>
          }
          deleteMany: {
            args: Prisma.CollaborationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaborationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaborationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>[]
          }
          upsert: {
            args: Prisma.CollaborationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationsPayload>
          }
          aggregate: {
            args: Prisma.CollaborationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaborations>
          }
          groupBy: {
            args: Prisma.CollaborationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaborationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaborationsCountArgs<ExtArgs>
            result: $Utils.Optional<CollaborationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    clientData?: ClientDataOmit
    clientContact?: ClientContactOmit
    collaborations?: CollaborationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientDataCountOutputType
   */

  export type ClientDataCountOutputType = {
    contactPeople: number
    collaborations: number
  }

  export type ClientDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPeople?: boolean | ClientDataCountOutputTypeCountContactPeopleArgs
    collaborations?: boolean | ClientDataCountOutputTypeCountCollaborationsArgs
  }

  // Custom InputTypes
  /**
   * ClientDataCountOutputType without action
   */
  export type ClientDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDataCountOutputType
     */
    select?: ClientDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientDataCountOutputType without action
   */
  export type ClientDataCountOutputTypeCountContactPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientContactWhereInput
  }

  /**
   * ClientDataCountOutputType without action
   */
  export type ClientDataCountOutputTypeCountCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    role: $Enums.Role
    createdAt: Date | null
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      role: $Enums.Role
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ClientData
   */

  export type AggregateClientData = {
    _count: ClientDataCountAggregateOutputType | null
    _min: ClientDataMinAggregateOutputType | null
    _max: ClientDataMaxAggregateOutputType | null
  }

  export type ClientDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    instagram: string | null
    createdAt: Date | null
    clientContactId: string | null
    clientNotes: string | null
  }

  export type ClientDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    instagram: string | null
    createdAt: Date | null
    clientContactId: string | null
    clientNotes: string | null
  }

  export type ClientDataCountAggregateOutputType = {
    id: number
    name: number
    instagram: number
    createdAt: number
    clientContactId: number
    clientNotes: number
    _all: number
  }


  export type ClientDataMinAggregateInputType = {
    id?: true
    name?: true
    instagram?: true
    createdAt?: true
    clientContactId?: true
    clientNotes?: true
  }

  export type ClientDataMaxAggregateInputType = {
    id?: true
    name?: true
    instagram?: true
    createdAt?: true
    clientContactId?: true
    clientNotes?: true
  }

  export type ClientDataCountAggregateInputType = {
    id?: true
    name?: true
    instagram?: true
    createdAt?: true
    clientContactId?: true
    clientNotes?: true
    _all?: true
  }

  export type ClientDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientData to aggregate.
     */
    where?: ClientDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientData to fetch.
     */
    orderBy?: ClientDataOrderByWithRelationInput | ClientDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientData
    **/
    _count?: true | ClientDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientDataMaxAggregateInputType
  }

  export type GetClientDataAggregateType<T extends ClientDataAggregateArgs> = {
        [P in keyof T & keyof AggregateClientData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientData[P]>
      : GetScalarType<T[P], AggregateClientData[P]>
  }




  export type ClientDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientDataWhereInput
    orderBy?: ClientDataOrderByWithAggregationInput | ClientDataOrderByWithAggregationInput[]
    by: ClientDataScalarFieldEnum[] | ClientDataScalarFieldEnum
    having?: ClientDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientDataCountAggregateInputType | true
    _min?: ClientDataMinAggregateInputType
    _max?: ClientDataMaxAggregateInputType
  }

  export type ClientDataGroupByOutputType = {
    id: string
    name: string
    instagram: string | null
    createdAt: Date
    clientContactId: string
    clientNotes: string | null
    _count: ClientDataCountAggregateOutputType | null
    _min: ClientDataMinAggregateOutputType | null
    _max: ClientDataMaxAggregateOutputType | null
  }

  type GetClientDataGroupByPayload<T extends ClientDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientDataGroupByOutputType[P]>
            : GetScalarType<T[P], ClientDataGroupByOutputType[P]>
        }
      >
    >


  export type ClientDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instagram?: boolean
    createdAt?: boolean
    clientContactId?: boolean
    clientNotes?: boolean
    contactPeople?: boolean | ClientData$contactPeopleArgs<ExtArgs>
    collaborations?: boolean | ClientData$collaborationsArgs<ExtArgs>
    _count?: boolean | ClientDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientData"]>

  export type ClientDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instagram?: boolean
    createdAt?: boolean
    clientContactId?: boolean
    clientNotes?: boolean
  }, ExtArgs["result"]["clientData"]>

  export type ClientDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instagram?: boolean
    createdAt?: boolean
    clientContactId?: boolean
    clientNotes?: boolean
  }, ExtArgs["result"]["clientData"]>

  export type ClientDataSelectScalar = {
    id?: boolean
    name?: boolean
    instagram?: boolean
    createdAt?: boolean
    clientContactId?: boolean
    clientNotes?: boolean
  }

  export type ClientDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "instagram" | "createdAt" | "clientContactId" | "clientNotes", ExtArgs["result"]["clientData"]>
  export type ClientDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPeople?: boolean | ClientData$contactPeopleArgs<ExtArgs>
    collaborations?: boolean | ClientData$collaborationsArgs<ExtArgs>
    _count?: boolean | ClientDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientData"
    objects: {
      contactPeople: Prisma.$ClientContactPayload<ExtArgs>[]
      collaborations: Prisma.$CollaborationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      instagram: string | null
      createdAt: Date
      clientContactId: string
      clientNotes: string | null
    }, ExtArgs["result"]["clientData"]>
    composites: {}
  }

  type ClientDataGetPayload<S extends boolean | null | undefined | ClientDataDefaultArgs> = $Result.GetResult<Prisma.$ClientDataPayload, S>

  type ClientDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientDataCountAggregateInputType | true
    }

  export interface ClientDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientData'], meta: { name: 'ClientData' } }
    /**
     * Find zero or one ClientData that matches the filter.
     * @param {ClientDataFindUniqueArgs} args - Arguments to find a ClientData
     * @example
     * // Get one ClientData
     * const clientData = await prisma.clientData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientDataFindUniqueArgs>(args: SelectSubset<T, ClientDataFindUniqueArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientDataFindUniqueOrThrowArgs} args - Arguments to find a ClientData
     * @example
     * // Get one ClientData
     * const clientData = await prisma.clientData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDataFindFirstArgs} args - Arguments to find a ClientData
     * @example
     * // Get one ClientData
     * const clientData = await prisma.clientData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientDataFindFirstArgs>(args?: SelectSubset<T, ClientDataFindFirstArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDataFindFirstOrThrowArgs} args - Arguments to find a ClientData
     * @example
     * // Get one ClientData
     * const clientData = await prisma.clientData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientData
     * const clientData = await prisma.clientData.findMany()
     * 
     * // Get first 10 ClientData
     * const clientData = await prisma.clientData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientDataWithIdOnly = await prisma.clientData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientDataFindManyArgs>(args?: SelectSubset<T, ClientDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientData.
     * @param {ClientDataCreateArgs} args - Arguments to create a ClientData.
     * @example
     * // Create one ClientData
     * const ClientData = await prisma.clientData.create({
     *   data: {
     *     // ... data to create a ClientData
     *   }
     * })
     * 
     */
    create<T extends ClientDataCreateArgs>(args: SelectSubset<T, ClientDataCreateArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientData.
     * @param {ClientDataCreateManyArgs} args - Arguments to create many ClientData.
     * @example
     * // Create many ClientData
     * const clientData = await prisma.clientData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientDataCreateManyArgs>(args?: SelectSubset<T, ClientDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientData and returns the data saved in the database.
     * @param {ClientDataCreateManyAndReturnArgs} args - Arguments to create many ClientData.
     * @example
     * // Create many ClientData
     * const clientData = await prisma.clientData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientData and only return the `id`
     * const clientDataWithIdOnly = await prisma.clientData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientDataCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientData.
     * @param {ClientDataDeleteArgs} args - Arguments to delete one ClientData.
     * @example
     * // Delete one ClientData
     * const ClientData = await prisma.clientData.delete({
     *   where: {
     *     // ... filter to delete one ClientData
     *   }
     * })
     * 
     */
    delete<T extends ClientDataDeleteArgs>(args: SelectSubset<T, ClientDataDeleteArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientData.
     * @param {ClientDataUpdateArgs} args - Arguments to update one ClientData.
     * @example
     * // Update one ClientData
     * const clientData = await prisma.clientData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientDataUpdateArgs>(args: SelectSubset<T, ClientDataUpdateArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientData.
     * @param {ClientDataDeleteManyArgs} args - Arguments to filter ClientData to delete.
     * @example
     * // Delete a few ClientData
     * const { count } = await prisma.clientData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDataDeleteManyArgs>(args?: SelectSubset<T, ClientDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientData
     * const clientData = await prisma.clientData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientDataUpdateManyArgs>(args: SelectSubset<T, ClientDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientData and returns the data updated in the database.
     * @param {ClientDataUpdateManyAndReturnArgs} args - Arguments to update many ClientData.
     * @example
     * // Update many ClientData
     * const clientData = await prisma.clientData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientData and only return the `id`
     * const clientDataWithIdOnly = await prisma.clientData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientDataUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientData.
     * @param {ClientDataUpsertArgs} args - Arguments to update or create a ClientData.
     * @example
     * // Update or create a ClientData
     * const clientData = await prisma.clientData.upsert({
     *   create: {
     *     // ... data to create a ClientData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientData we want to update
     *   }
     * })
     */
    upsert<T extends ClientDataUpsertArgs>(args: SelectSubset<T, ClientDataUpsertArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDataCountArgs} args - Arguments to filter ClientData to count.
     * @example
     * // Count the number of ClientData
     * const count = await prisma.clientData.count({
     *   where: {
     *     // ... the filter for the ClientData we want to count
     *   }
     * })
    **/
    count<T extends ClientDataCountArgs>(
      args?: Subset<T, ClientDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientDataAggregateArgs>(args: Subset<T, ClientDataAggregateArgs>): Prisma.PrismaPromise<GetClientDataAggregateType<T>>

    /**
     * Group by ClientData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientDataGroupByArgs['orderBy'] }
        : { orderBy?: ClientDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientData model
   */
  readonly fields: ClientDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactPeople<T extends ClientData$contactPeopleArgs<ExtArgs> = {}>(args?: Subset<T, ClientData$contactPeopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborations<T extends ClientData$collaborationsArgs<ExtArgs> = {}>(args?: Subset<T, ClientData$collaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientData model
   */
  interface ClientDataFieldRefs {
    readonly id: FieldRef<"ClientData", 'String'>
    readonly name: FieldRef<"ClientData", 'String'>
    readonly instagram: FieldRef<"ClientData", 'String'>
    readonly createdAt: FieldRef<"ClientData", 'DateTime'>
    readonly clientContactId: FieldRef<"ClientData", 'String'>
    readonly clientNotes: FieldRef<"ClientData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientData findUnique
   */
  export type ClientDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * Filter, which ClientData to fetch.
     */
    where: ClientDataWhereUniqueInput
  }

  /**
   * ClientData findUniqueOrThrow
   */
  export type ClientDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * Filter, which ClientData to fetch.
     */
    where: ClientDataWhereUniqueInput
  }

  /**
   * ClientData findFirst
   */
  export type ClientDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * Filter, which ClientData to fetch.
     */
    where?: ClientDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientData to fetch.
     */
    orderBy?: ClientDataOrderByWithRelationInput | ClientDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientData.
     */
    cursor?: ClientDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientData.
     */
    distinct?: ClientDataScalarFieldEnum | ClientDataScalarFieldEnum[]
  }

  /**
   * ClientData findFirstOrThrow
   */
  export type ClientDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * Filter, which ClientData to fetch.
     */
    where?: ClientDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientData to fetch.
     */
    orderBy?: ClientDataOrderByWithRelationInput | ClientDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientData.
     */
    cursor?: ClientDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientData.
     */
    distinct?: ClientDataScalarFieldEnum | ClientDataScalarFieldEnum[]
  }

  /**
   * ClientData findMany
   */
  export type ClientDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * Filter, which ClientData to fetch.
     */
    where?: ClientDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientData to fetch.
     */
    orderBy?: ClientDataOrderByWithRelationInput | ClientDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientData.
     */
    cursor?: ClientDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientData.
     */
    skip?: number
    distinct?: ClientDataScalarFieldEnum | ClientDataScalarFieldEnum[]
  }

  /**
   * ClientData create
   */
  export type ClientDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientData.
     */
    data: XOR<ClientDataCreateInput, ClientDataUncheckedCreateInput>
  }

  /**
   * ClientData createMany
   */
  export type ClientDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientData.
     */
    data: ClientDataCreateManyInput | ClientDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientData createManyAndReturn
   */
  export type ClientDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * The data used to create many ClientData.
     */
    data: ClientDataCreateManyInput | ClientDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientData update
   */
  export type ClientDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientData.
     */
    data: XOR<ClientDataUpdateInput, ClientDataUncheckedUpdateInput>
    /**
     * Choose, which ClientData to update.
     */
    where: ClientDataWhereUniqueInput
  }

  /**
   * ClientData updateMany
   */
  export type ClientDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientData.
     */
    data: XOR<ClientDataUpdateManyMutationInput, ClientDataUncheckedUpdateManyInput>
    /**
     * Filter which ClientData to update
     */
    where?: ClientDataWhereInput
    /**
     * Limit how many ClientData to update.
     */
    limit?: number
  }

  /**
   * ClientData updateManyAndReturn
   */
  export type ClientDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * The data used to update ClientData.
     */
    data: XOR<ClientDataUpdateManyMutationInput, ClientDataUncheckedUpdateManyInput>
    /**
     * Filter which ClientData to update
     */
    where?: ClientDataWhereInput
    /**
     * Limit how many ClientData to update.
     */
    limit?: number
  }

  /**
   * ClientData upsert
   */
  export type ClientDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientData to update in case it exists.
     */
    where: ClientDataWhereUniqueInput
    /**
     * In case the ClientData found by the `where` argument doesn't exist, create a new ClientData with this data.
     */
    create: XOR<ClientDataCreateInput, ClientDataUncheckedCreateInput>
    /**
     * In case the ClientData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientDataUpdateInput, ClientDataUncheckedUpdateInput>
  }

  /**
   * ClientData delete
   */
  export type ClientDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
    /**
     * Filter which ClientData to delete.
     */
    where: ClientDataWhereUniqueInput
  }

  /**
   * ClientData deleteMany
   */
  export type ClientDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientData to delete
     */
    where?: ClientDataWhereInput
    /**
     * Limit how many ClientData to delete.
     */
    limit?: number
  }

  /**
   * ClientData.contactPeople
   */
  export type ClientData$contactPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    where?: ClientContactWhereInput
    orderBy?: ClientContactOrderByWithRelationInput | ClientContactOrderByWithRelationInput[]
    cursor?: ClientContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientContactScalarFieldEnum | ClientContactScalarFieldEnum[]
  }

  /**
   * ClientData.collaborations
   */
  export type ClientData$collaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    where?: CollaborationsWhereInput
    orderBy?: CollaborationsOrderByWithRelationInput | CollaborationsOrderByWithRelationInput[]
    cursor?: CollaborationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborationsScalarFieldEnum | CollaborationsScalarFieldEnum[]
  }

  /**
   * ClientData without action
   */
  export type ClientDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientData
     */
    select?: ClientDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientData
     */
    omit?: ClientDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDataInclude<ExtArgs> | null
  }


  /**
   * Model ClientContact
   */

  export type AggregateClientContact = {
    _count: ClientContactCountAggregateOutputType | null
    _min: ClientContactMinAggregateOutputType | null
    _max: ClientContactMaxAggregateOutputType | null
  }

  export type ClientContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    clientId: string | null
    contactNotes: string | null
    gender: $Enums.CsGender | null
  }

  export type ClientContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    clientId: string | null
    contactNotes: string | null
    gender: $Enums.CsGender | null
  }

  export type ClientContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    clientId: number
    contactNotes: number
    gender: number
    _all: number
  }


  export type ClientContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    clientId?: true
    contactNotes?: true
    gender?: true
  }

  export type ClientContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    clientId?: true
    contactNotes?: true
    gender?: true
  }

  export type ClientContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    clientId?: true
    contactNotes?: true
    gender?: true
    _all?: true
  }

  export type ClientContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientContact to aggregate.
     */
    where?: ClientContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientContacts to fetch.
     */
    orderBy?: ClientContactOrderByWithRelationInput | ClientContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientContacts
    **/
    _count?: true | ClientContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientContactMaxAggregateInputType
  }

  export type GetClientContactAggregateType<T extends ClientContactAggregateArgs> = {
        [P in keyof T & keyof AggregateClientContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientContact[P]>
      : GetScalarType<T[P], AggregateClientContact[P]>
  }




  export type ClientContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientContactWhereInput
    orderBy?: ClientContactOrderByWithAggregationInput | ClientContactOrderByWithAggregationInput[]
    by: ClientContactScalarFieldEnum[] | ClientContactScalarFieldEnum
    having?: ClientContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientContactCountAggregateInputType | true
    _min?: ClientContactMinAggregateInputType
    _max?: ClientContactMaxAggregateInputType
  }

  export type ClientContactGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date
    clientId: string
    contactNotes: string | null
    gender: $Enums.CsGender
    _count: ClientContactCountAggregateOutputType | null
    _min: ClientContactMinAggregateOutputType | null
    _max: ClientContactMaxAggregateOutputType | null
  }

  type GetClientContactGroupByPayload<T extends ClientContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientContactGroupByOutputType[P]>
            : GetScalarType<T[P], ClientContactGroupByOutputType[P]>
        }
      >
    >


  export type ClientContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    clientId?: boolean
    contactNotes?: boolean
    gender?: boolean
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientContact"]>

  export type ClientContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    clientId?: boolean
    contactNotes?: boolean
    gender?: boolean
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientContact"]>

  export type ClientContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    clientId?: boolean
    contactNotes?: boolean
    gender?: boolean
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientContact"]>

  export type ClientContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    clientId?: boolean
    contactNotes?: boolean
    gender?: boolean
  }

  export type ClientContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "createdAt" | "clientId" | "contactNotes" | "gender", ExtArgs["result"]["clientContact"]>
  export type ClientContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }
  export type ClientContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }
  export type ClientContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }

  export type $ClientContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientContact"
    objects: {
      client: Prisma.$ClientDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      phone: string | null
      createdAt: Date
      clientId: string
      contactNotes: string | null
      gender: $Enums.CsGender
    }, ExtArgs["result"]["clientContact"]>
    composites: {}
  }

  type ClientContactGetPayload<S extends boolean | null | undefined | ClientContactDefaultArgs> = $Result.GetResult<Prisma.$ClientContactPayload, S>

  type ClientContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientContactCountAggregateInputType | true
    }

  export interface ClientContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientContact'], meta: { name: 'ClientContact' } }
    /**
     * Find zero or one ClientContact that matches the filter.
     * @param {ClientContactFindUniqueArgs} args - Arguments to find a ClientContact
     * @example
     * // Get one ClientContact
     * const clientContact = await prisma.clientContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientContactFindUniqueArgs>(args: SelectSubset<T, ClientContactFindUniqueArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientContactFindUniqueOrThrowArgs} args - Arguments to find a ClientContact
     * @example
     * // Get one ClientContact
     * const clientContact = await prisma.clientContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientContactFindFirstArgs} args - Arguments to find a ClientContact
     * @example
     * // Get one ClientContact
     * const clientContact = await prisma.clientContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientContactFindFirstArgs>(args?: SelectSubset<T, ClientContactFindFirstArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientContactFindFirstOrThrowArgs} args - Arguments to find a ClientContact
     * @example
     * // Get one ClientContact
     * const clientContact = await prisma.clientContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientContacts
     * const clientContacts = await prisma.clientContact.findMany()
     * 
     * // Get first 10 ClientContacts
     * const clientContacts = await prisma.clientContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientContactWithIdOnly = await prisma.clientContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientContactFindManyArgs>(args?: SelectSubset<T, ClientContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientContact.
     * @param {ClientContactCreateArgs} args - Arguments to create a ClientContact.
     * @example
     * // Create one ClientContact
     * const ClientContact = await prisma.clientContact.create({
     *   data: {
     *     // ... data to create a ClientContact
     *   }
     * })
     * 
     */
    create<T extends ClientContactCreateArgs>(args: SelectSubset<T, ClientContactCreateArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientContacts.
     * @param {ClientContactCreateManyArgs} args - Arguments to create many ClientContacts.
     * @example
     * // Create many ClientContacts
     * const clientContact = await prisma.clientContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientContactCreateManyArgs>(args?: SelectSubset<T, ClientContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientContacts and returns the data saved in the database.
     * @param {ClientContactCreateManyAndReturnArgs} args - Arguments to create many ClientContacts.
     * @example
     * // Create many ClientContacts
     * const clientContact = await prisma.clientContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientContacts and only return the `id`
     * const clientContactWithIdOnly = await prisma.clientContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientContact.
     * @param {ClientContactDeleteArgs} args - Arguments to delete one ClientContact.
     * @example
     * // Delete one ClientContact
     * const ClientContact = await prisma.clientContact.delete({
     *   where: {
     *     // ... filter to delete one ClientContact
     *   }
     * })
     * 
     */
    delete<T extends ClientContactDeleteArgs>(args: SelectSubset<T, ClientContactDeleteArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientContact.
     * @param {ClientContactUpdateArgs} args - Arguments to update one ClientContact.
     * @example
     * // Update one ClientContact
     * const clientContact = await prisma.clientContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientContactUpdateArgs>(args: SelectSubset<T, ClientContactUpdateArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientContacts.
     * @param {ClientContactDeleteManyArgs} args - Arguments to filter ClientContacts to delete.
     * @example
     * // Delete a few ClientContacts
     * const { count } = await prisma.clientContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientContactDeleteManyArgs>(args?: SelectSubset<T, ClientContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientContacts
     * const clientContact = await prisma.clientContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientContactUpdateManyArgs>(args: SelectSubset<T, ClientContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientContacts and returns the data updated in the database.
     * @param {ClientContactUpdateManyAndReturnArgs} args - Arguments to update many ClientContacts.
     * @example
     * // Update many ClientContacts
     * const clientContact = await prisma.clientContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientContacts and only return the `id`
     * const clientContactWithIdOnly = await prisma.clientContact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientContact.
     * @param {ClientContactUpsertArgs} args - Arguments to update or create a ClientContact.
     * @example
     * // Update or create a ClientContact
     * const clientContact = await prisma.clientContact.upsert({
     *   create: {
     *     // ... data to create a ClientContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientContact we want to update
     *   }
     * })
     */
    upsert<T extends ClientContactUpsertArgs>(args: SelectSubset<T, ClientContactUpsertArgs<ExtArgs>>): Prisma__ClientContactClient<$Result.GetResult<Prisma.$ClientContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientContactCountArgs} args - Arguments to filter ClientContacts to count.
     * @example
     * // Count the number of ClientContacts
     * const count = await prisma.clientContact.count({
     *   where: {
     *     // ... the filter for the ClientContacts we want to count
     *   }
     * })
    **/
    count<T extends ClientContactCountArgs>(
      args?: Subset<T, ClientContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientContactAggregateArgs>(args: Subset<T, ClientContactAggregateArgs>): Prisma.PrismaPromise<GetClientContactAggregateType<T>>

    /**
     * Group by ClientContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientContactGroupByArgs['orderBy'] }
        : { orderBy?: ClientContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientContact model
   */
  readonly fields: ClientContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDataDefaultArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientContact model
   */
  interface ClientContactFieldRefs {
    readonly id: FieldRef<"ClientContact", 'String'>
    readonly name: FieldRef<"ClientContact", 'String'>
    readonly email: FieldRef<"ClientContact", 'String'>
    readonly phone: FieldRef<"ClientContact", 'String'>
    readonly createdAt: FieldRef<"ClientContact", 'DateTime'>
    readonly clientId: FieldRef<"ClientContact", 'String'>
    readonly contactNotes: FieldRef<"ClientContact", 'String'>
    readonly gender: FieldRef<"ClientContact", 'CsGender'>
  }
    

  // Custom InputTypes
  /**
   * ClientContact findUnique
   */
  export type ClientContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * Filter, which ClientContact to fetch.
     */
    where: ClientContactWhereUniqueInput
  }

  /**
   * ClientContact findUniqueOrThrow
   */
  export type ClientContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * Filter, which ClientContact to fetch.
     */
    where: ClientContactWhereUniqueInput
  }

  /**
   * ClientContact findFirst
   */
  export type ClientContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * Filter, which ClientContact to fetch.
     */
    where?: ClientContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientContacts to fetch.
     */
    orderBy?: ClientContactOrderByWithRelationInput | ClientContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientContacts.
     */
    cursor?: ClientContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientContacts.
     */
    distinct?: ClientContactScalarFieldEnum | ClientContactScalarFieldEnum[]
  }

  /**
   * ClientContact findFirstOrThrow
   */
  export type ClientContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * Filter, which ClientContact to fetch.
     */
    where?: ClientContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientContacts to fetch.
     */
    orderBy?: ClientContactOrderByWithRelationInput | ClientContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientContacts.
     */
    cursor?: ClientContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientContacts.
     */
    distinct?: ClientContactScalarFieldEnum | ClientContactScalarFieldEnum[]
  }

  /**
   * ClientContact findMany
   */
  export type ClientContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * Filter, which ClientContacts to fetch.
     */
    where?: ClientContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientContacts to fetch.
     */
    orderBy?: ClientContactOrderByWithRelationInput | ClientContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientContacts.
     */
    cursor?: ClientContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientContacts.
     */
    skip?: number
    distinct?: ClientContactScalarFieldEnum | ClientContactScalarFieldEnum[]
  }

  /**
   * ClientContact create
   */
  export type ClientContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientContact.
     */
    data: XOR<ClientContactCreateInput, ClientContactUncheckedCreateInput>
  }

  /**
   * ClientContact createMany
   */
  export type ClientContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientContacts.
     */
    data: ClientContactCreateManyInput | ClientContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientContact createManyAndReturn
   */
  export type ClientContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * The data used to create many ClientContacts.
     */
    data: ClientContactCreateManyInput | ClientContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientContact update
   */
  export type ClientContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientContact.
     */
    data: XOR<ClientContactUpdateInput, ClientContactUncheckedUpdateInput>
    /**
     * Choose, which ClientContact to update.
     */
    where: ClientContactWhereUniqueInput
  }

  /**
   * ClientContact updateMany
   */
  export type ClientContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientContacts.
     */
    data: XOR<ClientContactUpdateManyMutationInput, ClientContactUncheckedUpdateManyInput>
    /**
     * Filter which ClientContacts to update
     */
    where?: ClientContactWhereInput
    /**
     * Limit how many ClientContacts to update.
     */
    limit?: number
  }

  /**
   * ClientContact updateManyAndReturn
   */
  export type ClientContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * The data used to update ClientContacts.
     */
    data: XOR<ClientContactUpdateManyMutationInput, ClientContactUncheckedUpdateManyInput>
    /**
     * Filter which ClientContacts to update
     */
    where?: ClientContactWhereInput
    /**
     * Limit how many ClientContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientContact upsert
   */
  export type ClientContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientContact to update in case it exists.
     */
    where: ClientContactWhereUniqueInput
    /**
     * In case the ClientContact found by the `where` argument doesn't exist, create a new ClientContact with this data.
     */
    create: XOR<ClientContactCreateInput, ClientContactUncheckedCreateInput>
    /**
     * In case the ClientContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientContactUpdateInput, ClientContactUncheckedUpdateInput>
  }

  /**
   * ClientContact delete
   */
  export type ClientContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
    /**
     * Filter which ClientContact to delete.
     */
    where: ClientContactWhereUniqueInput
  }

  /**
   * ClientContact deleteMany
   */
  export type ClientContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientContacts to delete
     */
    where?: ClientContactWhereInput
    /**
     * Limit how many ClientContacts to delete.
     */
    limit?: number
  }

  /**
   * ClientContact without action
   */
  export type ClientContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientContact
     */
    select?: ClientContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientContact
     */
    omit?: ClientContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientContactInclude<ExtArgs> | null
  }


  /**
   * Model Collaborations
   */

  export type AggregateCollaborations = {
    _count: CollaborationsCountAggregateOutputType | null
    _avg: CollaborationsAvgAggregateOutputType | null
    _sum: CollaborationsSumAggregateOutputType | null
    _min: CollaborationsMinAggregateOutputType | null
    _max: CollaborationsMaxAggregateOutputType | null
  }

  export type CollaborationsAvgAggregateOutputType = {
    paymentAmount: number | null
  }

  export type CollaborationsSumAggregateOutputType = {
    paymentAmount: number | null
  }

  export type CollaborationsMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CollabType | null
    collabStatus: $Enums.CollaborationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    dealDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentAmount: number | null
    paymentDate: Date | null
    clientId: string | null
    deliverableDate: Date | null
    deliverableLink: string | null
    deliverableStatus: $Enums.DeliverableStatus | null
    deliverableNotes: string | null
    collabNotes: string | null
  }

  export type CollaborationsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CollabType | null
    collabStatus: $Enums.CollaborationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    dealDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentAmount: number | null
    paymentDate: Date | null
    clientId: string | null
    deliverableDate: Date | null
    deliverableLink: string | null
    deliverableStatus: $Enums.DeliverableStatus | null
    deliverableNotes: string | null
    collabNotes: string | null
  }

  export type CollaborationsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    collabStatus: number
    createdAt: number
    updatedAt: number
    dealDate: number
    paymentStatus: number
    paymentAmount: number
    paymentDate: number
    clientId: number
    deliverables: number
    deliverableDate: number
    deliverableLink: number
    deliverableStatus: number
    deliverableNotes: number
    collabNotes: number
    _all: number
  }


  export type CollaborationsAvgAggregateInputType = {
    paymentAmount?: true
  }

  export type CollaborationsSumAggregateInputType = {
    paymentAmount?: true
  }

  export type CollaborationsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    collabStatus?: true
    createdAt?: true
    updatedAt?: true
    dealDate?: true
    paymentStatus?: true
    paymentAmount?: true
    paymentDate?: true
    clientId?: true
    deliverableDate?: true
    deliverableLink?: true
    deliverableStatus?: true
    deliverableNotes?: true
    collabNotes?: true
  }

  export type CollaborationsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    collabStatus?: true
    createdAt?: true
    updatedAt?: true
    dealDate?: true
    paymentStatus?: true
    paymentAmount?: true
    paymentDate?: true
    clientId?: true
    deliverableDate?: true
    deliverableLink?: true
    deliverableStatus?: true
    deliverableNotes?: true
    collabNotes?: true
  }

  export type CollaborationsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    collabStatus?: true
    createdAt?: true
    updatedAt?: true
    dealDate?: true
    paymentStatus?: true
    paymentAmount?: true
    paymentDate?: true
    clientId?: true
    deliverables?: true
    deliverableDate?: true
    deliverableLink?: true
    deliverableStatus?: true
    deliverableNotes?: true
    collabNotes?: true
    _all?: true
  }

  export type CollaborationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborations to aggregate.
     */
    where?: CollaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationsOrderByWithRelationInput | CollaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborations
    **/
    _count?: true | CollaborationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollaborationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollaborationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaborationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaborationsMaxAggregateInputType
  }

  export type GetCollaborationsAggregateType<T extends CollaborationsAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborations[P]>
      : GetScalarType<T[P], AggregateCollaborations[P]>
  }




  export type CollaborationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationsWhereInput
    orderBy?: CollaborationsOrderByWithAggregationInput | CollaborationsOrderByWithAggregationInput[]
    by: CollaborationsScalarFieldEnum[] | CollaborationsScalarFieldEnum
    having?: CollaborationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaborationsCountAggregateInputType | true
    _avg?: CollaborationsAvgAggregateInputType
    _sum?: CollaborationsSumAggregateInputType
    _min?: CollaborationsMinAggregateInputType
    _max?: CollaborationsMaxAggregateInputType
  }

  export type CollaborationsGroupByOutputType = {
    id: string
    name: string | null
    type: $Enums.CollabType
    collabStatus: $Enums.CollaborationStatus
    createdAt: Date
    updatedAt: Date | null
    dealDate: Date | null
    paymentStatus: $Enums.PaymentStatus
    paymentAmount: number | null
    paymentDate: Date | null
    clientId: string
    deliverables: $Enums.CollaborationDeliverables[]
    deliverableDate: Date | null
    deliverableLink: string | null
    deliverableStatus: $Enums.DeliverableStatus
    deliverableNotes: string | null
    collabNotes: string | null
    _count: CollaborationsCountAggregateOutputType | null
    _avg: CollaborationsAvgAggregateOutputType | null
    _sum: CollaborationsSumAggregateOutputType | null
    _min: CollaborationsMinAggregateOutputType | null
    _max: CollaborationsMaxAggregateOutputType | null
  }

  type GetCollaborationsGroupByPayload<T extends CollaborationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaborationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaborationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaborationsGroupByOutputType[P]>
            : GetScalarType<T[P], CollaborationsGroupByOutputType[P]>
        }
      >
    >


  export type CollaborationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    collabStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealDate?: boolean
    paymentStatus?: boolean
    paymentAmount?: boolean
    paymentDate?: boolean
    clientId?: boolean
    deliverables?: boolean
    deliverableDate?: boolean
    deliverableLink?: boolean
    deliverableStatus?: boolean
    deliverableNotes?: boolean
    collabNotes?: boolean
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborations"]>

  export type CollaborationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    collabStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealDate?: boolean
    paymentStatus?: boolean
    paymentAmount?: boolean
    paymentDate?: boolean
    clientId?: boolean
    deliverables?: boolean
    deliverableDate?: boolean
    deliverableLink?: boolean
    deliverableStatus?: boolean
    deliverableNotes?: boolean
    collabNotes?: boolean
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborations"]>

  export type CollaborationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    collabStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealDate?: boolean
    paymentStatus?: boolean
    paymentAmount?: boolean
    paymentDate?: boolean
    clientId?: boolean
    deliverables?: boolean
    deliverableDate?: boolean
    deliverableLink?: boolean
    deliverableStatus?: boolean
    deliverableNotes?: boolean
    collabNotes?: boolean
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborations"]>

  export type CollaborationsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    collabStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealDate?: boolean
    paymentStatus?: boolean
    paymentAmount?: boolean
    paymentDate?: boolean
    clientId?: boolean
    deliverables?: boolean
    deliverableDate?: boolean
    deliverableLink?: boolean
    deliverableStatus?: boolean
    deliverableNotes?: boolean
    collabNotes?: boolean
  }

  export type CollaborationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "collabStatus" | "createdAt" | "updatedAt" | "dealDate" | "paymentStatus" | "paymentAmount" | "paymentDate" | "clientId" | "deliverables" | "deliverableDate" | "deliverableLink" | "deliverableStatus" | "deliverableNotes" | "collabNotes", ExtArgs["result"]["collaborations"]>
  export type CollaborationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }
  export type CollaborationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }
  export type CollaborationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDataDefaultArgs<ExtArgs>
  }

  export type $CollaborationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaborations"
    objects: {
      client: Prisma.$ClientDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      type: $Enums.CollabType
      collabStatus: $Enums.CollaborationStatus
      createdAt: Date
      updatedAt: Date | null
      dealDate: Date | null
      paymentStatus: $Enums.PaymentStatus
      paymentAmount: number | null
      paymentDate: Date | null
      clientId: string
      deliverables: $Enums.CollaborationDeliverables[]
      deliverableDate: Date | null
      deliverableLink: string | null
      deliverableStatus: $Enums.DeliverableStatus
      deliverableNotes: string | null
      collabNotes: string | null
    }, ExtArgs["result"]["collaborations"]>
    composites: {}
  }

  type CollaborationsGetPayload<S extends boolean | null | undefined | CollaborationsDefaultArgs> = $Result.GetResult<Prisma.$CollaborationsPayload, S>

  type CollaborationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaborationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaborationsCountAggregateInputType | true
    }

  export interface CollaborationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaborations'], meta: { name: 'Collaborations' } }
    /**
     * Find zero or one Collaborations that matches the filter.
     * @param {CollaborationsFindUniqueArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaborationsFindUniqueArgs>(args: SelectSubset<T, CollaborationsFindUniqueArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaborations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaborationsFindUniqueOrThrowArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaborationsFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaborationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsFindFirstArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaborationsFindFirstArgs>(args?: SelectSubset<T, CollaborationsFindFirstArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsFindFirstOrThrowArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaborationsFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaborationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborations
     * const collaborations = await prisma.collaborations.findMany()
     * 
     * // Get first 10 Collaborations
     * const collaborations = await prisma.collaborations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaborationsWithIdOnly = await prisma.collaborations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaborationsFindManyArgs>(args?: SelectSubset<T, CollaborationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaborations.
     * @param {CollaborationsCreateArgs} args - Arguments to create a Collaborations.
     * @example
     * // Create one Collaborations
     * const Collaborations = await prisma.collaborations.create({
     *   data: {
     *     // ... data to create a Collaborations
     *   }
     * })
     * 
     */
    create<T extends CollaborationsCreateArgs>(args: SelectSubset<T, CollaborationsCreateArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborations.
     * @param {CollaborationsCreateManyArgs} args - Arguments to create many Collaborations.
     * @example
     * // Create many Collaborations
     * const collaborations = await prisma.collaborations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaborationsCreateManyArgs>(args?: SelectSubset<T, CollaborationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborations and returns the data saved in the database.
     * @param {CollaborationsCreateManyAndReturnArgs} args - Arguments to create many Collaborations.
     * @example
     * // Create many Collaborations
     * const collaborations = await prisma.collaborations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborations and only return the `id`
     * const collaborationsWithIdOnly = await prisma.collaborations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaborationsCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaborationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collaborations.
     * @param {CollaborationsDeleteArgs} args - Arguments to delete one Collaborations.
     * @example
     * // Delete one Collaborations
     * const Collaborations = await prisma.collaborations.delete({
     *   where: {
     *     // ... filter to delete one Collaborations
     *   }
     * })
     * 
     */
    delete<T extends CollaborationsDeleteArgs>(args: SelectSubset<T, CollaborationsDeleteArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaborations.
     * @param {CollaborationsUpdateArgs} args - Arguments to update one Collaborations.
     * @example
     * // Update one Collaborations
     * const collaborations = await prisma.collaborations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaborationsUpdateArgs>(args: SelectSubset<T, CollaborationsUpdateArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborations.
     * @param {CollaborationsDeleteManyArgs} args - Arguments to filter Collaborations to delete.
     * @example
     * // Delete a few Collaborations
     * const { count } = await prisma.collaborations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaborationsDeleteManyArgs>(args?: SelectSubset<T, CollaborationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborations
     * const collaborations = await prisma.collaborations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaborationsUpdateManyArgs>(args: SelectSubset<T, CollaborationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborations and returns the data updated in the database.
     * @param {CollaborationsUpdateManyAndReturnArgs} args - Arguments to update many Collaborations.
     * @example
     * // Update many Collaborations
     * const collaborations = await prisma.collaborations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collaborations and only return the `id`
     * const collaborationsWithIdOnly = await prisma.collaborations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollaborationsUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaborationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collaborations.
     * @param {CollaborationsUpsertArgs} args - Arguments to update or create a Collaborations.
     * @example
     * // Update or create a Collaborations
     * const collaborations = await prisma.collaborations.upsert({
     *   create: {
     *     // ... data to create a Collaborations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborations we want to update
     *   }
     * })
     */
    upsert<T extends CollaborationsUpsertArgs>(args: SelectSubset<T, CollaborationsUpsertArgs<ExtArgs>>): Prisma__CollaborationsClient<$Result.GetResult<Prisma.$CollaborationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsCountArgs} args - Arguments to filter Collaborations to count.
     * @example
     * // Count the number of Collaborations
     * const count = await prisma.collaborations.count({
     *   where: {
     *     // ... the filter for the Collaborations we want to count
     *   }
     * })
    **/
    count<T extends CollaborationsCountArgs>(
      args?: Subset<T, CollaborationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaborationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaborationsAggregateArgs>(args: Subset<T, CollaborationsAggregateArgs>): Prisma.PrismaPromise<GetCollaborationsAggregateType<T>>

    /**
     * Group by Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaborationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaborationsGroupByArgs['orderBy'] }
        : { orderBy?: CollaborationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaborationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaborationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaborations model
   */
  readonly fields: CollaborationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaborations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaborationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDataDefaultArgs<ExtArgs>>): Prisma__ClientDataClient<$Result.GetResult<Prisma.$ClientDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collaborations model
   */
  interface CollaborationsFieldRefs {
    readonly id: FieldRef<"Collaborations", 'String'>
    readonly name: FieldRef<"Collaborations", 'String'>
    readonly type: FieldRef<"Collaborations", 'CollabType'>
    readonly collabStatus: FieldRef<"Collaborations", 'CollaborationStatus'>
    readonly createdAt: FieldRef<"Collaborations", 'DateTime'>
    readonly updatedAt: FieldRef<"Collaborations", 'DateTime'>
    readonly dealDate: FieldRef<"Collaborations", 'DateTime'>
    readonly paymentStatus: FieldRef<"Collaborations", 'PaymentStatus'>
    readonly paymentAmount: FieldRef<"Collaborations", 'Int'>
    readonly paymentDate: FieldRef<"Collaborations", 'DateTime'>
    readonly clientId: FieldRef<"Collaborations", 'String'>
    readonly deliverables: FieldRef<"Collaborations", 'CollaborationDeliverables[]'>
    readonly deliverableDate: FieldRef<"Collaborations", 'DateTime'>
    readonly deliverableLink: FieldRef<"Collaborations", 'String'>
    readonly deliverableStatus: FieldRef<"Collaborations", 'DeliverableStatus'>
    readonly deliverableNotes: FieldRef<"Collaborations", 'String'>
    readonly collabNotes: FieldRef<"Collaborations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Collaborations findUnique
   */
  export type CollaborationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * Filter, which Collaborations to fetch.
     */
    where: CollaborationsWhereUniqueInput
  }

  /**
   * Collaborations findUniqueOrThrow
   */
  export type CollaborationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * Filter, which Collaborations to fetch.
     */
    where: CollaborationsWhereUniqueInput
  }

  /**
   * Collaborations findFirst
   */
  export type CollaborationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * Filter, which Collaborations to fetch.
     */
    where?: CollaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationsOrderByWithRelationInput | CollaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborations.
     */
    cursor?: CollaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborations.
     */
    distinct?: CollaborationsScalarFieldEnum | CollaborationsScalarFieldEnum[]
  }

  /**
   * Collaborations findFirstOrThrow
   */
  export type CollaborationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * Filter, which Collaborations to fetch.
     */
    where?: CollaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationsOrderByWithRelationInput | CollaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborations.
     */
    cursor?: CollaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborations.
     */
    distinct?: CollaborationsScalarFieldEnum | CollaborationsScalarFieldEnum[]
  }

  /**
   * Collaborations findMany
   */
  export type CollaborationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * Filter, which Collaborations to fetch.
     */
    where?: CollaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationsOrderByWithRelationInput | CollaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborations.
     */
    cursor?: CollaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    distinct?: CollaborationsScalarFieldEnum | CollaborationsScalarFieldEnum[]
  }

  /**
   * Collaborations create
   */
  export type CollaborationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Collaborations.
     */
    data: XOR<CollaborationsCreateInput, CollaborationsUncheckedCreateInput>
  }

  /**
   * Collaborations createMany
   */
  export type CollaborationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborations.
     */
    data: CollaborationsCreateManyInput | CollaborationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaborations createManyAndReturn
   */
  export type CollaborationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * The data used to create many Collaborations.
     */
    data: CollaborationsCreateManyInput | CollaborationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaborations update
   */
  export type CollaborationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Collaborations.
     */
    data: XOR<CollaborationsUpdateInput, CollaborationsUncheckedUpdateInput>
    /**
     * Choose, which Collaborations to update.
     */
    where: CollaborationsWhereUniqueInput
  }

  /**
   * Collaborations updateMany
   */
  export type CollaborationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborations.
     */
    data: XOR<CollaborationsUpdateManyMutationInput, CollaborationsUncheckedUpdateManyInput>
    /**
     * Filter which Collaborations to update
     */
    where?: CollaborationsWhereInput
    /**
     * Limit how many Collaborations to update.
     */
    limit?: number
  }

  /**
   * Collaborations updateManyAndReturn
   */
  export type CollaborationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * The data used to update Collaborations.
     */
    data: XOR<CollaborationsUpdateManyMutationInput, CollaborationsUncheckedUpdateManyInput>
    /**
     * Filter which Collaborations to update
     */
    where?: CollaborationsWhereInput
    /**
     * Limit how many Collaborations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaborations upsert
   */
  export type CollaborationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Collaborations to update in case it exists.
     */
    where: CollaborationsWhereUniqueInput
    /**
     * In case the Collaborations found by the `where` argument doesn't exist, create a new Collaborations with this data.
     */
    create: XOR<CollaborationsCreateInput, CollaborationsUncheckedCreateInput>
    /**
     * In case the Collaborations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaborationsUpdateInput, CollaborationsUncheckedUpdateInput>
  }

  /**
   * Collaborations delete
   */
  export type CollaborationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
    /**
     * Filter which Collaborations to delete.
     */
    where: CollaborationsWhereUniqueInput
  }

  /**
   * Collaborations deleteMany
   */
  export type CollaborationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborations to delete
     */
    where?: CollaborationsWhereInput
    /**
     * Limit how many Collaborations to delete.
     */
    limit?: number
  }

  /**
   * Collaborations without action
   */
  export type CollaborationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborations
     */
    select?: CollaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborations
     */
    omit?: CollaborationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    instagram: 'instagram',
    createdAt: 'createdAt',
    clientContactId: 'clientContactId',
    clientNotes: 'clientNotes'
  };

  export type ClientDataScalarFieldEnum = (typeof ClientDataScalarFieldEnum)[keyof typeof ClientDataScalarFieldEnum]


  export const ClientContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    clientId: 'clientId',
    contactNotes: 'contactNotes',
    gender: 'gender'
  };

  export type ClientContactScalarFieldEnum = (typeof ClientContactScalarFieldEnum)[keyof typeof ClientContactScalarFieldEnum]


  export const CollaborationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    collabStatus: 'collabStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dealDate: 'dealDate',
    paymentStatus: 'paymentStatus',
    paymentAmount: 'paymentAmount',
    paymentDate: 'paymentDate',
    clientId: 'clientId',
    deliverables: 'deliverables',
    deliverableDate: 'deliverableDate',
    deliverableLink: 'deliverableLink',
    deliverableStatus: 'deliverableStatus',
    deliverableNotes: 'deliverableNotes',
    collabNotes: 'collabNotes'
  };

  export type CollaborationsScalarFieldEnum = (typeof CollaborationsScalarFieldEnum)[keyof typeof CollaborationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CsGender'
   */
  export type EnumCsGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CsGender'>
    


  /**
   * Reference to a field of type 'CsGender[]'
   */
  export type ListEnumCsGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CsGender[]'>
    


  /**
   * Reference to a field of type 'CollabType'
   */
  export type EnumCollabTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollabType'>
    


  /**
   * Reference to a field of type 'CollabType[]'
   */
  export type ListEnumCollabTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollabType[]'>
    


  /**
   * Reference to a field of type 'CollaborationStatus'
   */
  export type EnumCollaborationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationStatus'>
    


  /**
   * Reference to a field of type 'CollaborationStatus[]'
   */
  export type ListEnumCollaborationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'CollaborationDeliverables[]'
   */
  export type ListEnumCollaborationDeliverablesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationDeliverables[]'>
    


  /**
   * Reference to a field of type 'CollaborationDeliverables'
   */
  export type EnumCollaborationDeliverablesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationDeliverables'>
    


  /**
   * Reference to a field of type 'DeliverableStatus'
   */
  export type EnumDeliverableStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliverableStatus'>
    


  /**
   * Reference to a field of type 'DeliverableStatus[]'
   */
  export type ListEnumDeliverableStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliverableStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ClientDataWhereInput = {
    AND?: ClientDataWhereInput | ClientDataWhereInput[]
    OR?: ClientDataWhereInput[]
    NOT?: ClientDataWhereInput | ClientDataWhereInput[]
    id?: StringFilter<"ClientData"> | string
    name?: StringFilter<"ClientData"> | string
    instagram?: StringNullableFilter<"ClientData"> | string | null
    createdAt?: DateTimeFilter<"ClientData"> | Date | string
    clientContactId?: StringFilter<"ClientData"> | string
    clientNotes?: StringNullableFilter<"ClientData"> | string | null
    contactPeople?: ClientContactListRelationFilter
    collaborations?: CollaborationsListRelationFilter
  }

  export type ClientDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    instagram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientContactId?: SortOrder
    clientNotes?: SortOrderInput | SortOrder
    contactPeople?: ClientContactOrderByRelationAggregateInput
    collaborations?: CollaborationsOrderByRelationAggregateInput
  }

  export type ClientDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientDataWhereInput | ClientDataWhereInput[]
    OR?: ClientDataWhereInput[]
    NOT?: ClientDataWhereInput | ClientDataWhereInput[]
    name?: StringFilter<"ClientData"> | string
    instagram?: StringNullableFilter<"ClientData"> | string | null
    createdAt?: DateTimeFilter<"ClientData"> | Date | string
    clientContactId?: StringFilter<"ClientData"> | string
    clientNotes?: StringNullableFilter<"ClientData"> | string | null
    contactPeople?: ClientContactListRelationFilter
    collaborations?: CollaborationsListRelationFilter
  }, "id">

  export type ClientDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    instagram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientContactId?: SortOrder
    clientNotes?: SortOrderInput | SortOrder
    _count?: ClientDataCountOrderByAggregateInput
    _max?: ClientDataMaxOrderByAggregateInput
    _min?: ClientDataMinOrderByAggregateInput
  }

  export type ClientDataScalarWhereWithAggregatesInput = {
    AND?: ClientDataScalarWhereWithAggregatesInput | ClientDataScalarWhereWithAggregatesInput[]
    OR?: ClientDataScalarWhereWithAggregatesInput[]
    NOT?: ClientDataScalarWhereWithAggregatesInput | ClientDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientData"> | string
    name?: StringWithAggregatesFilter<"ClientData"> | string
    instagram?: StringNullableWithAggregatesFilter<"ClientData"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClientData"> | Date | string
    clientContactId?: StringWithAggregatesFilter<"ClientData"> | string
    clientNotes?: StringNullableWithAggregatesFilter<"ClientData"> | string | null
  }

  export type ClientContactWhereInput = {
    AND?: ClientContactWhereInput | ClientContactWhereInput[]
    OR?: ClientContactWhereInput[]
    NOT?: ClientContactWhereInput | ClientContactWhereInput[]
    id?: StringFilter<"ClientContact"> | string
    name?: StringNullableFilter<"ClientContact"> | string | null
    email?: StringNullableFilter<"ClientContact"> | string | null
    phone?: StringNullableFilter<"ClientContact"> | string | null
    createdAt?: DateTimeFilter<"ClientContact"> | Date | string
    clientId?: StringFilter<"ClientContact"> | string
    contactNotes?: StringNullableFilter<"ClientContact"> | string | null
    gender?: EnumCsGenderFilter<"ClientContact"> | $Enums.CsGender
    client?: XOR<ClientDataScalarRelationFilter, ClientDataWhereInput>
  }

  export type ClientContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    contactNotes?: SortOrderInput | SortOrder
    gender?: SortOrder
    client?: ClientDataOrderByWithRelationInput
  }

  export type ClientContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientContactWhereInput | ClientContactWhereInput[]
    OR?: ClientContactWhereInput[]
    NOT?: ClientContactWhereInput | ClientContactWhereInput[]
    name?: StringNullableFilter<"ClientContact"> | string | null
    email?: StringNullableFilter<"ClientContact"> | string | null
    phone?: StringNullableFilter<"ClientContact"> | string | null
    createdAt?: DateTimeFilter<"ClientContact"> | Date | string
    clientId?: StringFilter<"ClientContact"> | string
    contactNotes?: StringNullableFilter<"ClientContact"> | string | null
    gender?: EnumCsGenderFilter<"ClientContact"> | $Enums.CsGender
    client?: XOR<ClientDataScalarRelationFilter, ClientDataWhereInput>
  }, "id">

  export type ClientContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    contactNotes?: SortOrderInput | SortOrder
    gender?: SortOrder
    _count?: ClientContactCountOrderByAggregateInput
    _max?: ClientContactMaxOrderByAggregateInput
    _min?: ClientContactMinOrderByAggregateInput
  }

  export type ClientContactScalarWhereWithAggregatesInput = {
    AND?: ClientContactScalarWhereWithAggregatesInput | ClientContactScalarWhereWithAggregatesInput[]
    OR?: ClientContactScalarWhereWithAggregatesInput[]
    NOT?: ClientContactScalarWhereWithAggregatesInput | ClientContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientContact"> | string
    name?: StringNullableWithAggregatesFilter<"ClientContact"> | string | null
    email?: StringNullableWithAggregatesFilter<"ClientContact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ClientContact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClientContact"> | Date | string
    clientId?: StringWithAggregatesFilter<"ClientContact"> | string
    contactNotes?: StringNullableWithAggregatesFilter<"ClientContact"> | string | null
    gender?: EnumCsGenderWithAggregatesFilter<"ClientContact"> | $Enums.CsGender
  }

  export type CollaborationsWhereInput = {
    AND?: CollaborationsWhereInput | CollaborationsWhereInput[]
    OR?: CollaborationsWhereInput[]
    NOT?: CollaborationsWhereInput | CollaborationsWhereInput[]
    id?: StringFilter<"Collaborations"> | string
    name?: StringNullableFilter<"Collaborations"> | string | null
    type?: EnumCollabTypeFilter<"Collaborations"> | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFilter<"Collaborations"> | $Enums.CollaborationStatus
    createdAt?: DateTimeFilter<"Collaborations"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    dealDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Collaborations"> | $Enums.PaymentStatus
    paymentAmount?: IntNullableFilter<"Collaborations"> | number | null
    paymentDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    clientId?: StringFilter<"Collaborations"> | string
    deliverables?: EnumCollaborationDeliverablesNullableListFilter<"Collaborations">
    deliverableDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    deliverableLink?: StringNullableFilter<"Collaborations"> | string | null
    deliverableStatus?: EnumDeliverableStatusFilter<"Collaborations"> | $Enums.DeliverableStatus
    deliverableNotes?: StringNullableFilter<"Collaborations"> | string | null
    collabNotes?: StringNullableFilter<"Collaborations"> | string | null
    client?: XOR<ClientDataScalarRelationFilter, ClientDataWhereInput>
  }

  export type CollaborationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrder
    collabStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    dealDate?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paymentAmount?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    deliverables?: SortOrder
    deliverableDate?: SortOrderInput | SortOrder
    deliverableLink?: SortOrderInput | SortOrder
    deliverableStatus?: SortOrder
    deliverableNotes?: SortOrderInput | SortOrder
    collabNotes?: SortOrderInput | SortOrder
    client?: ClientDataOrderByWithRelationInput
  }

  export type CollaborationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollaborationsWhereInput | CollaborationsWhereInput[]
    OR?: CollaborationsWhereInput[]
    NOT?: CollaborationsWhereInput | CollaborationsWhereInput[]
    name?: StringNullableFilter<"Collaborations"> | string | null
    type?: EnumCollabTypeFilter<"Collaborations"> | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFilter<"Collaborations"> | $Enums.CollaborationStatus
    createdAt?: DateTimeFilter<"Collaborations"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    dealDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Collaborations"> | $Enums.PaymentStatus
    paymentAmount?: IntNullableFilter<"Collaborations"> | number | null
    paymentDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    clientId?: StringFilter<"Collaborations"> | string
    deliverables?: EnumCollaborationDeliverablesNullableListFilter<"Collaborations">
    deliverableDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    deliverableLink?: StringNullableFilter<"Collaborations"> | string | null
    deliverableStatus?: EnumDeliverableStatusFilter<"Collaborations"> | $Enums.DeliverableStatus
    deliverableNotes?: StringNullableFilter<"Collaborations"> | string | null
    collabNotes?: StringNullableFilter<"Collaborations"> | string | null
    client?: XOR<ClientDataScalarRelationFilter, ClientDataWhereInput>
  }, "id">

  export type CollaborationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrder
    collabStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    dealDate?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paymentAmount?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    deliverables?: SortOrder
    deliverableDate?: SortOrderInput | SortOrder
    deliverableLink?: SortOrderInput | SortOrder
    deliverableStatus?: SortOrder
    deliverableNotes?: SortOrderInput | SortOrder
    collabNotes?: SortOrderInput | SortOrder
    _count?: CollaborationsCountOrderByAggregateInput
    _avg?: CollaborationsAvgOrderByAggregateInput
    _max?: CollaborationsMaxOrderByAggregateInput
    _min?: CollaborationsMinOrderByAggregateInput
    _sum?: CollaborationsSumOrderByAggregateInput
  }

  export type CollaborationsScalarWhereWithAggregatesInput = {
    AND?: CollaborationsScalarWhereWithAggregatesInput | CollaborationsScalarWhereWithAggregatesInput[]
    OR?: CollaborationsScalarWhereWithAggregatesInput[]
    NOT?: CollaborationsScalarWhereWithAggregatesInput | CollaborationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collaborations"> | string
    name?: StringNullableWithAggregatesFilter<"Collaborations"> | string | null
    type?: EnumCollabTypeWithAggregatesFilter<"Collaborations"> | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusWithAggregatesFilter<"Collaborations"> | $Enums.CollaborationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Collaborations"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Collaborations"> | Date | string | null
    dealDate?: DateTimeNullableWithAggregatesFilter<"Collaborations"> | Date | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Collaborations"> | $Enums.PaymentStatus
    paymentAmount?: IntNullableWithAggregatesFilter<"Collaborations"> | number | null
    paymentDate?: DateTimeNullableWithAggregatesFilter<"Collaborations"> | Date | string | null
    clientId?: StringWithAggregatesFilter<"Collaborations"> | string
    deliverables?: EnumCollaborationDeliverablesNullableListFilter<"Collaborations">
    deliverableDate?: DateTimeNullableWithAggregatesFilter<"Collaborations"> | Date | string | null
    deliverableLink?: StringNullableWithAggregatesFilter<"Collaborations"> | string | null
    deliverableStatus?: EnumDeliverableStatusWithAggregatesFilter<"Collaborations"> | $Enums.DeliverableStatus
    deliverableNotes?: StringNullableWithAggregatesFilter<"Collaborations"> | string | null
    collabNotes?: StringNullableWithAggregatesFilter<"Collaborations"> | string | null
  }

  export type UserCreateInput = {
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientDataCreateInput = {
    id?: string
    name: string
    instagram?: string | null
    createdAt?: Date | string
    clientContactId: string
    clientNotes?: string | null
    contactPeople?: ClientContactCreateNestedManyWithoutClientInput
    collaborations?: CollaborationsCreateNestedManyWithoutClientInput
  }

  export type ClientDataUncheckedCreateInput = {
    id?: string
    name: string
    instagram?: string | null
    createdAt?: Date | string
    clientContactId: string
    clientNotes?: string | null
    contactPeople?: ClientContactUncheckedCreateNestedManyWithoutClientInput
    collaborations?: CollaborationsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    contactPeople?: ClientContactUpdateManyWithoutClientNestedInput
    collaborations?: CollaborationsUpdateManyWithoutClientNestedInput
  }

  export type ClientDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    contactPeople?: ClientContactUncheckedUpdateManyWithoutClientNestedInput
    collaborations?: CollaborationsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientDataCreateManyInput = {
    id?: string
    name: string
    instagram?: string | null
    createdAt?: Date | string
    clientContactId: string
    clientNotes?: string | null
  }

  export type ClientDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientContactCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    contactNotes?: string | null
    gender?: $Enums.CsGender
    client: ClientDataCreateNestedOneWithoutContactPeopleInput
  }

  export type ClientContactUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    clientId: string
    contactNotes?: string | null
    gender?: $Enums.CsGender
  }

  export type ClientContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNotes?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumCsGenderFieldUpdateOperationsInput | $Enums.CsGender
    client?: ClientDataUpdateOneRequiredWithoutContactPeopleNestedInput
  }

  export type ClientContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    contactNotes?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumCsGenderFieldUpdateOperationsInput | $Enums.CsGender
  }

  export type ClientContactCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    clientId: string
    contactNotes?: string | null
    gender?: $Enums.CsGender
  }

  export type ClientContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNotes?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumCsGenderFieldUpdateOperationsInput | $Enums.CsGender
  }

  export type ClientContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    contactNotes?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumCsGenderFieldUpdateOperationsInput | $Enums.CsGender
  }

  export type CollaborationsCreateInput = {
    id?: string
    name?: string | null
    type: $Enums.CollabType
    collabStatus: $Enums.CollaborationStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dealDate?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentAmount?: number | null
    paymentDate?: Date | string | null
    deliverables?: CollaborationsCreatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: Date | string | null
    deliverableLink?: string | null
    deliverableStatus?: $Enums.DeliverableStatus
    deliverableNotes?: string | null
    collabNotes?: string | null
    client: ClientDataCreateNestedOneWithoutCollaborationsInput
  }

  export type CollaborationsUncheckedCreateInput = {
    id?: string
    name?: string | null
    type: $Enums.CollabType
    collabStatus: $Enums.CollaborationStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dealDate?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentAmount?: number | null
    paymentDate?: Date | string | null
    clientId: string
    deliverables?: CollaborationsCreatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: Date | string | null
    deliverableLink?: string | null
    deliverableStatus?: $Enums.DeliverableStatus
    deliverableNotes?: string | null
    collabNotes?: string | null
  }

  export type CollaborationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollabTypeFieldUpdateOperationsInput | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: CollaborationsUpdatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverableLink?: NullableStringFieldUpdateOperationsInput | string | null
    deliverableStatus?: EnumDeliverableStatusFieldUpdateOperationsInput | $Enums.DeliverableStatus
    deliverableNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collabNotes?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientDataUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type CollaborationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollabTypeFieldUpdateOperationsInput | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    deliverables?: CollaborationsUpdatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverableLink?: NullableStringFieldUpdateOperationsInput | string | null
    deliverableStatus?: EnumDeliverableStatusFieldUpdateOperationsInput | $Enums.DeliverableStatus
    deliverableNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collabNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationsCreateManyInput = {
    id?: string
    name?: string | null
    type: $Enums.CollabType
    collabStatus: $Enums.CollaborationStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dealDate?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentAmount?: number | null
    paymentDate?: Date | string | null
    clientId: string
    deliverables?: CollaborationsCreatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: Date | string | null
    deliverableLink?: string | null
    deliverableStatus?: $Enums.DeliverableStatus
    deliverableNotes?: string | null
    collabNotes?: string | null
  }

  export type CollaborationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollabTypeFieldUpdateOperationsInput | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: CollaborationsUpdatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverableLink?: NullableStringFieldUpdateOperationsInput | string | null
    deliverableStatus?: EnumDeliverableStatusFieldUpdateOperationsInput | $Enums.DeliverableStatus
    deliverableNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collabNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollabTypeFieldUpdateOperationsInput | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    deliverables?: CollaborationsUpdatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverableLink?: NullableStringFieldUpdateOperationsInput | string | null
    deliverableStatus?: EnumDeliverableStatusFieldUpdateOperationsInput | $Enums.DeliverableStatus
    deliverableNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collabNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientContactListRelationFilter = {
    every?: ClientContactWhereInput
    some?: ClientContactWhereInput
    none?: ClientContactWhereInput
  }

  export type CollaborationsListRelationFilter = {
    every?: CollaborationsWhereInput
    some?: CollaborationsWhereInput
    none?: CollaborationsWhereInput
  }

  export type ClientContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaborationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instagram?: SortOrder
    createdAt?: SortOrder
    clientContactId?: SortOrder
    clientNotes?: SortOrder
  }

  export type ClientDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instagram?: SortOrder
    createdAt?: SortOrder
    clientContactId?: SortOrder
    clientNotes?: SortOrder
  }

  export type ClientDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instagram?: SortOrder
    createdAt?: SortOrder
    clientContactId?: SortOrder
    clientNotes?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCsGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.CsGender | EnumCsGenderFieldRefInput<$PrismaModel>
    in?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumCsGenderFilter<$PrismaModel> | $Enums.CsGender
  }

  export type ClientDataScalarRelationFilter = {
    is?: ClientDataWhereInput
    isNot?: ClientDataWhereInput
  }

  export type ClientContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    contactNotes?: SortOrder
    gender?: SortOrder
  }

  export type ClientContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    contactNotes?: SortOrder
    gender?: SortOrder
  }

  export type ClientContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    contactNotes?: SortOrder
    gender?: SortOrder
  }

  export type EnumCsGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CsGender | EnumCsGenderFieldRefInput<$PrismaModel>
    in?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumCsGenderWithAggregatesFilter<$PrismaModel> | $Enums.CsGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCsGenderFilter<$PrismaModel>
    _max?: NestedEnumCsGenderFilter<$PrismaModel>
  }

  export type EnumCollabTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabType | EnumCollabTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabTypeFilter<$PrismaModel> | $Enums.CollabType
  }

  export type EnumCollaborationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusFilter<$PrismaModel> | $Enums.CollaborationStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCollaborationDeliverablesNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationDeliverables[] | ListEnumCollaborationDeliverablesFieldRefInput<$PrismaModel> | null
    has?: $Enums.CollaborationDeliverables | EnumCollaborationDeliverablesFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.CollaborationDeliverables[] | ListEnumCollaborationDeliverablesFieldRefInput<$PrismaModel>
    hasSome?: $Enums.CollaborationDeliverables[] | ListEnumCollaborationDeliverablesFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDeliverableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliverableStatus | EnumDeliverableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliverableStatusFilter<$PrismaModel> | $Enums.DeliverableStatus
  }

  export type CollaborationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    collabStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dealDate?: SortOrder
    paymentStatus?: SortOrder
    paymentAmount?: SortOrder
    paymentDate?: SortOrder
    clientId?: SortOrder
    deliverables?: SortOrder
    deliverableDate?: SortOrder
    deliverableLink?: SortOrder
    deliverableStatus?: SortOrder
    deliverableNotes?: SortOrder
    collabNotes?: SortOrder
  }

  export type CollaborationsAvgOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type CollaborationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    collabStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dealDate?: SortOrder
    paymentStatus?: SortOrder
    paymentAmount?: SortOrder
    paymentDate?: SortOrder
    clientId?: SortOrder
    deliverableDate?: SortOrder
    deliverableLink?: SortOrder
    deliverableStatus?: SortOrder
    deliverableNotes?: SortOrder
    collabNotes?: SortOrder
  }

  export type CollaborationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    collabStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dealDate?: SortOrder
    paymentStatus?: SortOrder
    paymentAmount?: SortOrder
    paymentDate?: SortOrder
    clientId?: SortOrder
    deliverableDate?: SortOrder
    deliverableLink?: SortOrder
    deliverableStatus?: SortOrder
    deliverableNotes?: SortOrder
    collabNotes?: SortOrder
  }

  export type CollaborationsSumOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type EnumCollabTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabType | EnumCollabTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollabType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollabTypeFilter<$PrismaModel>
    _max?: NestedEnumCollabTypeFilter<$PrismaModel>
  }

  export type EnumCollaborationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaborationStatusFilter<$PrismaModel>
    _max?: NestedEnumCollaborationStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumDeliverableStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliverableStatus | EnumDeliverableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliverableStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliverableStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliverableStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliverableStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientContactCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientContactCreateWithoutClientInput, ClientContactUncheckedCreateWithoutClientInput> | ClientContactCreateWithoutClientInput[] | ClientContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientContactCreateOrConnectWithoutClientInput | ClientContactCreateOrConnectWithoutClientInput[]
    createMany?: ClientContactCreateManyClientInputEnvelope
    connect?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
  }

  export type CollaborationsCreateNestedManyWithoutClientInput = {
    create?: XOR<CollaborationsCreateWithoutClientInput, CollaborationsUncheckedCreateWithoutClientInput> | CollaborationsCreateWithoutClientInput[] | CollaborationsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CollaborationsCreateOrConnectWithoutClientInput | CollaborationsCreateOrConnectWithoutClientInput[]
    createMany?: CollaborationsCreateManyClientInputEnvelope
    connect?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
  }

  export type ClientContactUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientContactCreateWithoutClientInput, ClientContactUncheckedCreateWithoutClientInput> | ClientContactCreateWithoutClientInput[] | ClientContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientContactCreateOrConnectWithoutClientInput | ClientContactCreateOrConnectWithoutClientInput[]
    createMany?: ClientContactCreateManyClientInputEnvelope
    connect?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
  }

  export type CollaborationsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CollaborationsCreateWithoutClientInput, CollaborationsUncheckedCreateWithoutClientInput> | CollaborationsCreateWithoutClientInput[] | CollaborationsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CollaborationsCreateOrConnectWithoutClientInput | CollaborationsCreateOrConnectWithoutClientInput[]
    createMany?: CollaborationsCreateManyClientInputEnvelope
    connect?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientContactUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientContactCreateWithoutClientInput, ClientContactUncheckedCreateWithoutClientInput> | ClientContactCreateWithoutClientInput[] | ClientContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientContactCreateOrConnectWithoutClientInput | ClientContactCreateOrConnectWithoutClientInput[]
    upsert?: ClientContactUpsertWithWhereUniqueWithoutClientInput | ClientContactUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientContactCreateManyClientInputEnvelope
    set?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    disconnect?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    delete?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    connect?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    update?: ClientContactUpdateWithWhereUniqueWithoutClientInput | ClientContactUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientContactUpdateManyWithWhereWithoutClientInput | ClientContactUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientContactScalarWhereInput | ClientContactScalarWhereInput[]
  }

  export type CollaborationsUpdateManyWithoutClientNestedInput = {
    create?: XOR<CollaborationsCreateWithoutClientInput, CollaborationsUncheckedCreateWithoutClientInput> | CollaborationsCreateWithoutClientInput[] | CollaborationsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CollaborationsCreateOrConnectWithoutClientInput | CollaborationsCreateOrConnectWithoutClientInput[]
    upsert?: CollaborationsUpsertWithWhereUniqueWithoutClientInput | CollaborationsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CollaborationsCreateManyClientInputEnvelope
    set?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    disconnect?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    delete?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    connect?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    update?: CollaborationsUpdateWithWhereUniqueWithoutClientInput | CollaborationsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CollaborationsUpdateManyWithWhereWithoutClientInput | CollaborationsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CollaborationsScalarWhereInput | CollaborationsScalarWhereInput[]
  }

  export type ClientContactUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientContactCreateWithoutClientInput, ClientContactUncheckedCreateWithoutClientInput> | ClientContactCreateWithoutClientInput[] | ClientContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientContactCreateOrConnectWithoutClientInput | ClientContactCreateOrConnectWithoutClientInput[]
    upsert?: ClientContactUpsertWithWhereUniqueWithoutClientInput | ClientContactUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientContactCreateManyClientInputEnvelope
    set?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    disconnect?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    delete?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    connect?: ClientContactWhereUniqueInput | ClientContactWhereUniqueInput[]
    update?: ClientContactUpdateWithWhereUniqueWithoutClientInput | ClientContactUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientContactUpdateManyWithWhereWithoutClientInput | ClientContactUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientContactScalarWhereInput | ClientContactScalarWhereInput[]
  }

  export type CollaborationsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CollaborationsCreateWithoutClientInput, CollaborationsUncheckedCreateWithoutClientInput> | CollaborationsCreateWithoutClientInput[] | CollaborationsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CollaborationsCreateOrConnectWithoutClientInput | CollaborationsCreateOrConnectWithoutClientInput[]
    upsert?: CollaborationsUpsertWithWhereUniqueWithoutClientInput | CollaborationsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CollaborationsCreateManyClientInputEnvelope
    set?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    disconnect?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    delete?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    connect?: CollaborationsWhereUniqueInput | CollaborationsWhereUniqueInput[]
    update?: CollaborationsUpdateWithWhereUniqueWithoutClientInput | CollaborationsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CollaborationsUpdateManyWithWhereWithoutClientInput | CollaborationsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CollaborationsScalarWhereInput | CollaborationsScalarWhereInput[]
  }

  export type ClientDataCreateNestedOneWithoutContactPeopleInput = {
    create?: XOR<ClientDataCreateWithoutContactPeopleInput, ClientDataUncheckedCreateWithoutContactPeopleInput>
    connectOrCreate?: ClientDataCreateOrConnectWithoutContactPeopleInput
    connect?: ClientDataWhereUniqueInput
  }

  export type EnumCsGenderFieldUpdateOperationsInput = {
    set?: $Enums.CsGender
  }

  export type ClientDataUpdateOneRequiredWithoutContactPeopleNestedInput = {
    create?: XOR<ClientDataCreateWithoutContactPeopleInput, ClientDataUncheckedCreateWithoutContactPeopleInput>
    connectOrCreate?: ClientDataCreateOrConnectWithoutContactPeopleInput
    upsert?: ClientDataUpsertWithoutContactPeopleInput
    connect?: ClientDataWhereUniqueInput
    update?: XOR<XOR<ClientDataUpdateToOneWithWhereWithoutContactPeopleInput, ClientDataUpdateWithoutContactPeopleInput>, ClientDataUncheckedUpdateWithoutContactPeopleInput>
  }

  export type CollaborationsCreatedeliverablesInput = {
    set: $Enums.CollaborationDeliverables[]
  }

  export type ClientDataCreateNestedOneWithoutCollaborationsInput = {
    create?: XOR<ClientDataCreateWithoutCollaborationsInput, ClientDataUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: ClientDataCreateOrConnectWithoutCollaborationsInput
    connect?: ClientDataWhereUniqueInput
  }

  export type EnumCollabTypeFieldUpdateOperationsInput = {
    set?: $Enums.CollabType
  }

  export type EnumCollaborationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CollaborationStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollaborationsUpdatedeliverablesInput = {
    set?: $Enums.CollaborationDeliverables[]
    push?: $Enums.CollaborationDeliverables | $Enums.CollaborationDeliverables[]
  }

  export type EnumDeliverableStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliverableStatus
  }

  export type ClientDataUpdateOneRequiredWithoutCollaborationsNestedInput = {
    create?: XOR<ClientDataCreateWithoutCollaborationsInput, ClientDataUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: ClientDataCreateOrConnectWithoutCollaborationsInput
    upsert?: ClientDataUpsertWithoutCollaborationsInput
    connect?: ClientDataWhereUniqueInput
    update?: XOR<XOR<ClientDataUpdateToOneWithWhereWithoutCollaborationsInput, ClientDataUpdateWithoutCollaborationsInput>, ClientDataUncheckedUpdateWithoutCollaborationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCsGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.CsGender | EnumCsGenderFieldRefInput<$PrismaModel>
    in?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumCsGenderFilter<$PrismaModel> | $Enums.CsGender
  }

  export type NestedEnumCsGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CsGender | EnumCsGenderFieldRefInput<$PrismaModel>
    in?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CsGender[] | ListEnumCsGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumCsGenderWithAggregatesFilter<$PrismaModel> | $Enums.CsGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCsGenderFilter<$PrismaModel>
    _max?: NestedEnumCsGenderFilter<$PrismaModel>
  }

  export type NestedEnumCollabTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabType | EnumCollabTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabTypeFilter<$PrismaModel> | $Enums.CollabType
  }

  export type NestedEnumCollaborationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusFilter<$PrismaModel> | $Enums.CollaborationStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumDeliverableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliverableStatus | EnumDeliverableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliverableStatusFilter<$PrismaModel> | $Enums.DeliverableStatus
  }

  export type NestedEnumCollabTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollabType | EnumCollabTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollabType[] | ListEnumCollabTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCollabTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollabType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollabTypeFilter<$PrismaModel>
    _max?: NestedEnumCollabTypeFilter<$PrismaModel>
  }

  export type NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaborationStatusFilter<$PrismaModel>
    _max?: NestedEnumCollaborationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDeliverableStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliverableStatus | EnumDeliverableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliverableStatus[] | ListEnumDeliverableStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliverableStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliverableStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliverableStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliverableStatusFilter<$PrismaModel>
  }

  export type ClientContactCreateWithoutClientInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    contactNotes?: string | null
    gender?: $Enums.CsGender
  }

  export type ClientContactUncheckedCreateWithoutClientInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    contactNotes?: string | null
    gender?: $Enums.CsGender
  }

  export type ClientContactCreateOrConnectWithoutClientInput = {
    where: ClientContactWhereUniqueInput
    create: XOR<ClientContactCreateWithoutClientInput, ClientContactUncheckedCreateWithoutClientInput>
  }

  export type ClientContactCreateManyClientInputEnvelope = {
    data: ClientContactCreateManyClientInput | ClientContactCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CollaborationsCreateWithoutClientInput = {
    id?: string
    name?: string | null
    type: $Enums.CollabType
    collabStatus: $Enums.CollaborationStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dealDate?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentAmount?: number | null
    paymentDate?: Date | string | null
    deliverables?: CollaborationsCreatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: Date | string | null
    deliverableLink?: string | null
    deliverableStatus?: $Enums.DeliverableStatus
    deliverableNotes?: string | null
    collabNotes?: string | null
  }

  export type CollaborationsUncheckedCreateWithoutClientInput = {
    id?: string
    name?: string | null
    type: $Enums.CollabType
    collabStatus: $Enums.CollaborationStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dealDate?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentAmount?: number | null
    paymentDate?: Date | string | null
    deliverables?: CollaborationsCreatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: Date | string | null
    deliverableLink?: string | null
    deliverableStatus?: $Enums.DeliverableStatus
    deliverableNotes?: string | null
    collabNotes?: string | null
  }

  export type CollaborationsCreateOrConnectWithoutClientInput = {
    where: CollaborationsWhereUniqueInput
    create: XOR<CollaborationsCreateWithoutClientInput, CollaborationsUncheckedCreateWithoutClientInput>
  }

  export type CollaborationsCreateManyClientInputEnvelope = {
    data: CollaborationsCreateManyClientInput | CollaborationsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientContactUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientContactWhereUniqueInput
    update: XOR<ClientContactUpdateWithoutClientInput, ClientContactUncheckedUpdateWithoutClientInput>
    create: XOR<ClientContactCreateWithoutClientInput, ClientContactUncheckedCreateWithoutClientInput>
  }

  export type ClientContactUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientContactWhereUniqueInput
    data: XOR<ClientContactUpdateWithoutClientInput, ClientContactUncheckedUpdateWithoutClientInput>
  }

  export type ClientContactUpdateManyWithWhereWithoutClientInput = {
    where: ClientContactScalarWhereInput
    data: XOR<ClientContactUpdateManyMutationInput, ClientContactUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientContactScalarWhereInput = {
    AND?: ClientContactScalarWhereInput | ClientContactScalarWhereInput[]
    OR?: ClientContactScalarWhereInput[]
    NOT?: ClientContactScalarWhereInput | ClientContactScalarWhereInput[]
    id?: StringFilter<"ClientContact"> | string
    name?: StringNullableFilter<"ClientContact"> | string | null
    email?: StringNullableFilter<"ClientContact"> | string | null
    phone?: StringNullableFilter<"ClientContact"> | string | null
    createdAt?: DateTimeFilter<"ClientContact"> | Date | string
    clientId?: StringFilter<"ClientContact"> | string
    contactNotes?: StringNullableFilter<"ClientContact"> | string | null
    gender?: EnumCsGenderFilter<"ClientContact"> | $Enums.CsGender
  }

  export type CollaborationsUpsertWithWhereUniqueWithoutClientInput = {
    where: CollaborationsWhereUniqueInput
    update: XOR<CollaborationsUpdateWithoutClientInput, CollaborationsUncheckedUpdateWithoutClientInput>
    create: XOR<CollaborationsCreateWithoutClientInput, CollaborationsUncheckedCreateWithoutClientInput>
  }

  export type CollaborationsUpdateWithWhereUniqueWithoutClientInput = {
    where: CollaborationsWhereUniqueInput
    data: XOR<CollaborationsUpdateWithoutClientInput, CollaborationsUncheckedUpdateWithoutClientInput>
  }

  export type CollaborationsUpdateManyWithWhereWithoutClientInput = {
    where: CollaborationsScalarWhereInput
    data: XOR<CollaborationsUpdateManyMutationInput, CollaborationsUncheckedUpdateManyWithoutClientInput>
  }

  export type CollaborationsScalarWhereInput = {
    AND?: CollaborationsScalarWhereInput | CollaborationsScalarWhereInput[]
    OR?: CollaborationsScalarWhereInput[]
    NOT?: CollaborationsScalarWhereInput | CollaborationsScalarWhereInput[]
    id?: StringFilter<"Collaborations"> | string
    name?: StringNullableFilter<"Collaborations"> | string | null
    type?: EnumCollabTypeFilter<"Collaborations"> | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFilter<"Collaborations"> | $Enums.CollaborationStatus
    createdAt?: DateTimeFilter<"Collaborations"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    dealDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Collaborations"> | $Enums.PaymentStatus
    paymentAmount?: IntNullableFilter<"Collaborations"> | number | null
    paymentDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    clientId?: StringFilter<"Collaborations"> | string
    deliverables?: EnumCollaborationDeliverablesNullableListFilter<"Collaborations">
    deliverableDate?: DateTimeNullableFilter<"Collaborations"> | Date | string | null
    deliverableLink?: StringNullableFilter<"Collaborations"> | string | null
    deliverableStatus?: EnumDeliverableStatusFilter<"Collaborations"> | $Enums.DeliverableStatus
    deliverableNotes?: StringNullableFilter<"Collaborations"> | string | null
    collabNotes?: StringNullableFilter<"Collaborations"> | string | null
  }

  export type ClientDataCreateWithoutContactPeopleInput = {
    id?: string
    name: string
    instagram?: string | null
    createdAt?: Date | string
    clientContactId: string
    clientNotes?: string | null
    collaborations?: CollaborationsCreateNestedManyWithoutClientInput
  }

  export type ClientDataUncheckedCreateWithoutContactPeopleInput = {
    id?: string
    name: string
    instagram?: string | null
    createdAt?: Date | string
    clientContactId: string
    clientNotes?: string | null
    collaborations?: CollaborationsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientDataCreateOrConnectWithoutContactPeopleInput = {
    where: ClientDataWhereUniqueInput
    create: XOR<ClientDataCreateWithoutContactPeopleInput, ClientDataUncheckedCreateWithoutContactPeopleInput>
  }

  export type ClientDataUpsertWithoutContactPeopleInput = {
    update: XOR<ClientDataUpdateWithoutContactPeopleInput, ClientDataUncheckedUpdateWithoutContactPeopleInput>
    create: XOR<ClientDataCreateWithoutContactPeopleInput, ClientDataUncheckedCreateWithoutContactPeopleInput>
    where?: ClientDataWhereInput
  }

  export type ClientDataUpdateToOneWithWhereWithoutContactPeopleInput = {
    where?: ClientDataWhereInput
    data: XOR<ClientDataUpdateWithoutContactPeopleInput, ClientDataUncheckedUpdateWithoutContactPeopleInput>
  }

  export type ClientDataUpdateWithoutContactPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collaborations?: CollaborationsUpdateManyWithoutClientNestedInput
  }

  export type ClientDataUncheckedUpdateWithoutContactPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collaborations?: CollaborationsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientDataCreateWithoutCollaborationsInput = {
    id?: string
    name: string
    instagram?: string | null
    createdAt?: Date | string
    clientContactId: string
    clientNotes?: string | null
    contactPeople?: ClientContactCreateNestedManyWithoutClientInput
  }

  export type ClientDataUncheckedCreateWithoutCollaborationsInput = {
    id?: string
    name: string
    instagram?: string | null
    createdAt?: Date | string
    clientContactId: string
    clientNotes?: string | null
    contactPeople?: ClientContactUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientDataCreateOrConnectWithoutCollaborationsInput = {
    where: ClientDataWhereUniqueInput
    create: XOR<ClientDataCreateWithoutCollaborationsInput, ClientDataUncheckedCreateWithoutCollaborationsInput>
  }

  export type ClientDataUpsertWithoutCollaborationsInput = {
    update: XOR<ClientDataUpdateWithoutCollaborationsInput, ClientDataUncheckedUpdateWithoutCollaborationsInput>
    create: XOR<ClientDataCreateWithoutCollaborationsInput, ClientDataUncheckedCreateWithoutCollaborationsInput>
    where?: ClientDataWhereInput
  }

  export type ClientDataUpdateToOneWithWhereWithoutCollaborationsInput = {
    where?: ClientDataWhereInput
    data: XOR<ClientDataUpdateWithoutCollaborationsInput, ClientDataUncheckedUpdateWithoutCollaborationsInput>
  }

  export type ClientDataUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    contactPeople?: ClientContactUpdateManyWithoutClientNestedInput
  }

  export type ClientDataUncheckedUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientContactId?: StringFieldUpdateOperationsInput | string
    clientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    contactPeople?: ClientContactUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientContactCreateManyClientInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    contactNotes?: string | null
    gender?: $Enums.CsGender
  }

  export type CollaborationsCreateManyClientInput = {
    id?: string
    name?: string | null
    type: $Enums.CollabType
    collabStatus: $Enums.CollaborationStatus
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dealDate?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paymentAmount?: number | null
    paymentDate?: Date | string | null
    deliverables?: CollaborationsCreatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: Date | string | null
    deliverableLink?: string | null
    deliverableStatus?: $Enums.DeliverableStatus
    deliverableNotes?: string | null
    collabNotes?: string | null
  }

  export type ClientContactUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNotes?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumCsGenderFieldUpdateOperationsInput | $Enums.CsGender
  }

  export type ClientContactUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNotes?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumCsGenderFieldUpdateOperationsInput | $Enums.CsGender
  }

  export type ClientContactUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNotes?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumCsGenderFieldUpdateOperationsInput | $Enums.CsGender
  }

  export type CollaborationsUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollabTypeFieldUpdateOperationsInput | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: CollaborationsUpdatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverableLink?: NullableStringFieldUpdateOperationsInput | string | null
    deliverableStatus?: EnumDeliverableStatusFieldUpdateOperationsInput | $Enums.DeliverableStatus
    deliverableNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collabNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationsUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollabTypeFieldUpdateOperationsInput | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: CollaborationsUpdatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverableLink?: NullableStringFieldUpdateOperationsInput | string | null
    deliverableStatus?: EnumDeliverableStatusFieldUpdateOperationsInput | $Enums.DeliverableStatus
    deliverableNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collabNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationsUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCollabTypeFieldUpdateOperationsInput | $Enums.CollabType
    collabStatus?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: CollaborationsUpdatedeliverablesInput | $Enums.CollaborationDeliverables[]
    deliverableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverableLink?: NullableStringFieldUpdateOperationsInput | string | null
    deliverableStatus?: EnumDeliverableStatusFieldUpdateOperationsInput | $Enums.DeliverableStatus
    deliverableNotes?: NullableStringFieldUpdateOperationsInput | string | null
    collabNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}