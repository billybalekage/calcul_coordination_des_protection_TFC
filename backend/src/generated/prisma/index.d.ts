
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Building
 * 
 */
export type Building = $Result.DefaultSelection<Prisma.$BuildingPayload>
/**
 * Model Circuit
 * 
 */
export type Circuit = $Result.DefaultSelection<Prisma.$CircuitPayload>
/**
 * Model Protection
 * 
 */
export type Protection = $Result.DefaultSelection<Prisma.$ProtectionPayload>
/**
 * Model Calculation
 * 
 */
export type Calculation = $Result.DefaultSelection<Prisma.$CalculationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  DRAFT: 'DRAFT',
  IN_PROGRESS: 'IN_PROGRESS',
  REVIEW: 'REVIEW',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const BuildingType: {
  RESIDENTIAL: 'RESIDENTIAL',
  COMMERCIAL: 'COMMERCIAL',
  INDUSTRIAL: 'INDUSTRIAL',
  MIXED_USE: 'MIXED_USE'
};

export type BuildingType = (typeof BuildingType)[keyof typeof BuildingType]


export const CircuitCategory: {
  LIGHTING: 'LIGHTING',
  SOCKETS: 'SOCKETS',
  HVAC: 'HVAC',
  WATER_HEATER: 'WATER_HEATER',
  APPLIANCE: 'APPLIANCE',
  OTHER: 'OTHER'
};

export type CircuitCategory = (typeof CircuitCategory)[keyof typeof CircuitCategory]


export const ProtectionType: {
  MCB: 'MCB',
  RCCB: 'RCCB',
  RCBO: 'RCBO',
  FUSE: 'FUSE',
  MAIN_BREAKER: 'MAIN_BREAKER',
  SPD: 'SPD'
};

export type ProtectionType = (typeof ProtectionType)[keyof typeof ProtectionType]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type BuildingType = $Enums.BuildingType

export const BuildingType: typeof $Enums.BuildingType

export type CircuitCategory = $Enums.CircuitCategory

export const CircuitCategory: typeof $Enums.CircuitCategory

export type ProtectionType = $Enums.ProtectionType

export const ProtectionType: typeof $Enums.ProtectionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circuit`: Exposes CRUD operations for the **Circuit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circuits
    * const circuits = await prisma.circuit.findMany()
    * ```
    */
  get circuit(): Prisma.CircuitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.protection`: Exposes CRUD operations for the **Protection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Protections
    * const protections = await prisma.protection.findMany()
    * ```
    */
  get protection(): Prisma.ProtectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calculation`: Exposes CRUD operations for the **Calculation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calculations
    * const calculations = await prisma.calculation.findMany()
    * ```
    */
  get calculation(): Prisma.CalculationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Project: 'Project',
    Building: 'Building',
    Circuit: 'Circuit',
    Protection: 'Protection',
    Calculation: 'Calculation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "project" | "building" | "circuit" | "protection" | "calculation"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Building: {
        payload: Prisma.$BuildingPayload<ExtArgs>
        fields: Prisma.BuildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findFirst: {
            args: Prisma.BuildingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findMany: {
            args: Prisma.BuildingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          create: {
            args: Prisma.BuildingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          createMany: {
            args: Prisma.BuildingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          delete: {
            args: Prisma.BuildingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          update: {
            args: Prisma.BuildingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          deleteMany: {
            args: Prisma.BuildingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          upsert: {
            args: Prisma.BuildingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.BuildingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      Circuit: {
        payload: Prisma.$CircuitPayload<ExtArgs>
        fields: Prisma.CircuitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircuitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircuitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          findFirst: {
            args: Prisma.CircuitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircuitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          findMany: {
            args: Prisma.CircuitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>[]
          }
          create: {
            args: Prisma.CircuitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          createMany: {
            args: Prisma.CircuitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircuitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>[]
          }
          delete: {
            args: Prisma.CircuitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          update: {
            args: Prisma.CircuitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          deleteMany: {
            args: Prisma.CircuitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircuitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircuitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>[]
          }
          upsert: {
            args: Prisma.CircuitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          aggregate: {
            args: Prisma.CircuitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircuit>
          }
          groupBy: {
            args: Prisma.CircuitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircuitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircuitCountArgs<ExtArgs>
            result: $Utils.Optional<CircuitCountAggregateOutputType> | number
          }
        }
      }
      Protection: {
        payload: Prisma.$ProtectionPayload<ExtArgs>
        fields: Prisma.ProtectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProtectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProtectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          findFirst: {
            args: Prisma.ProtectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProtectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          findMany: {
            args: Prisma.ProtectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>[]
          }
          create: {
            args: Prisma.ProtectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          createMany: {
            args: Prisma.ProtectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProtectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>[]
          }
          delete: {
            args: Prisma.ProtectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          update: {
            args: Prisma.ProtectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          deleteMany: {
            args: Prisma.ProtectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProtectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProtectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>[]
          }
          upsert: {
            args: Prisma.ProtectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          aggregate: {
            args: Prisma.ProtectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProtection>
          }
          groupBy: {
            args: Prisma.ProtectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProtectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProtectionCountArgs<ExtArgs>
            result: $Utils.Optional<ProtectionCountAggregateOutputType> | number
          }
        }
      }
      Calculation: {
        payload: Prisma.$CalculationPayload<ExtArgs>
        fields: Prisma.CalculationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalculationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalculationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>
          }
          findFirst: {
            args: Prisma.CalculationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalculationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>
          }
          findMany: {
            args: Prisma.CalculationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>[]
          }
          create: {
            args: Prisma.CalculationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>
          }
          createMany: {
            args: Prisma.CalculationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalculationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>[]
          }
          delete: {
            args: Prisma.CalculationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>
          }
          update: {
            args: Prisma.CalculationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>
          }
          deleteMany: {
            args: Prisma.CalculationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalculationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalculationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>[]
          }
          upsert: {
            args: Prisma.CalculationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationPayload>
          }
          aggregate: {
            args: Prisma.CalculationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalculation>
          }
          groupBy: {
            args: Prisma.CalculationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalculationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalculationCountArgs<ExtArgs>
            result: $Utils.Optional<CalculationCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    project?: ProjectOmit
    building?: BuildingOmit
    circuit?: CircuitOmit
    protection?: ProtectionOmit
    calculation?: CalculationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    projects: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    calculations: number
    circuits: number
    protections: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculations?: boolean | ProjectCountOutputTypeCountCalculationsArgs
    circuits?: boolean | ProjectCountOutputTypeCountCircuitsArgs
    protections?: boolean | ProjectCountOutputTypeCountProtectionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCircuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircuitWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProtectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtectionWhereInput
  }


  /**
   * Count Type ProtectionCountOutputType
   */

  export type ProtectionCountOutputType = {
    circuits: number
  }

  export type ProtectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circuits?: boolean | ProtectionCountOutputTypeCountCircuitsArgs
  }

  // Custom InputTypes
  /**
   * ProtectionCountOutputType without action
   */
  export type ProtectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtectionCountOutputType
     */
    select?: ProtectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProtectionCountOutputType without action
   */
  export type ProtectionCountOutputTypeCountCircuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircuitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    photo: string | null
    password: string | null
    isTwoFactorEnabled: boolean | null
    twofactorSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    photo: string | null
    password: string | null
    isTwoFactorEnabled: boolean | null
    twofactorSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    photo: number
    password: number
    isTwoFactorEnabled: number
    twofactorSecret: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    photo?: true
    password?: true
    isTwoFactorEnabled?: true
    twofactorSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    photo?: true
    password?: true
    isTwoFactorEnabled?: true
    twofactorSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    photo?: true
    password?: true
    isTwoFactorEnabled?: true
    twofactorSecret?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    photo: string | null
    password: string | null
    isTwoFactorEnabled: boolean
    twofactorSecret: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    photo?: boolean
    password?: boolean
    isTwoFactorEnabled?: boolean
    twofactorSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    photo?: boolean
    password?: boolean
    isTwoFactorEnabled?: boolean
    twofactorSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    photo?: boolean
    password?: boolean
    isTwoFactorEnabled?: boolean
    twofactorSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    photo?: boolean
    password?: boolean
    isTwoFactorEnabled?: boolean
    twofactorSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "photo" | "password" | "isTwoFactorEnabled" | "twofactorSecret" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      photo: string | null
      password: string | null
      isTwoFactorEnabled: boolean
      twofactorSecret: string | null
      createdAt: Date
      updatedAt: Date
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly photo: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly twofactorSecret: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_Token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_Token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_Token: number
    access_token: number
    expires_at: number
    token_type: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_Token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_Token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_Token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_Token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_Token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_Token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_Token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_Token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_Token" | "access_token" | "expires_at" | "token_type" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_Token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_Token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    session: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    session: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    session: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    session?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    session?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    session?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    session: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    session?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      session: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly session: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    reference: string | null
    customerName: string | null
    siteAddress: string | null
    status: $Enums.ProjectStatus | null
    objective: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    reference: string | null
    customerName: string | null
    siteAddress: string | null
    status: $Enums.ProjectStatus | null
    objective: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    reference: number
    customerName: number
    siteAddress: number
    status: number
    objective: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    reference?: true
    customerName?: true
    siteAddress?: true
    status?: true
    objective?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    reference?: true
    customerName?: true
    siteAddress?: true
    status?: true
    objective?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    reference?: true
    customerName?: true
    siteAddress?: true
    status?: true
    objective?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    reference: string | null
    customerName: string | null
    siteAddress: string | null
    status: $Enums.ProjectStatus
    objective: string | null
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    reference?: boolean
    customerName?: boolean
    siteAddress?: boolean
    status?: boolean
    objective?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    building?: boolean | Project$buildingArgs<ExtArgs>
    calculations?: boolean | Project$calculationsArgs<ExtArgs>
    circuits?: boolean | Project$circuitsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    protections?: boolean | Project$protectionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    reference?: boolean
    customerName?: boolean
    siteAddress?: boolean
    status?: boolean
    objective?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    reference?: boolean
    customerName?: boolean
    siteAddress?: boolean
    status?: boolean
    objective?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    reference?: boolean
    customerName?: boolean
    siteAddress?: boolean
    status?: boolean
    objective?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "reference" | "customerName" | "siteAddress" | "status" | "objective" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | Project$buildingArgs<ExtArgs>
    calculations?: boolean | Project$calculationsArgs<ExtArgs>
    circuits?: boolean | Project$circuitsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    protections?: boolean | Project$protectionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      building: Prisma.$BuildingPayload<ExtArgs> | null
      calculations: Prisma.$CalculationPayload<ExtArgs>[]
      circuits: Prisma.$CircuitPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
      protections: Prisma.$ProtectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      reference: string | null
      customerName: string | null
      siteAddress: string | null
      status: $Enums.ProjectStatus
      objective: string | null
      createdAt: Date
      updatedAt: Date
      ownerId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    building<T extends Project$buildingArgs<ExtArgs> = {}>(args?: Subset<T, Project$buildingArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    calculations<T extends Project$calculationsArgs<ExtArgs> = {}>(args?: Subset<T, Project$calculationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    circuits<T extends Project$circuitsArgs<ExtArgs> = {}>(args?: Subset<T, Project$circuitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    protections<T extends Project$protectionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$protectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly reference: FieldRef<"Project", 'String'>
    readonly customerName: FieldRef<"Project", 'String'>
    readonly siteAddress: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly objective: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly ownerId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.building
   */
  export type Project$buildingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    where?: BuildingWhereInput
  }

  /**
   * Project.calculations
   */
  export type Project$calculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    where?: CalculationWhereInput
    orderBy?: CalculationOrderByWithRelationInput | CalculationOrderByWithRelationInput[]
    cursor?: CalculationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalculationScalarFieldEnum | CalculationScalarFieldEnum[]
  }

  /**
   * Project.circuits
   */
  export type Project$circuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    where?: CircuitWhereInput
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    cursor?: CircuitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Project.protections
   */
  export type Project$protectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    where?: ProtectionWhereInput
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    cursor?: ProtectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    surfaceArea: number | null
    numberOfRooms: number | null
    phases: number | null
  }

  export type BuildingSumAggregateOutputType = {
    surfaceArea: number | null
    numberOfRooms: number | null
    phases: number | null
  }

  export type BuildingMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    surfaceArea: number | null
    numberOfRooms: number | null
    supplyVoltage: string | null
    phases: number | null
    buildingType: $Enums.BuildingType | null
    usage: string | null
    comment: string | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    surfaceArea: number | null
    numberOfRooms: number | null
    supplyVoltage: string | null
    phases: number | null
    buildingType: $Enums.BuildingType | null
    usage: string | null
    comment: string | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    projectId: number
    surfaceArea: number
    numberOfRooms: number
    supplyVoltage: number
    phases: number
    buildingType: number
    usage: number
    comment: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    surfaceArea?: true
    numberOfRooms?: true
    phases?: true
  }

  export type BuildingSumAggregateInputType = {
    surfaceArea?: true
    numberOfRooms?: true
    phases?: true
  }

  export type BuildingMinAggregateInputType = {
    id?: true
    projectId?: true
    surfaceArea?: true
    numberOfRooms?: true
    supplyVoltage?: true
    phases?: true
    buildingType?: true
    usage?: true
    comment?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    projectId?: true
    surfaceArea?: true
    numberOfRooms?: true
    supplyVoltage?: true
    phases?: true
    buildingType?: true
    usage?: true
    comment?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    projectId?: true
    surfaceArea?: true
    numberOfRooms?: true
    supplyVoltage?: true
    phases?: true
    buildingType?: true
    usage?: true
    comment?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithAggregationInput | BuildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    id: string
    projectId: string
    surfaceArea: number
    numberOfRooms: number
    supplyVoltage: string
    phases: number
    buildingType: $Enums.BuildingType
    usage: string | null
    comment: string | null
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    surfaceArea?: boolean
    numberOfRooms?: boolean
    supplyVoltage?: boolean
    phases?: boolean
    buildingType?: boolean
    usage?: boolean
    comment?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    surfaceArea?: boolean
    numberOfRooms?: boolean
    supplyVoltage?: boolean
    phases?: boolean
    buildingType?: boolean
    usage?: boolean
    comment?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    surfaceArea?: boolean
    numberOfRooms?: boolean
    supplyVoltage?: boolean
    phases?: boolean
    buildingType?: boolean
    usage?: boolean
    comment?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectScalar = {
    id?: boolean
    projectId?: boolean
    surfaceArea?: boolean
    numberOfRooms?: boolean
    supplyVoltage?: boolean
    phases?: boolean
    buildingType?: boolean
    usage?: boolean
    comment?: boolean
  }

  export type BuildingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "surfaceArea" | "numberOfRooms" | "supplyVoltage" | "phases" | "buildingType" | "usage" | "comment", ExtArgs["result"]["building"]>
  export type BuildingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type BuildingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type BuildingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $BuildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Building"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      surfaceArea: number
      numberOfRooms: number
      supplyVoltage: string
      phases: number
      buildingType: $Enums.BuildingType
      usage: string | null
      comment: string | null
    }, ExtArgs["result"]["building"]>
    composites: {}
  }

  type BuildingGetPayload<S extends boolean | null | undefined | BuildingDefaultArgs> = $Result.GetResult<Prisma.$BuildingPayload, S>

  type BuildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Building'], meta: { name: 'Building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildingFindUniqueArgs>(args: SelectSubset<T, BuildingFindUniqueArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Building that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildingFindFirstArgs>(args?: SelectSubset<T, BuildingFindFirstArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildingFindManyArgs>(args?: SelectSubset<T, BuildingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
     */
    create<T extends BuildingCreateArgs>(args: SelectSubset<T, BuildingCreateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buildings.
     * @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildingCreateManyArgs>(args?: SelectSubset<T, BuildingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buildings and returns the data saved in the database.
     * @param {BuildingCreateManyAndReturnArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildingCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
     */
    delete<T extends BuildingDeleteArgs>(args: SelectSubset<T, BuildingDeleteArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildingUpdateArgs>(args: SelectSubset<T, BuildingUpdateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildingDeleteManyArgs>(args?: SelectSubset<T, BuildingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildingUpdateManyArgs>(args: SelectSubset<T, BuildingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings and returns the data updated in the database.
     * @param {BuildingUpdateManyAndReturnArgs} args - Arguments to update many Buildings.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.updateManyAndReturn({
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
    updateManyAndReturn<T extends BuildingUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
     */
    upsert<T extends BuildingUpsertArgs>(args: SelectSubset<T, BuildingUpsertArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
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
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Building model
   */
  readonly fields: BuildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Building model
   */
  interface BuildingFieldRefs {
    readonly id: FieldRef<"Building", 'String'>
    readonly projectId: FieldRef<"Building", 'String'>
    readonly surfaceArea: FieldRef<"Building", 'Float'>
    readonly numberOfRooms: FieldRef<"Building", 'Int'>
    readonly supplyVoltage: FieldRef<"Building", 'String'>
    readonly phases: FieldRef<"Building", 'Int'>
    readonly buildingType: FieldRef<"Building", 'BuildingType'>
    readonly usage: FieldRef<"Building", 'String'>
    readonly comment: FieldRef<"Building", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Building findUnique
   */
  export type BuildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findFirst
   */
  export type BuildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findMany
   */
  export type BuildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building create
   */
  export type BuildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }

  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Building createManyAndReturn
   */
  export type BuildingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Building update
   */
  export type BuildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building updateManyAndReturn
   */
  export type BuildingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Building upsert
   */
  export type BuildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }

  /**
   * Building delete
   */
  export type BuildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to delete.
     */
    limit?: number
  }

  /**
   * Building without action
   */
  export type BuildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
  }


  /**
   * Model Circuit
   */

  export type AggregateCircuit = {
    _count: CircuitCountAggregateOutputType | null
    _avg: CircuitAvgAggregateOutputType | null
    _sum: CircuitSumAggregateOutputType | null
    _min: CircuitMinAggregateOutputType | null
    _max: CircuitMaxAggregateOutputType | null
  }

  export type CircuitAvgAggregateOutputType = {
    quantity: number | null
    loadWatts: number | null
    loadAmps: number | null
    shortCircuitCurrentAmps: number | null
    operatingCurrentAmps: number | null
    circuitTotalCurrentAmps: number | null
    cableLengthMeters: number | null
    conductorSectionMm2: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    numberOfPoles: number | null
  }

  export type CircuitSumAggregateOutputType = {
    quantity: number | null
    loadWatts: number | null
    loadAmps: number | null
    shortCircuitCurrentAmps: number | null
    operatingCurrentAmps: number | null
    circuitTotalCurrentAmps: number | null
    cableLengthMeters: number | null
    conductorSectionMm2: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    numberOfPoles: number | null
  }

  export type CircuitMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    protectionId: string | null
    label: string | null
    type: $Enums.CircuitCategory | null
    room: string | null
    quantity: number | null
    loadWatts: number | null
    loadAmps: number | null
    shortCircuitCurrentAmps: number | null
    operatingCurrentAmps: number | null
    circuitTotalCurrentAmps: number | null
    cableLengthMeters: number | null
    conductorSectionMm2: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    numberOfPoles: number | null
    isDedicated: boolean | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CircuitMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    protectionId: string | null
    label: string | null
    type: $Enums.CircuitCategory | null
    room: string | null
    quantity: number | null
    loadWatts: number | null
    loadAmps: number | null
    shortCircuitCurrentAmps: number | null
    operatingCurrentAmps: number | null
    circuitTotalCurrentAmps: number | null
    cableLengthMeters: number | null
    conductorSectionMm2: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    numberOfPoles: number | null
    isDedicated: boolean | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CircuitCountAggregateOutputType = {
    id: number
    projectId: number
    protectionId: number
    label: number
    type: number
    room: number
    quantity: number
    loadWatts: number
    loadAmps: number
    shortCircuitCurrentAmps: number
    operatingCurrentAmps: number
    circuitTotalCurrentAmps: number
    cableLengthMeters: number
    conductorSectionMm2: number
    recommendedSectionMm2: number
    voltageDropPercent: number
    numberOfPoles: number
    isDedicated: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CircuitAvgAggregateInputType = {
    quantity?: true
    loadWatts?: true
    loadAmps?: true
    shortCircuitCurrentAmps?: true
    operatingCurrentAmps?: true
    circuitTotalCurrentAmps?: true
    cableLengthMeters?: true
    conductorSectionMm2?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    numberOfPoles?: true
  }

  export type CircuitSumAggregateInputType = {
    quantity?: true
    loadWatts?: true
    loadAmps?: true
    shortCircuitCurrentAmps?: true
    operatingCurrentAmps?: true
    circuitTotalCurrentAmps?: true
    cableLengthMeters?: true
    conductorSectionMm2?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    numberOfPoles?: true
  }

  export type CircuitMinAggregateInputType = {
    id?: true
    projectId?: true
    protectionId?: true
    label?: true
    type?: true
    room?: true
    quantity?: true
    loadWatts?: true
    loadAmps?: true
    shortCircuitCurrentAmps?: true
    operatingCurrentAmps?: true
    circuitTotalCurrentAmps?: true
    cableLengthMeters?: true
    conductorSectionMm2?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    numberOfPoles?: true
    isDedicated?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CircuitMaxAggregateInputType = {
    id?: true
    projectId?: true
    protectionId?: true
    label?: true
    type?: true
    room?: true
    quantity?: true
    loadWatts?: true
    loadAmps?: true
    shortCircuitCurrentAmps?: true
    operatingCurrentAmps?: true
    circuitTotalCurrentAmps?: true
    cableLengthMeters?: true
    conductorSectionMm2?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    numberOfPoles?: true
    isDedicated?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CircuitCountAggregateInputType = {
    id?: true
    projectId?: true
    protectionId?: true
    label?: true
    type?: true
    room?: true
    quantity?: true
    loadWatts?: true
    loadAmps?: true
    shortCircuitCurrentAmps?: true
    operatingCurrentAmps?: true
    circuitTotalCurrentAmps?: true
    cableLengthMeters?: true
    conductorSectionMm2?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    numberOfPoles?: true
    isDedicated?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CircuitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circuit to aggregate.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circuits
    **/
    _count?: true | CircuitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CircuitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CircuitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircuitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircuitMaxAggregateInputType
  }

  export type GetCircuitAggregateType<T extends CircuitAggregateArgs> = {
        [P in keyof T & keyof AggregateCircuit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircuit[P]>
      : GetScalarType<T[P], AggregateCircuit[P]>
  }




  export type CircuitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircuitWhereInput
    orderBy?: CircuitOrderByWithAggregationInput | CircuitOrderByWithAggregationInput[]
    by: CircuitScalarFieldEnum[] | CircuitScalarFieldEnum
    having?: CircuitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircuitCountAggregateInputType | true
    _avg?: CircuitAvgAggregateInputType
    _sum?: CircuitSumAggregateInputType
    _min?: CircuitMinAggregateInputType
    _max?: CircuitMaxAggregateInputType
  }

  export type CircuitGroupByOutputType = {
    id: string
    projectId: string
    protectionId: string | null
    label: string
    type: $Enums.CircuitCategory
    room: string | null
    quantity: number
    loadWatts: number | null
    loadAmps: number | null
    shortCircuitCurrentAmps: number | null
    operatingCurrentAmps: number | null
    circuitTotalCurrentAmps: number | null
    cableLengthMeters: number | null
    conductorSectionMm2: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    numberOfPoles: number
    isDedicated: boolean
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: CircuitCountAggregateOutputType | null
    _avg: CircuitAvgAggregateOutputType | null
    _sum: CircuitSumAggregateOutputType | null
    _min: CircuitMinAggregateOutputType | null
    _max: CircuitMaxAggregateOutputType | null
  }

  type GetCircuitGroupByPayload<T extends CircuitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircuitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircuitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircuitGroupByOutputType[P]>
            : GetScalarType<T[P], CircuitGroupByOutputType[P]>
        }
      >
    >


  export type CircuitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    protectionId?: boolean
    label?: boolean
    type?: boolean
    room?: boolean
    quantity?: boolean
    loadWatts?: boolean
    loadAmps?: boolean
    shortCircuitCurrentAmps?: boolean
    operatingCurrentAmps?: boolean
    circuitTotalCurrentAmps?: boolean
    cableLengthMeters?: boolean
    conductorSectionMm2?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    numberOfPoles?: boolean
    isDedicated?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    protection?: boolean | Circuit$protectionArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    protectionId?: boolean
    label?: boolean
    type?: boolean
    room?: boolean
    quantity?: boolean
    loadWatts?: boolean
    loadAmps?: boolean
    shortCircuitCurrentAmps?: boolean
    operatingCurrentAmps?: boolean
    circuitTotalCurrentAmps?: boolean
    cableLengthMeters?: boolean
    conductorSectionMm2?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    numberOfPoles?: boolean
    isDedicated?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    protection?: boolean | Circuit$protectionArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    protectionId?: boolean
    label?: boolean
    type?: boolean
    room?: boolean
    quantity?: boolean
    loadWatts?: boolean
    loadAmps?: boolean
    shortCircuitCurrentAmps?: boolean
    operatingCurrentAmps?: boolean
    circuitTotalCurrentAmps?: boolean
    cableLengthMeters?: boolean
    conductorSectionMm2?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    numberOfPoles?: boolean
    isDedicated?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    protection?: boolean | Circuit$protectionArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectScalar = {
    id?: boolean
    projectId?: boolean
    protectionId?: boolean
    label?: boolean
    type?: boolean
    room?: boolean
    quantity?: boolean
    loadWatts?: boolean
    loadAmps?: boolean
    shortCircuitCurrentAmps?: boolean
    operatingCurrentAmps?: boolean
    circuitTotalCurrentAmps?: boolean
    cableLengthMeters?: boolean
    conductorSectionMm2?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    numberOfPoles?: boolean
    isDedicated?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CircuitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "protectionId" | "label" | "type" | "room" | "quantity" | "loadWatts" | "loadAmps" | "shortCircuitCurrentAmps" | "operatingCurrentAmps" | "circuitTotalCurrentAmps" | "cableLengthMeters" | "conductorSectionMm2" | "recommendedSectionMm2" | "voltageDropPercent" | "numberOfPoles" | "isDedicated" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["circuit"]>
  export type CircuitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    protection?: boolean | Circuit$protectionArgs<ExtArgs>
  }
  export type CircuitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    protection?: boolean | Circuit$protectionArgs<ExtArgs>
  }
  export type CircuitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    protection?: boolean | Circuit$protectionArgs<ExtArgs>
  }

  export type $CircuitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circuit"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      protection: Prisma.$ProtectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      protectionId: string | null
      label: string
      type: $Enums.CircuitCategory
      room: string | null
      quantity: number
      loadWatts: number | null
      loadAmps: number | null
      shortCircuitCurrentAmps: number | null
      operatingCurrentAmps: number | null
      circuitTotalCurrentAmps: number | null
      cableLengthMeters: number | null
      conductorSectionMm2: number | null
      recommendedSectionMm2: number | null
      voltageDropPercent: number | null
      numberOfPoles: number
      isDedicated: boolean
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["circuit"]>
    composites: {}
  }

  type CircuitGetPayload<S extends boolean | null | undefined | CircuitDefaultArgs> = $Result.GetResult<Prisma.$CircuitPayload, S>

  type CircuitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircuitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CircuitCountAggregateInputType | true
    }

  export interface CircuitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circuit'], meta: { name: 'Circuit' } }
    /**
     * Find zero or one Circuit that matches the filter.
     * @param {CircuitFindUniqueArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircuitFindUniqueArgs>(args: SelectSubset<T, CircuitFindUniqueArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circuit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircuitFindUniqueOrThrowArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircuitFindUniqueOrThrowArgs>(args: SelectSubset<T, CircuitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circuit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitFindFirstArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircuitFindFirstArgs>(args?: SelectSubset<T, CircuitFindFirstArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circuit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitFindFirstOrThrowArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircuitFindFirstOrThrowArgs>(args?: SelectSubset<T, CircuitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circuits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circuits
     * const circuits = await prisma.circuit.findMany()
     * 
     * // Get first 10 Circuits
     * const circuits = await prisma.circuit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circuitWithIdOnly = await prisma.circuit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircuitFindManyArgs>(args?: SelectSubset<T, CircuitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circuit.
     * @param {CircuitCreateArgs} args - Arguments to create a Circuit.
     * @example
     * // Create one Circuit
     * const Circuit = await prisma.circuit.create({
     *   data: {
     *     // ... data to create a Circuit
     *   }
     * })
     * 
     */
    create<T extends CircuitCreateArgs>(args: SelectSubset<T, CircuitCreateArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circuits.
     * @param {CircuitCreateManyArgs} args - Arguments to create many Circuits.
     * @example
     * // Create many Circuits
     * const circuit = await prisma.circuit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircuitCreateManyArgs>(args?: SelectSubset<T, CircuitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circuits and returns the data saved in the database.
     * @param {CircuitCreateManyAndReturnArgs} args - Arguments to create many Circuits.
     * @example
     * // Create many Circuits
     * const circuit = await prisma.circuit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circuits and only return the `id`
     * const circuitWithIdOnly = await prisma.circuit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircuitCreateManyAndReturnArgs>(args?: SelectSubset<T, CircuitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circuit.
     * @param {CircuitDeleteArgs} args - Arguments to delete one Circuit.
     * @example
     * // Delete one Circuit
     * const Circuit = await prisma.circuit.delete({
     *   where: {
     *     // ... filter to delete one Circuit
     *   }
     * })
     * 
     */
    delete<T extends CircuitDeleteArgs>(args: SelectSubset<T, CircuitDeleteArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circuit.
     * @param {CircuitUpdateArgs} args - Arguments to update one Circuit.
     * @example
     * // Update one Circuit
     * const circuit = await prisma.circuit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircuitUpdateArgs>(args: SelectSubset<T, CircuitUpdateArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circuits.
     * @param {CircuitDeleteManyArgs} args - Arguments to filter Circuits to delete.
     * @example
     * // Delete a few Circuits
     * const { count } = await prisma.circuit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircuitDeleteManyArgs>(args?: SelectSubset<T, CircuitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circuits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circuits
     * const circuit = await prisma.circuit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircuitUpdateManyArgs>(args: SelectSubset<T, CircuitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circuits and returns the data updated in the database.
     * @param {CircuitUpdateManyAndReturnArgs} args - Arguments to update many Circuits.
     * @example
     * // Update many Circuits
     * const circuit = await prisma.circuit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circuits and only return the `id`
     * const circuitWithIdOnly = await prisma.circuit.updateManyAndReturn({
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
    updateManyAndReturn<T extends CircuitUpdateManyAndReturnArgs>(args: SelectSubset<T, CircuitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circuit.
     * @param {CircuitUpsertArgs} args - Arguments to update or create a Circuit.
     * @example
     * // Update or create a Circuit
     * const circuit = await prisma.circuit.upsert({
     *   create: {
     *     // ... data to create a Circuit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circuit we want to update
     *   }
     * })
     */
    upsert<T extends CircuitUpsertArgs>(args: SelectSubset<T, CircuitUpsertArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circuits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitCountArgs} args - Arguments to filter Circuits to count.
     * @example
     * // Count the number of Circuits
     * const count = await prisma.circuit.count({
     *   where: {
     *     // ... the filter for the Circuits we want to count
     *   }
     * })
    **/
    count<T extends CircuitCountArgs>(
      args?: Subset<T, CircuitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircuitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circuit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CircuitAggregateArgs>(args: Subset<T, CircuitAggregateArgs>): Prisma.PrismaPromise<GetCircuitAggregateType<T>>

    /**
     * Group by Circuit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitGroupByArgs} args - Group by arguments.
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
      T extends CircuitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircuitGroupByArgs['orderBy'] }
        : { orderBy?: CircuitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CircuitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircuitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circuit model
   */
  readonly fields: CircuitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circuit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircuitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    protection<T extends Circuit$protectionArgs<ExtArgs> = {}>(args?: Subset<T, Circuit$protectionArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Circuit model
   */
  interface CircuitFieldRefs {
    readonly id: FieldRef<"Circuit", 'String'>
    readonly projectId: FieldRef<"Circuit", 'String'>
    readonly protectionId: FieldRef<"Circuit", 'String'>
    readonly label: FieldRef<"Circuit", 'String'>
    readonly type: FieldRef<"Circuit", 'CircuitCategory'>
    readonly room: FieldRef<"Circuit", 'String'>
    readonly quantity: FieldRef<"Circuit", 'Int'>
    readonly loadWatts: FieldRef<"Circuit", 'Int'>
    readonly loadAmps: FieldRef<"Circuit", 'Float'>
    readonly shortCircuitCurrentAmps: FieldRef<"Circuit", 'Float'>
    readonly operatingCurrentAmps: FieldRef<"Circuit", 'Float'>
    readonly circuitTotalCurrentAmps: FieldRef<"Circuit", 'Float'>
    readonly cableLengthMeters: FieldRef<"Circuit", 'Float'>
    readonly conductorSectionMm2: FieldRef<"Circuit", 'Float'>
    readonly recommendedSectionMm2: FieldRef<"Circuit", 'Float'>
    readonly voltageDropPercent: FieldRef<"Circuit", 'Float'>
    readonly numberOfPoles: FieldRef<"Circuit", 'Int'>
    readonly isDedicated: FieldRef<"Circuit", 'Boolean'>
    readonly comment: FieldRef<"Circuit", 'String'>
    readonly createdAt: FieldRef<"Circuit", 'DateTime'>
    readonly updatedAt: FieldRef<"Circuit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Circuit findUnique
   */
  export type CircuitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit findUniqueOrThrow
   */
  export type CircuitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit findFirst
   */
  export type CircuitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circuits.
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circuits.
     */
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Circuit findFirstOrThrow
   */
  export type CircuitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circuits.
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circuits.
     */
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Circuit findMany
   */
  export type CircuitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuits to fetch.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circuits.
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circuits.
     */
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Circuit create
   */
  export type CircuitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * The data needed to create a Circuit.
     */
    data: XOR<CircuitCreateInput, CircuitUncheckedCreateInput>
  }

  /**
   * Circuit createMany
   */
  export type CircuitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circuits.
     */
    data: CircuitCreateManyInput | CircuitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circuit createManyAndReturn
   */
  export type CircuitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * The data used to create many Circuits.
     */
    data: CircuitCreateManyInput | CircuitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circuit update
   */
  export type CircuitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * The data needed to update a Circuit.
     */
    data: XOR<CircuitUpdateInput, CircuitUncheckedUpdateInput>
    /**
     * Choose, which Circuit to update.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit updateMany
   */
  export type CircuitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circuits.
     */
    data: XOR<CircuitUpdateManyMutationInput, CircuitUncheckedUpdateManyInput>
    /**
     * Filter which Circuits to update
     */
    where?: CircuitWhereInput
    /**
     * Limit how many Circuits to update.
     */
    limit?: number
  }

  /**
   * Circuit updateManyAndReturn
   */
  export type CircuitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * The data used to update Circuits.
     */
    data: XOR<CircuitUpdateManyMutationInput, CircuitUncheckedUpdateManyInput>
    /**
     * Filter which Circuits to update
     */
    where?: CircuitWhereInput
    /**
     * Limit how many Circuits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circuit upsert
   */
  export type CircuitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * The filter to search for the Circuit to update in case it exists.
     */
    where: CircuitWhereUniqueInput
    /**
     * In case the Circuit found by the `where` argument doesn't exist, create a new Circuit with this data.
     */
    create: XOR<CircuitCreateInput, CircuitUncheckedCreateInput>
    /**
     * In case the Circuit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircuitUpdateInput, CircuitUncheckedUpdateInput>
  }

  /**
   * Circuit delete
   */
  export type CircuitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter which Circuit to delete.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit deleteMany
   */
  export type CircuitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circuits to delete
     */
    where?: CircuitWhereInput
    /**
     * Limit how many Circuits to delete.
     */
    limit?: number
  }

  /**
   * Circuit.protection
   */
  export type Circuit$protectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    where?: ProtectionWhereInput
  }

  /**
   * Circuit without action
   */
  export type CircuitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
  }


  /**
   * Model Protection
   */

  export type AggregateProtection = {
    _count: ProtectionCountAggregateOutputType | null
    _avg: ProtectionAvgAggregateOutputType | null
    _sum: ProtectionSumAggregateOutputType | null
    _min: ProtectionMinAggregateOutputType | null
    _max: ProtectionMaxAggregateOutputType | null
  }

  export type ProtectionAvgAggregateOutputType = {
    ratingAmps: number | null
    poles: number | null
  }

  export type ProtectionSumAggregateOutputType = {
    ratingAmps: number | null
    poles: number | null
  }

  export type ProtectionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.ProtectionType | null
    ratingAmps: number | null
    curve: string | null
    poles: number | null
    description: string | null
    equipmentName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProtectionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.ProtectionType | null
    ratingAmps: number | null
    curve: string | null
    poles: number | null
    description: string | null
    equipmentName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProtectionCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    ratingAmps: number
    curve: number
    poles: number
    description: number
    equipmentName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProtectionAvgAggregateInputType = {
    ratingAmps?: true
    poles?: true
  }

  export type ProtectionSumAggregateInputType = {
    ratingAmps?: true
    poles?: true
  }

  export type ProtectionMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    ratingAmps?: true
    curve?: true
    poles?: true
    description?: true
    equipmentName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProtectionMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    ratingAmps?: true
    curve?: true
    poles?: true
    description?: true
    equipmentName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProtectionCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    ratingAmps?: true
    curve?: true
    poles?: true
    description?: true
    equipmentName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProtectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protection to aggregate.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Protections
    **/
    _count?: true | ProtectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProtectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProtectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProtectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProtectionMaxAggregateInputType
  }

  export type GetProtectionAggregateType<T extends ProtectionAggregateArgs> = {
        [P in keyof T & keyof AggregateProtection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProtection[P]>
      : GetScalarType<T[P], AggregateProtection[P]>
  }




  export type ProtectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtectionWhereInput
    orderBy?: ProtectionOrderByWithAggregationInput | ProtectionOrderByWithAggregationInput[]
    by: ProtectionScalarFieldEnum[] | ProtectionScalarFieldEnum
    having?: ProtectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProtectionCountAggregateInputType | true
    _avg?: ProtectionAvgAggregateInputType
    _sum?: ProtectionSumAggregateInputType
    _min?: ProtectionMinAggregateInputType
    _max?: ProtectionMaxAggregateInputType
  }

  export type ProtectionGroupByOutputType = {
    id: string
    projectId: string
    type: $Enums.ProtectionType
    ratingAmps: number
    curve: string | null
    poles: number
    description: string | null
    equipmentName: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProtectionCountAggregateOutputType | null
    _avg: ProtectionAvgAggregateOutputType | null
    _sum: ProtectionSumAggregateOutputType | null
    _min: ProtectionMinAggregateOutputType | null
    _max: ProtectionMaxAggregateOutputType | null
  }

  type GetProtectionGroupByPayload<T extends ProtectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProtectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProtectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProtectionGroupByOutputType[P]>
            : GetScalarType<T[P], ProtectionGroupByOutputType[P]>
        }
      >
    >


  export type ProtectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    ratingAmps?: boolean
    curve?: boolean
    poles?: boolean
    description?: boolean
    equipmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    circuits?: boolean | Protection$circuitsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | ProtectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    ratingAmps?: boolean
    curve?: boolean
    poles?: boolean
    description?: boolean
    equipmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    ratingAmps?: boolean
    curve?: boolean
    poles?: boolean
    description?: boolean
    equipmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    ratingAmps?: boolean
    curve?: boolean
    poles?: boolean
    description?: boolean
    equipmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProtectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "ratingAmps" | "curve" | "poles" | "description" | "equipmentName" | "createdAt" | "updatedAt", ExtArgs["result"]["protection"]>
  export type ProtectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circuits?: boolean | Protection$circuitsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | ProtectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProtectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProtectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProtectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Protection"
    objects: {
      circuits: Prisma.$CircuitPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      type: $Enums.ProtectionType
      ratingAmps: number
      curve: string | null
      poles: number
      description: string | null
      equipmentName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["protection"]>
    composites: {}
  }

  type ProtectionGetPayload<S extends boolean | null | undefined | ProtectionDefaultArgs> = $Result.GetResult<Prisma.$ProtectionPayload, S>

  type ProtectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProtectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProtectionCountAggregateInputType | true
    }

  export interface ProtectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Protection'], meta: { name: 'Protection' } }
    /**
     * Find zero or one Protection that matches the filter.
     * @param {ProtectionFindUniqueArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtectionFindUniqueArgs>(args: SelectSubset<T, ProtectionFindUniqueArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Protection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProtectionFindUniqueOrThrowArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProtectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionFindFirstArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtectionFindFirstArgs>(args?: SelectSubset<T, ProtectionFindFirstArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionFindFirstOrThrowArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProtectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Protections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Protections
     * const protections = await prisma.protection.findMany()
     * 
     * // Get first 10 Protections
     * const protections = await prisma.protection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const protectionWithIdOnly = await prisma.protection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProtectionFindManyArgs>(args?: SelectSubset<T, ProtectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Protection.
     * @param {ProtectionCreateArgs} args - Arguments to create a Protection.
     * @example
     * // Create one Protection
     * const Protection = await prisma.protection.create({
     *   data: {
     *     // ... data to create a Protection
     *   }
     * })
     * 
     */
    create<T extends ProtectionCreateArgs>(args: SelectSubset<T, ProtectionCreateArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Protections.
     * @param {ProtectionCreateManyArgs} args - Arguments to create many Protections.
     * @example
     * // Create many Protections
     * const protection = await prisma.protection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProtectionCreateManyArgs>(args?: SelectSubset<T, ProtectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Protections and returns the data saved in the database.
     * @param {ProtectionCreateManyAndReturnArgs} args - Arguments to create many Protections.
     * @example
     * // Create many Protections
     * const protection = await prisma.protection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Protections and only return the `id`
     * const protectionWithIdOnly = await prisma.protection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProtectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProtectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Protection.
     * @param {ProtectionDeleteArgs} args - Arguments to delete one Protection.
     * @example
     * // Delete one Protection
     * const Protection = await prisma.protection.delete({
     *   where: {
     *     // ... filter to delete one Protection
     *   }
     * })
     * 
     */
    delete<T extends ProtectionDeleteArgs>(args: SelectSubset<T, ProtectionDeleteArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Protection.
     * @param {ProtectionUpdateArgs} args - Arguments to update one Protection.
     * @example
     * // Update one Protection
     * const protection = await prisma.protection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProtectionUpdateArgs>(args: SelectSubset<T, ProtectionUpdateArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Protections.
     * @param {ProtectionDeleteManyArgs} args - Arguments to filter Protections to delete.
     * @example
     * // Delete a few Protections
     * const { count } = await prisma.protection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProtectionDeleteManyArgs>(args?: SelectSubset<T, ProtectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Protections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Protections
     * const protection = await prisma.protection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProtectionUpdateManyArgs>(args: SelectSubset<T, ProtectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Protections and returns the data updated in the database.
     * @param {ProtectionUpdateManyAndReturnArgs} args - Arguments to update many Protections.
     * @example
     * // Update many Protections
     * const protection = await prisma.protection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Protections and only return the `id`
     * const protectionWithIdOnly = await prisma.protection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProtectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProtectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Protection.
     * @param {ProtectionUpsertArgs} args - Arguments to update or create a Protection.
     * @example
     * // Update or create a Protection
     * const protection = await prisma.protection.upsert({
     *   create: {
     *     // ... data to create a Protection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Protection we want to update
     *   }
     * })
     */
    upsert<T extends ProtectionUpsertArgs>(args: SelectSubset<T, ProtectionUpsertArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Protections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionCountArgs} args - Arguments to filter Protections to count.
     * @example
     * // Count the number of Protections
     * const count = await prisma.protection.count({
     *   where: {
     *     // ... the filter for the Protections we want to count
     *   }
     * })
    **/
    count<T extends ProtectionCountArgs>(
      args?: Subset<T, ProtectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProtectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Protection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProtectionAggregateArgs>(args: Subset<T, ProtectionAggregateArgs>): Prisma.PrismaPromise<GetProtectionAggregateType<T>>

    /**
     * Group by Protection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionGroupByArgs} args - Group by arguments.
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
      T extends ProtectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProtectionGroupByArgs['orderBy'] }
        : { orderBy?: ProtectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProtectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Protection model
   */
  readonly fields: ProtectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Protection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProtectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    circuits<T extends Protection$circuitsArgs<ExtArgs> = {}>(args?: Subset<T, Protection$circuitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Protection model
   */
  interface ProtectionFieldRefs {
    readonly id: FieldRef<"Protection", 'String'>
    readonly projectId: FieldRef<"Protection", 'String'>
    readonly type: FieldRef<"Protection", 'ProtectionType'>
    readonly ratingAmps: FieldRef<"Protection", 'Int'>
    readonly curve: FieldRef<"Protection", 'String'>
    readonly poles: FieldRef<"Protection", 'Int'>
    readonly description: FieldRef<"Protection", 'String'>
    readonly equipmentName: FieldRef<"Protection", 'String'>
    readonly createdAt: FieldRef<"Protection", 'DateTime'>
    readonly updatedAt: FieldRef<"Protection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Protection findUnique
   */
  export type ProtectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection findUniqueOrThrow
   */
  export type ProtectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection findFirst
   */
  export type ProtectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protections.
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protections.
     */
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Protection findFirstOrThrow
   */
  export type ProtectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protections.
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protections.
     */
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Protection findMany
   */
  export type ProtectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protections to fetch.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Protections.
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protections.
     */
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Protection create
   */
  export type ProtectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Protection.
     */
    data: XOR<ProtectionCreateInput, ProtectionUncheckedCreateInput>
  }

  /**
   * Protection createMany
   */
  export type ProtectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Protections.
     */
    data: ProtectionCreateManyInput | ProtectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Protection createManyAndReturn
   */
  export type ProtectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * The data used to create many Protections.
     */
    data: ProtectionCreateManyInput | ProtectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Protection update
   */
  export type ProtectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Protection.
     */
    data: XOR<ProtectionUpdateInput, ProtectionUncheckedUpdateInput>
    /**
     * Choose, which Protection to update.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection updateMany
   */
  export type ProtectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Protections.
     */
    data: XOR<ProtectionUpdateManyMutationInput, ProtectionUncheckedUpdateManyInput>
    /**
     * Filter which Protections to update
     */
    where?: ProtectionWhereInput
    /**
     * Limit how many Protections to update.
     */
    limit?: number
  }

  /**
   * Protection updateManyAndReturn
   */
  export type ProtectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * The data used to update Protections.
     */
    data: XOR<ProtectionUpdateManyMutationInput, ProtectionUncheckedUpdateManyInput>
    /**
     * Filter which Protections to update
     */
    where?: ProtectionWhereInput
    /**
     * Limit how many Protections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Protection upsert
   */
  export type ProtectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Protection to update in case it exists.
     */
    where: ProtectionWhereUniqueInput
    /**
     * In case the Protection found by the `where` argument doesn't exist, create a new Protection with this data.
     */
    create: XOR<ProtectionCreateInput, ProtectionUncheckedCreateInput>
    /**
     * In case the Protection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProtectionUpdateInput, ProtectionUncheckedUpdateInput>
  }

  /**
   * Protection delete
   */
  export type ProtectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter which Protection to delete.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection deleteMany
   */
  export type ProtectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protections to delete
     */
    where?: ProtectionWhereInput
    /**
     * Limit how many Protections to delete.
     */
    limit?: number
  }

  /**
   * Protection.circuits
   */
  export type Protection$circuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    where?: CircuitWhereInput
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    cursor?: CircuitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Protection without action
   */
  export type ProtectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
  }


  /**
   * Model Calculation
   */

  export type AggregateCalculation = {
    _count: CalculationCountAggregateOutputType | null
    _avg: CalculationAvgAggregateOutputType | null
    _sum: CalculationSumAggregateOutputType | null
    _min: CalculationMinAggregateOutputType | null
    _max: CalculationMaxAggregateOutputType | null
  }

  export type CalculationAvgAggregateOutputType = {
    totalInstalledPowerWatts: number | null
    maximumShortCircuitAmps: number | null
    totalOperatingCurrentAmps: number | null
    totalCircuitCurrentAmps: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
  }

  export type CalculationSumAggregateOutputType = {
    totalInstalledPowerWatts: number | null
    maximumShortCircuitAmps: number | null
    totalOperatingCurrentAmps: number | null
    totalCircuitCurrentAmps: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
  }

  export type CalculationMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    totalInstalledPowerWatts: number | null
    maximumShortCircuitAmps: number | null
    totalOperatingCurrentAmps: number | null
    totalCircuitCurrentAmps: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalculationMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    totalInstalledPowerWatts: number | null
    maximumShortCircuitAmps: number | null
    totalOperatingCurrentAmps: number | null
    totalCircuitCurrentAmps: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalculationCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    totalInstalledPowerWatts: number
    maximumShortCircuitAmps: number
    totalOperatingCurrentAmps: number
    totalCircuitCurrentAmps: number
    recommendedSectionMm2: number
    voltageDropPercent: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalculationAvgAggregateInputType = {
    totalInstalledPowerWatts?: true
    maximumShortCircuitAmps?: true
    totalOperatingCurrentAmps?: true
    totalCircuitCurrentAmps?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
  }

  export type CalculationSumAggregateInputType = {
    totalInstalledPowerWatts?: true
    maximumShortCircuitAmps?: true
    totalOperatingCurrentAmps?: true
    totalCircuitCurrentAmps?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
  }

  export type CalculationMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    totalInstalledPowerWatts?: true
    maximumShortCircuitAmps?: true
    totalOperatingCurrentAmps?: true
    totalCircuitCurrentAmps?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalculationMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    totalInstalledPowerWatts?: true
    maximumShortCircuitAmps?: true
    totalOperatingCurrentAmps?: true
    totalCircuitCurrentAmps?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalculationCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    totalInstalledPowerWatts?: true
    maximumShortCircuitAmps?: true
    totalOperatingCurrentAmps?: true
    totalCircuitCurrentAmps?: true
    recommendedSectionMm2?: true
    voltageDropPercent?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalculationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calculation to aggregate.
     */
    where?: CalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationOrderByWithRelationInput | CalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calculations
    **/
    _count?: true | CalculationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalculationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalculationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalculationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalculationMaxAggregateInputType
  }

  export type GetCalculationAggregateType<T extends CalculationAggregateArgs> = {
        [P in keyof T & keyof AggregateCalculation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalculation[P]>
      : GetScalarType<T[P], AggregateCalculation[P]>
  }




  export type CalculationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationWhereInput
    orderBy?: CalculationOrderByWithAggregationInput | CalculationOrderByWithAggregationInput[]
    by: CalculationScalarFieldEnum[] | CalculationScalarFieldEnum
    having?: CalculationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalculationCountAggregateInputType | true
    _avg?: CalculationAvgAggregateInputType
    _sum?: CalculationSumAggregateInputType
    _min?: CalculationMinAggregateInputType
    _max?: CalculationMaxAggregateInputType
  }

  export type CalculationGroupByOutputType = {
    id: string
    projectId: string
    name: string
    totalInstalledPowerWatts: number | null
    maximumShortCircuitAmps: number | null
    totalOperatingCurrentAmps: number | null
    totalCircuitCurrentAmps: number | null
    recommendedSectionMm2: number | null
    voltageDropPercent: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CalculationCountAggregateOutputType | null
    _avg: CalculationAvgAggregateOutputType | null
    _sum: CalculationSumAggregateOutputType | null
    _min: CalculationMinAggregateOutputType | null
    _max: CalculationMaxAggregateOutputType | null
  }

  type GetCalculationGroupByPayload<T extends CalculationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalculationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalculationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalculationGroupByOutputType[P]>
            : GetScalarType<T[P], CalculationGroupByOutputType[P]>
        }
      >
    >


  export type CalculationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    totalInstalledPowerWatts?: boolean
    maximumShortCircuitAmps?: boolean
    totalOperatingCurrentAmps?: boolean
    totalCircuitCurrentAmps?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculation"]>

  export type CalculationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    totalInstalledPowerWatts?: boolean
    maximumShortCircuitAmps?: boolean
    totalOperatingCurrentAmps?: boolean
    totalCircuitCurrentAmps?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculation"]>

  export type CalculationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    totalInstalledPowerWatts?: boolean
    maximumShortCircuitAmps?: boolean
    totalOperatingCurrentAmps?: boolean
    totalCircuitCurrentAmps?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculation"]>

  export type CalculationSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    totalInstalledPowerWatts?: boolean
    maximumShortCircuitAmps?: boolean
    totalOperatingCurrentAmps?: boolean
    totalCircuitCurrentAmps?: boolean
    recommendedSectionMm2?: boolean
    voltageDropPercent?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalculationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "totalInstalledPowerWatts" | "maximumShortCircuitAmps" | "totalOperatingCurrentAmps" | "totalCircuitCurrentAmps" | "recommendedSectionMm2" | "voltageDropPercent" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["calculation"]>
  export type CalculationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CalculationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CalculationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CalculationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calculation"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      totalInstalledPowerWatts: number | null
      maximumShortCircuitAmps: number | null
      totalOperatingCurrentAmps: number | null
      totalCircuitCurrentAmps: number | null
      recommendedSectionMm2: number | null
      voltageDropPercent: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calculation"]>
    composites: {}
  }

  type CalculationGetPayload<S extends boolean | null | undefined | CalculationDefaultArgs> = $Result.GetResult<Prisma.$CalculationPayload, S>

  type CalculationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalculationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalculationCountAggregateInputType | true
    }

  export interface CalculationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calculation'], meta: { name: 'Calculation' } }
    /**
     * Find zero or one Calculation that matches the filter.
     * @param {CalculationFindUniqueArgs} args - Arguments to find a Calculation
     * @example
     * // Get one Calculation
     * const calculation = await prisma.calculation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalculationFindUniqueArgs>(args: SelectSubset<T, CalculationFindUniqueArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calculation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalculationFindUniqueOrThrowArgs} args - Arguments to find a Calculation
     * @example
     * // Get one Calculation
     * const calculation = await prisma.calculation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalculationFindUniqueOrThrowArgs>(args: SelectSubset<T, CalculationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calculation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationFindFirstArgs} args - Arguments to find a Calculation
     * @example
     * // Get one Calculation
     * const calculation = await prisma.calculation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalculationFindFirstArgs>(args?: SelectSubset<T, CalculationFindFirstArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calculation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationFindFirstOrThrowArgs} args - Arguments to find a Calculation
     * @example
     * // Get one Calculation
     * const calculation = await prisma.calculation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalculationFindFirstOrThrowArgs>(args?: SelectSubset<T, CalculationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calculations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calculations
     * const calculations = await prisma.calculation.findMany()
     * 
     * // Get first 10 Calculations
     * const calculations = await prisma.calculation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calculationWithIdOnly = await prisma.calculation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalculationFindManyArgs>(args?: SelectSubset<T, CalculationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calculation.
     * @param {CalculationCreateArgs} args - Arguments to create a Calculation.
     * @example
     * // Create one Calculation
     * const Calculation = await prisma.calculation.create({
     *   data: {
     *     // ... data to create a Calculation
     *   }
     * })
     * 
     */
    create<T extends CalculationCreateArgs>(args: SelectSubset<T, CalculationCreateArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calculations.
     * @param {CalculationCreateManyArgs} args - Arguments to create many Calculations.
     * @example
     * // Create many Calculations
     * const calculation = await prisma.calculation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalculationCreateManyArgs>(args?: SelectSubset<T, CalculationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calculations and returns the data saved in the database.
     * @param {CalculationCreateManyAndReturnArgs} args - Arguments to create many Calculations.
     * @example
     * // Create many Calculations
     * const calculation = await prisma.calculation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calculations and only return the `id`
     * const calculationWithIdOnly = await prisma.calculation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalculationCreateManyAndReturnArgs>(args?: SelectSubset<T, CalculationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calculation.
     * @param {CalculationDeleteArgs} args - Arguments to delete one Calculation.
     * @example
     * // Delete one Calculation
     * const Calculation = await prisma.calculation.delete({
     *   where: {
     *     // ... filter to delete one Calculation
     *   }
     * })
     * 
     */
    delete<T extends CalculationDeleteArgs>(args: SelectSubset<T, CalculationDeleteArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calculation.
     * @param {CalculationUpdateArgs} args - Arguments to update one Calculation.
     * @example
     * // Update one Calculation
     * const calculation = await prisma.calculation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalculationUpdateArgs>(args: SelectSubset<T, CalculationUpdateArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calculations.
     * @param {CalculationDeleteManyArgs} args - Arguments to filter Calculations to delete.
     * @example
     * // Delete a few Calculations
     * const { count } = await prisma.calculation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalculationDeleteManyArgs>(args?: SelectSubset<T, CalculationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calculations
     * const calculation = await prisma.calculation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalculationUpdateManyArgs>(args: SelectSubset<T, CalculationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calculations and returns the data updated in the database.
     * @param {CalculationUpdateManyAndReturnArgs} args - Arguments to update many Calculations.
     * @example
     * // Update many Calculations
     * const calculation = await prisma.calculation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calculations and only return the `id`
     * const calculationWithIdOnly = await prisma.calculation.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalculationUpdateManyAndReturnArgs>(args: SelectSubset<T, CalculationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calculation.
     * @param {CalculationUpsertArgs} args - Arguments to update or create a Calculation.
     * @example
     * // Update or create a Calculation
     * const calculation = await prisma.calculation.upsert({
     *   create: {
     *     // ... data to create a Calculation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calculation we want to update
     *   }
     * })
     */
    upsert<T extends CalculationUpsertArgs>(args: SelectSubset<T, CalculationUpsertArgs<ExtArgs>>): Prisma__CalculationClient<$Result.GetResult<Prisma.$CalculationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationCountArgs} args - Arguments to filter Calculations to count.
     * @example
     * // Count the number of Calculations
     * const count = await prisma.calculation.count({
     *   where: {
     *     // ... the filter for the Calculations we want to count
     *   }
     * })
    **/
    count<T extends CalculationCountArgs>(
      args?: Subset<T, CalculationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalculationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalculationAggregateArgs>(args: Subset<T, CalculationAggregateArgs>): Prisma.PrismaPromise<GetCalculationAggregateType<T>>

    /**
     * Group by Calculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationGroupByArgs} args - Group by arguments.
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
      T extends CalculationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalculationGroupByArgs['orderBy'] }
        : { orderBy?: CalculationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalculationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalculationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calculation model
   */
  readonly fields: CalculationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calculation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalculationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Calculation model
   */
  interface CalculationFieldRefs {
    readonly id: FieldRef<"Calculation", 'String'>
    readonly projectId: FieldRef<"Calculation", 'String'>
    readonly name: FieldRef<"Calculation", 'String'>
    readonly totalInstalledPowerWatts: FieldRef<"Calculation", 'Int'>
    readonly maximumShortCircuitAmps: FieldRef<"Calculation", 'Float'>
    readonly totalOperatingCurrentAmps: FieldRef<"Calculation", 'Float'>
    readonly totalCircuitCurrentAmps: FieldRef<"Calculation", 'Float'>
    readonly recommendedSectionMm2: FieldRef<"Calculation", 'Float'>
    readonly voltageDropPercent: FieldRef<"Calculation", 'Float'>
    readonly notes: FieldRef<"Calculation", 'String'>
    readonly createdAt: FieldRef<"Calculation", 'DateTime'>
    readonly updatedAt: FieldRef<"Calculation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Calculation findUnique
   */
  export type CalculationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * Filter, which Calculation to fetch.
     */
    where: CalculationWhereUniqueInput
  }

  /**
   * Calculation findUniqueOrThrow
   */
  export type CalculationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * Filter, which Calculation to fetch.
     */
    where: CalculationWhereUniqueInput
  }

  /**
   * Calculation findFirst
   */
  export type CalculationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * Filter, which Calculation to fetch.
     */
    where?: CalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationOrderByWithRelationInput | CalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calculations.
     */
    cursor?: CalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calculations.
     */
    distinct?: CalculationScalarFieldEnum | CalculationScalarFieldEnum[]
  }

  /**
   * Calculation findFirstOrThrow
   */
  export type CalculationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * Filter, which Calculation to fetch.
     */
    where?: CalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationOrderByWithRelationInput | CalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calculations.
     */
    cursor?: CalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calculations.
     */
    distinct?: CalculationScalarFieldEnum | CalculationScalarFieldEnum[]
  }

  /**
   * Calculation findMany
   */
  export type CalculationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * Filter, which Calculations to fetch.
     */
    where?: CalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calculations to fetch.
     */
    orderBy?: CalculationOrderByWithRelationInput | CalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calculations.
     */
    cursor?: CalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calculations.
     */
    distinct?: CalculationScalarFieldEnum | CalculationScalarFieldEnum[]
  }

  /**
   * Calculation create
   */
  export type CalculationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * The data needed to create a Calculation.
     */
    data: XOR<CalculationCreateInput, CalculationUncheckedCreateInput>
  }

  /**
   * Calculation createMany
   */
  export type CalculationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calculations.
     */
    data: CalculationCreateManyInput | CalculationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calculation createManyAndReturn
   */
  export type CalculationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * The data used to create many Calculations.
     */
    data: CalculationCreateManyInput | CalculationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calculation update
   */
  export type CalculationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * The data needed to update a Calculation.
     */
    data: XOR<CalculationUpdateInput, CalculationUncheckedUpdateInput>
    /**
     * Choose, which Calculation to update.
     */
    where: CalculationWhereUniqueInput
  }

  /**
   * Calculation updateMany
   */
  export type CalculationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calculations.
     */
    data: XOR<CalculationUpdateManyMutationInput, CalculationUncheckedUpdateManyInput>
    /**
     * Filter which Calculations to update
     */
    where?: CalculationWhereInput
    /**
     * Limit how many Calculations to update.
     */
    limit?: number
  }

  /**
   * Calculation updateManyAndReturn
   */
  export type CalculationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * The data used to update Calculations.
     */
    data: XOR<CalculationUpdateManyMutationInput, CalculationUncheckedUpdateManyInput>
    /**
     * Filter which Calculations to update
     */
    where?: CalculationWhereInput
    /**
     * Limit how many Calculations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calculation upsert
   */
  export type CalculationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * The filter to search for the Calculation to update in case it exists.
     */
    where: CalculationWhereUniqueInput
    /**
     * In case the Calculation found by the `where` argument doesn't exist, create a new Calculation with this data.
     */
    create: XOR<CalculationCreateInput, CalculationUncheckedCreateInput>
    /**
     * In case the Calculation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalculationUpdateInput, CalculationUncheckedUpdateInput>
  }

  /**
   * Calculation delete
   */
  export type CalculationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
    /**
     * Filter which Calculation to delete.
     */
    where: CalculationWhereUniqueInput
  }

  /**
   * Calculation deleteMany
   */
  export type CalculationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calculations to delete
     */
    where?: CalculationWhereInput
    /**
     * Limit how many Calculations to delete.
     */
    limit?: number
  }

  /**
   * Calculation without action
   */
  export type CalculationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calculation
     */
    select?: CalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calculation
     */
    omit?: CalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    photo: 'photo',
    password: 'password',
    isTwoFactorEnabled: 'isTwoFactorEnabled',
    twofactorSecret: 'twofactorSecret',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_Token: 'refresh_Token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    session: 'session',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    reference: 'reference',
    customerName: 'customerName',
    siteAddress: 'siteAddress',
    status: 'status',
    objective: 'objective',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const BuildingScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    surfaceArea: 'surfaceArea',
    numberOfRooms: 'numberOfRooms',
    supplyVoltage: 'supplyVoltage',
    phases: 'phases',
    buildingType: 'buildingType',
    usage: 'usage',
    comment: 'comment'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const CircuitScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    protectionId: 'protectionId',
    label: 'label',
    type: 'type',
    room: 'room',
    quantity: 'quantity',
    loadWatts: 'loadWatts',
    loadAmps: 'loadAmps',
    shortCircuitCurrentAmps: 'shortCircuitCurrentAmps',
    operatingCurrentAmps: 'operatingCurrentAmps',
    circuitTotalCurrentAmps: 'circuitTotalCurrentAmps',
    cableLengthMeters: 'cableLengthMeters',
    conductorSectionMm2: 'conductorSectionMm2',
    recommendedSectionMm2: 'recommendedSectionMm2',
    voltageDropPercent: 'voltageDropPercent',
    numberOfPoles: 'numberOfPoles',
    isDedicated: 'isDedicated',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CircuitScalarFieldEnum = (typeof CircuitScalarFieldEnum)[keyof typeof CircuitScalarFieldEnum]


  export const ProtectionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    ratingAmps: 'ratingAmps',
    curve: 'curve',
    poles: 'poles',
    description: 'description',
    equipmentName: 'equipmentName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProtectionScalarFieldEnum = (typeof ProtectionScalarFieldEnum)[keyof typeof ProtectionScalarFieldEnum]


  export const CalculationScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    totalInstalledPowerWatts: 'totalInstalledPowerWatts',
    maximumShortCircuitAmps: 'maximumShortCircuitAmps',
    totalOperatingCurrentAmps: 'totalOperatingCurrentAmps',
    totalCircuitCurrentAmps: 'totalCircuitCurrentAmps',
    recommendedSectionMm2: 'recommendedSectionMm2',
    voltageDropPercent: 'voltageDropPercent',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalculationScalarFieldEnum = (typeof CalculationScalarFieldEnum)[keyof typeof CalculationScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BuildingType'
   */
  export type EnumBuildingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildingType'>
    


  /**
   * Reference to a field of type 'BuildingType[]'
   */
  export type ListEnumBuildingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildingType[]'>
    


  /**
   * Reference to a field of type 'CircuitCategory'
   */
  export type EnumCircuitCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircuitCategory'>
    


  /**
   * Reference to a field of type 'CircuitCategory[]'
   */
  export type ListEnumCircuitCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircuitCategory[]'>
    


  /**
   * Reference to a field of type 'ProtectionType'
   */
  export type EnumProtectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProtectionType'>
    


  /**
   * Reference to a field of type 'ProtectionType[]'
   */
  export type ListEnumProtectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProtectionType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    photo?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    twofactorSecret?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    projects?: ProjectListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isTwoFactorEnabled?: SortOrder
    twofactorSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    photo?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    twofactorSecret?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    projects?: ProjectListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isTwoFactorEnabled?: SortOrder
    twofactorSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    twofactorSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_Token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_Token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_Token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_Token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_Token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    session?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    session?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    session?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "session">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    session?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    session?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    reference?: StringNullableFilter<"Project"> | string | null
    customerName?: StringNullableFilter<"Project"> | string | null
    siteAddress?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    objective?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    ownerId?: StringFilter<"Project"> | string
    building?: XOR<BuildingNullableScalarRelationFilter, BuildingWhereInput> | null
    calculations?: CalculationListRelationFilter
    circuits?: CircuitListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    protections?: ProtectionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    siteAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    objective?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    building?: BuildingOrderByWithRelationInput
    calculations?: CalculationOrderByRelationAggregateInput
    circuits?: CircuitOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    protections?: ProtectionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    customerName?: StringNullableFilter<"Project"> | string | null
    siteAddress?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    objective?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    ownerId?: StringFilter<"Project"> | string
    building?: XOR<BuildingNullableScalarRelationFilter, BuildingWhereInput> | null
    calculations?: CalculationListRelationFilter
    circuits?: CircuitListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    protections?: ProtectionListRelationFilter
  }, "id" | "reference">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    siteAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    objective?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    reference?: StringNullableWithAggregatesFilter<"Project"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"Project"> | string | null
    siteAddress?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    objective?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type BuildingWhereInput = {
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    id?: StringFilter<"Building"> | string
    projectId?: StringFilter<"Building"> | string
    surfaceArea?: FloatFilter<"Building"> | number
    numberOfRooms?: IntFilter<"Building"> | number
    supplyVoltage?: StringFilter<"Building"> | string
    phases?: IntFilter<"Building"> | number
    buildingType?: EnumBuildingTypeFilter<"Building"> | $Enums.BuildingType
    usage?: StringNullableFilter<"Building"> | string | null
    comment?: StringNullableFilter<"Building"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type BuildingOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    surfaceArea?: SortOrder
    numberOfRooms?: SortOrder
    supplyVoltage?: SortOrder
    phases?: SortOrder
    buildingType?: SortOrder
    usage?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type BuildingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    surfaceArea?: FloatFilter<"Building"> | number
    numberOfRooms?: IntFilter<"Building"> | number
    supplyVoltage?: StringFilter<"Building"> | string
    phases?: IntFilter<"Building"> | number
    buildingType?: EnumBuildingTypeFilter<"Building"> | $Enums.BuildingType
    usage?: StringNullableFilter<"Building"> | string | null
    comment?: StringNullableFilter<"Building"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type BuildingOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    surfaceArea?: SortOrder
    numberOfRooms?: SortOrder
    supplyVoltage?: SortOrder
    phases?: SortOrder
    buildingType?: SortOrder
    usage?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _avg?: BuildingAvgOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
    _sum?: BuildingSumOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    OR?: BuildingScalarWhereWithAggregatesInput[]
    NOT?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Building"> | string
    projectId?: StringWithAggregatesFilter<"Building"> | string
    surfaceArea?: FloatWithAggregatesFilter<"Building"> | number
    numberOfRooms?: IntWithAggregatesFilter<"Building"> | number
    supplyVoltage?: StringWithAggregatesFilter<"Building"> | string
    phases?: IntWithAggregatesFilter<"Building"> | number
    buildingType?: EnumBuildingTypeWithAggregatesFilter<"Building"> | $Enums.BuildingType
    usage?: StringNullableWithAggregatesFilter<"Building"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Building"> | string | null
  }

  export type CircuitWhereInput = {
    AND?: CircuitWhereInput | CircuitWhereInput[]
    OR?: CircuitWhereInput[]
    NOT?: CircuitWhereInput | CircuitWhereInput[]
    id?: StringFilter<"Circuit"> | string
    projectId?: StringFilter<"Circuit"> | string
    protectionId?: StringNullableFilter<"Circuit"> | string | null
    label?: StringFilter<"Circuit"> | string
    type?: EnumCircuitCategoryFilter<"Circuit"> | $Enums.CircuitCategory
    room?: StringNullableFilter<"Circuit"> | string | null
    quantity?: IntFilter<"Circuit"> | number
    loadWatts?: IntNullableFilter<"Circuit"> | number | null
    loadAmps?: FloatNullableFilter<"Circuit"> | number | null
    shortCircuitCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    operatingCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    circuitTotalCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    cableLengthMeters?: FloatNullableFilter<"Circuit"> | number | null
    conductorSectionMm2?: FloatNullableFilter<"Circuit"> | number | null
    recommendedSectionMm2?: FloatNullableFilter<"Circuit"> | number | null
    voltageDropPercent?: FloatNullableFilter<"Circuit"> | number | null
    numberOfPoles?: IntFilter<"Circuit"> | number
    isDedicated?: BoolFilter<"Circuit"> | boolean
    comment?: StringNullableFilter<"Circuit"> | string | null
    createdAt?: DateTimeFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeFilter<"Circuit"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    protection?: XOR<ProtectionNullableScalarRelationFilter, ProtectionWhereInput> | null
  }

  export type CircuitOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    protectionId?: SortOrderInput | SortOrder
    label?: SortOrder
    type?: SortOrder
    room?: SortOrderInput | SortOrder
    quantity?: SortOrder
    loadWatts?: SortOrderInput | SortOrder
    loadAmps?: SortOrderInput | SortOrder
    shortCircuitCurrentAmps?: SortOrderInput | SortOrder
    operatingCurrentAmps?: SortOrderInput | SortOrder
    circuitTotalCurrentAmps?: SortOrderInput | SortOrder
    cableLengthMeters?: SortOrderInput | SortOrder
    conductorSectionMm2?: SortOrderInput | SortOrder
    recommendedSectionMm2?: SortOrderInput | SortOrder
    voltageDropPercent?: SortOrderInput | SortOrder
    numberOfPoles?: SortOrder
    isDedicated?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    protection?: ProtectionOrderByWithRelationInput
  }

  export type CircuitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircuitWhereInput | CircuitWhereInput[]
    OR?: CircuitWhereInput[]
    NOT?: CircuitWhereInput | CircuitWhereInput[]
    projectId?: StringFilter<"Circuit"> | string
    protectionId?: StringNullableFilter<"Circuit"> | string | null
    label?: StringFilter<"Circuit"> | string
    type?: EnumCircuitCategoryFilter<"Circuit"> | $Enums.CircuitCategory
    room?: StringNullableFilter<"Circuit"> | string | null
    quantity?: IntFilter<"Circuit"> | number
    loadWatts?: IntNullableFilter<"Circuit"> | number | null
    loadAmps?: FloatNullableFilter<"Circuit"> | number | null
    shortCircuitCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    operatingCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    circuitTotalCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    cableLengthMeters?: FloatNullableFilter<"Circuit"> | number | null
    conductorSectionMm2?: FloatNullableFilter<"Circuit"> | number | null
    recommendedSectionMm2?: FloatNullableFilter<"Circuit"> | number | null
    voltageDropPercent?: FloatNullableFilter<"Circuit"> | number | null
    numberOfPoles?: IntFilter<"Circuit"> | number
    isDedicated?: BoolFilter<"Circuit"> | boolean
    comment?: StringNullableFilter<"Circuit"> | string | null
    createdAt?: DateTimeFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeFilter<"Circuit"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    protection?: XOR<ProtectionNullableScalarRelationFilter, ProtectionWhereInput> | null
  }, "id">

  export type CircuitOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    protectionId?: SortOrderInput | SortOrder
    label?: SortOrder
    type?: SortOrder
    room?: SortOrderInput | SortOrder
    quantity?: SortOrder
    loadWatts?: SortOrderInput | SortOrder
    loadAmps?: SortOrderInput | SortOrder
    shortCircuitCurrentAmps?: SortOrderInput | SortOrder
    operatingCurrentAmps?: SortOrderInput | SortOrder
    circuitTotalCurrentAmps?: SortOrderInput | SortOrder
    cableLengthMeters?: SortOrderInput | SortOrder
    conductorSectionMm2?: SortOrderInput | SortOrder
    recommendedSectionMm2?: SortOrderInput | SortOrder
    voltageDropPercent?: SortOrderInput | SortOrder
    numberOfPoles?: SortOrder
    isDedicated?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CircuitCountOrderByAggregateInput
    _avg?: CircuitAvgOrderByAggregateInput
    _max?: CircuitMaxOrderByAggregateInput
    _min?: CircuitMinOrderByAggregateInput
    _sum?: CircuitSumOrderByAggregateInput
  }

  export type CircuitScalarWhereWithAggregatesInput = {
    AND?: CircuitScalarWhereWithAggregatesInput | CircuitScalarWhereWithAggregatesInput[]
    OR?: CircuitScalarWhereWithAggregatesInput[]
    NOT?: CircuitScalarWhereWithAggregatesInput | CircuitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Circuit"> | string
    projectId?: StringWithAggregatesFilter<"Circuit"> | string
    protectionId?: StringNullableWithAggregatesFilter<"Circuit"> | string | null
    label?: StringWithAggregatesFilter<"Circuit"> | string
    type?: EnumCircuitCategoryWithAggregatesFilter<"Circuit"> | $Enums.CircuitCategory
    room?: StringNullableWithAggregatesFilter<"Circuit"> | string | null
    quantity?: IntWithAggregatesFilter<"Circuit"> | number
    loadWatts?: IntNullableWithAggregatesFilter<"Circuit"> | number | null
    loadAmps?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    shortCircuitCurrentAmps?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    operatingCurrentAmps?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    circuitTotalCurrentAmps?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    cableLengthMeters?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    conductorSectionMm2?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    recommendedSectionMm2?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    voltageDropPercent?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    numberOfPoles?: IntWithAggregatesFilter<"Circuit"> | number
    isDedicated?: BoolWithAggregatesFilter<"Circuit"> | boolean
    comment?: StringNullableWithAggregatesFilter<"Circuit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Circuit"> | Date | string
  }

  export type ProtectionWhereInput = {
    AND?: ProtectionWhereInput | ProtectionWhereInput[]
    OR?: ProtectionWhereInput[]
    NOT?: ProtectionWhereInput | ProtectionWhereInput[]
    id?: StringFilter<"Protection"> | string
    projectId?: StringFilter<"Protection"> | string
    type?: EnumProtectionTypeFilter<"Protection"> | $Enums.ProtectionType
    ratingAmps?: IntFilter<"Protection"> | number
    curve?: StringNullableFilter<"Protection"> | string | null
    poles?: IntFilter<"Protection"> | number
    description?: StringNullableFilter<"Protection"> | string | null
    equipmentName?: StringNullableFilter<"Protection"> | string | null
    createdAt?: DateTimeFilter<"Protection"> | Date | string
    updatedAt?: DateTimeFilter<"Protection"> | Date | string
    circuits?: CircuitListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProtectionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratingAmps?: SortOrder
    curve?: SortOrderInput | SortOrder
    poles?: SortOrder
    description?: SortOrderInput | SortOrder
    equipmentName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    circuits?: CircuitOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProtectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProtectionWhereInput | ProtectionWhereInput[]
    OR?: ProtectionWhereInput[]
    NOT?: ProtectionWhereInput | ProtectionWhereInput[]
    projectId?: StringFilter<"Protection"> | string
    type?: EnumProtectionTypeFilter<"Protection"> | $Enums.ProtectionType
    ratingAmps?: IntFilter<"Protection"> | number
    curve?: StringNullableFilter<"Protection"> | string | null
    poles?: IntFilter<"Protection"> | number
    description?: StringNullableFilter<"Protection"> | string | null
    equipmentName?: StringNullableFilter<"Protection"> | string | null
    createdAt?: DateTimeFilter<"Protection"> | Date | string
    updatedAt?: DateTimeFilter<"Protection"> | Date | string
    circuits?: CircuitListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProtectionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratingAmps?: SortOrder
    curve?: SortOrderInput | SortOrder
    poles?: SortOrder
    description?: SortOrderInput | SortOrder
    equipmentName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProtectionCountOrderByAggregateInput
    _avg?: ProtectionAvgOrderByAggregateInput
    _max?: ProtectionMaxOrderByAggregateInput
    _min?: ProtectionMinOrderByAggregateInput
    _sum?: ProtectionSumOrderByAggregateInput
  }

  export type ProtectionScalarWhereWithAggregatesInput = {
    AND?: ProtectionScalarWhereWithAggregatesInput | ProtectionScalarWhereWithAggregatesInput[]
    OR?: ProtectionScalarWhereWithAggregatesInput[]
    NOT?: ProtectionScalarWhereWithAggregatesInput | ProtectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Protection"> | string
    projectId?: StringWithAggregatesFilter<"Protection"> | string
    type?: EnumProtectionTypeWithAggregatesFilter<"Protection"> | $Enums.ProtectionType
    ratingAmps?: IntWithAggregatesFilter<"Protection"> | number
    curve?: StringNullableWithAggregatesFilter<"Protection"> | string | null
    poles?: IntWithAggregatesFilter<"Protection"> | number
    description?: StringNullableWithAggregatesFilter<"Protection"> | string | null
    equipmentName?: StringNullableWithAggregatesFilter<"Protection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Protection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Protection"> | Date | string
  }

  export type CalculationWhereInput = {
    AND?: CalculationWhereInput | CalculationWhereInput[]
    OR?: CalculationWhereInput[]
    NOT?: CalculationWhereInput | CalculationWhereInput[]
    id?: StringFilter<"Calculation"> | string
    projectId?: StringFilter<"Calculation"> | string
    name?: StringFilter<"Calculation"> | string
    totalInstalledPowerWatts?: IntNullableFilter<"Calculation"> | number | null
    maximumShortCircuitAmps?: FloatNullableFilter<"Calculation"> | number | null
    totalOperatingCurrentAmps?: FloatNullableFilter<"Calculation"> | number | null
    totalCircuitCurrentAmps?: FloatNullableFilter<"Calculation"> | number | null
    recommendedSectionMm2?: FloatNullableFilter<"Calculation"> | number | null
    voltageDropPercent?: FloatNullableFilter<"Calculation"> | number | null
    notes?: StringNullableFilter<"Calculation"> | string | null
    createdAt?: DateTimeFilter<"Calculation"> | Date | string
    updatedAt?: DateTimeFilter<"Calculation"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type CalculationOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    totalInstalledPowerWatts?: SortOrderInput | SortOrder
    maximumShortCircuitAmps?: SortOrderInput | SortOrder
    totalOperatingCurrentAmps?: SortOrderInput | SortOrder
    totalCircuitCurrentAmps?: SortOrderInput | SortOrder
    recommendedSectionMm2?: SortOrderInput | SortOrder
    voltageDropPercent?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type CalculationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalculationWhereInput | CalculationWhereInput[]
    OR?: CalculationWhereInput[]
    NOT?: CalculationWhereInput | CalculationWhereInput[]
    projectId?: StringFilter<"Calculation"> | string
    name?: StringFilter<"Calculation"> | string
    totalInstalledPowerWatts?: IntNullableFilter<"Calculation"> | number | null
    maximumShortCircuitAmps?: FloatNullableFilter<"Calculation"> | number | null
    totalOperatingCurrentAmps?: FloatNullableFilter<"Calculation"> | number | null
    totalCircuitCurrentAmps?: FloatNullableFilter<"Calculation"> | number | null
    recommendedSectionMm2?: FloatNullableFilter<"Calculation"> | number | null
    voltageDropPercent?: FloatNullableFilter<"Calculation"> | number | null
    notes?: StringNullableFilter<"Calculation"> | string | null
    createdAt?: DateTimeFilter<"Calculation"> | Date | string
    updatedAt?: DateTimeFilter<"Calculation"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type CalculationOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    totalInstalledPowerWatts?: SortOrderInput | SortOrder
    maximumShortCircuitAmps?: SortOrderInput | SortOrder
    totalOperatingCurrentAmps?: SortOrderInput | SortOrder
    totalCircuitCurrentAmps?: SortOrderInput | SortOrder
    recommendedSectionMm2?: SortOrderInput | SortOrder
    voltageDropPercent?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalculationCountOrderByAggregateInput
    _avg?: CalculationAvgOrderByAggregateInput
    _max?: CalculationMaxOrderByAggregateInput
    _min?: CalculationMinOrderByAggregateInput
    _sum?: CalculationSumOrderByAggregateInput
  }

  export type CalculationScalarWhereWithAggregatesInput = {
    AND?: CalculationScalarWhereWithAggregatesInput | CalculationScalarWhereWithAggregatesInput[]
    OR?: CalculationScalarWhereWithAggregatesInput[]
    NOT?: CalculationScalarWhereWithAggregatesInput | CalculationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Calculation"> | string
    projectId?: StringWithAggregatesFilter<"Calculation"> | string
    name?: StringWithAggregatesFilter<"Calculation"> | string
    totalInstalledPowerWatts?: IntNullableWithAggregatesFilter<"Calculation"> | number | null
    maximumShortCircuitAmps?: FloatNullableWithAggregatesFilter<"Calculation"> | number | null
    totalOperatingCurrentAmps?: FloatNullableWithAggregatesFilter<"Calculation"> | number | null
    totalCircuitCurrentAmps?: FloatNullableWithAggregatesFilter<"Calculation"> | number | null
    recommendedSectionMm2?: FloatNullableWithAggregatesFilter<"Calculation"> | number | null
    voltageDropPercent?: FloatNullableWithAggregatesFilter<"Calculation"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Calculation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Calculation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Calculation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_Token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_Token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_Token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    session: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    session: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    session: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutProjectInput
    calculations?: CalculationCreateNestedManyWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    owner: UserCreateNestedOneWithoutProjectsInput
    protections?: ProtectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    building?: BuildingUncheckedCreateNestedOneWithoutProjectInput
    calculations?: CalculationUncheckedCreateNestedManyWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    protections?: ProtectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    protections?: ProtectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    building?: BuildingUncheckedUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUncheckedUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    protections?: ProtectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingCreateInput = {
    id?: string
    surfaceArea: number
    numberOfRooms: number
    supplyVoltage: string
    phases?: number
    buildingType?: $Enums.BuildingType
    usage?: string | null
    comment?: string | null
    project: ProjectCreateNestedOneWithoutBuildingInput
  }

  export type BuildingUncheckedCreateInput = {
    id?: string
    projectId: string
    surfaceArea: number
    numberOfRooms: number
    supplyVoltage: string
    phases?: number
    buildingType?: $Enums.BuildingType
    usage?: string | null
    comment?: string | null
  }

  export type BuildingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surfaceArea?: FloatFieldUpdateOperationsInput | number
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    supplyVoltage?: StringFieldUpdateOperationsInput | string
    phases?: IntFieldUpdateOperationsInput | number
    buildingType?: EnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    surfaceArea?: FloatFieldUpdateOperationsInput | number
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    supplyVoltage?: StringFieldUpdateOperationsInput | string
    phases?: IntFieldUpdateOperationsInput | number
    buildingType?: EnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildingCreateManyInput = {
    id?: string
    projectId: string
    surfaceArea: number
    numberOfRooms: number
    supplyVoltage: string
    phases?: number
    buildingType?: $Enums.BuildingType
    usage?: string | null
    comment?: string | null
  }

  export type BuildingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surfaceArea?: FloatFieldUpdateOperationsInput | number
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    supplyVoltage?: StringFieldUpdateOperationsInput | string
    phases?: IntFieldUpdateOperationsInput | number
    buildingType?: EnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    surfaceArea?: FloatFieldUpdateOperationsInput | number
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    supplyVoltage?: StringFieldUpdateOperationsInput | string
    phases?: IntFieldUpdateOperationsInput | number
    buildingType?: EnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CircuitCreateInput = {
    id?: string
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCircuitsInput
    protection?: ProtectionCreateNestedOneWithoutCircuitsInput
  }

  export type CircuitUncheckedCreateInput = {
    id?: string
    projectId: string
    protectionId?: string | null
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CircuitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCircuitsNestedInput
    protection?: ProtectionUpdateOneWithoutCircuitsNestedInput
  }

  export type CircuitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    protectionId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitCreateManyInput = {
    id?: string
    projectId: string
    protectionId?: string | null
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CircuitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    protectionId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtectionCreateInput = {
    id?: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    circuits?: CircuitCreateNestedManyWithoutProtectionInput
    project: ProjectCreateNestedOneWithoutProtectionsInput
  }

  export type ProtectionUncheckedCreateInput = {
    id?: string
    projectId: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    circuits?: CircuitUncheckedCreateNestedManyWithoutProtectionInput
  }

  export type ProtectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuits?: CircuitUpdateManyWithoutProtectionNestedInput
    project?: ProjectUpdateOneRequiredWithoutProtectionsNestedInput
  }

  export type ProtectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuits?: CircuitUncheckedUpdateManyWithoutProtectionNestedInput
  }

  export type ProtectionCreateManyInput = {
    id?: string
    projectId: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationCreateInput = {
    id?: string
    name: string
    totalInstalledPowerWatts?: number | null
    maximumShortCircuitAmps?: number | null
    totalOperatingCurrentAmps?: number | null
    totalCircuitCurrentAmps?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCalculationsInput
  }

  export type CalculationUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    totalInstalledPowerWatts?: number | null
    maximumShortCircuitAmps?: number | null
    totalOperatingCurrentAmps?: number | null
    totalCircuitCurrentAmps?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalInstalledPowerWatts?: NullableIntFieldUpdateOperationsInput | number | null
    maximumShortCircuitAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOperatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCalculationsNestedInput
  }

  export type CalculationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalInstalledPowerWatts?: NullableIntFieldUpdateOperationsInput | number | null
    maximumShortCircuitAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOperatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationCreateManyInput = {
    id?: string
    projectId: string
    name: string
    totalInstalledPowerWatts?: number | null
    maximumShortCircuitAmps?: number | null
    totalOperatingCurrentAmps?: number | null
    totalCircuitCurrentAmps?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalInstalledPowerWatts?: NullableIntFieldUpdateOperationsInput | number | null
    maximumShortCircuitAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOperatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalInstalledPowerWatts?: NullableIntFieldUpdateOperationsInput | number | null
    maximumShortCircuitAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOperatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    photo?: SortOrder
    password?: SortOrder
    isTwoFactorEnabled?: SortOrder
    twofactorSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    photo?: SortOrder
    password?: SortOrder
    isTwoFactorEnabled?: SortOrder
    twofactorSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    photo?: SortOrder
    password?: SortOrder
    isTwoFactorEnabled?: SortOrder
    twofactorSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_Token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_Token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_Token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type BuildingNullableScalarRelationFilter = {
    is?: BuildingWhereInput | null
    isNot?: BuildingWhereInput | null
  }

  export type CalculationListRelationFilter = {
    every?: CalculationWhereInput
    some?: CalculationWhereInput
    none?: CalculationWhereInput
  }

  export type CircuitListRelationFilter = {
    every?: CircuitWhereInput
    some?: CircuitWhereInput
    none?: CircuitWhereInput
  }

  export type ProtectionListRelationFilter = {
    every?: ProtectionWhereInput
    some?: ProtectionWhereInput
    none?: ProtectionWhereInput
  }

  export type CalculationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircuitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProtectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    siteAddress?: SortOrder
    status?: SortOrder
    objective?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    siteAddress?: SortOrder
    status?: SortOrder
    objective?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    siteAddress?: SortOrder
    status?: SortOrder
    objective?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type EnumBuildingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildingTypeFilter<$PrismaModel> | $Enums.BuildingType
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type BuildingCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    surfaceArea?: SortOrder
    numberOfRooms?: SortOrder
    supplyVoltage?: SortOrder
    phases?: SortOrder
    buildingType?: SortOrder
    usage?: SortOrder
    comment?: SortOrder
  }

  export type BuildingAvgOrderByAggregateInput = {
    surfaceArea?: SortOrder
    numberOfRooms?: SortOrder
    phases?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    surfaceArea?: SortOrder
    numberOfRooms?: SortOrder
    supplyVoltage?: SortOrder
    phases?: SortOrder
    buildingType?: SortOrder
    usage?: SortOrder
    comment?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    surfaceArea?: SortOrder
    numberOfRooms?: SortOrder
    supplyVoltage?: SortOrder
    phases?: SortOrder
    buildingType?: SortOrder
    usage?: SortOrder
    comment?: SortOrder
  }

  export type BuildingSumOrderByAggregateInput = {
    surfaceArea?: SortOrder
    numberOfRooms?: SortOrder
    phases?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumBuildingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildingTypeWithAggregatesFilter<$PrismaModel> | $Enums.BuildingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildingTypeFilter<$PrismaModel>
    _max?: NestedEnumBuildingTypeFilter<$PrismaModel>
  }

  export type EnumCircuitCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitCategory | EnumCircuitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitCategoryFilter<$PrismaModel> | $Enums.CircuitCategory
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProtectionNullableScalarRelationFilter = {
    is?: ProtectionWhereInput | null
    isNot?: ProtectionWhereInput | null
  }

  export type CircuitCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    protectionId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    room?: SortOrder
    quantity?: SortOrder
    loadWatts?: SortOrder
    loadAmps?: SortOrder
    shortCircuitCurrentAmps?: SortOrder
    operatingCurrentAmps?: SortOrder
    circuitTotalCurrentAmps?: SortOrder
    cableLengthMeters?: SortOrder
    conductorSectionMm2?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    numberOfPoles?: SortOrder
    isDedicated?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CircuitAvgOrderByAggregateInput = {
    quantity?: SortOrder
    loadWatts?: SortOrder
    loadAmps?: SortOrder
    shortCircuitCurrentAmps?: SortOrder
    operatingCurrentAmps?: SortOrder
    circuitTotalCurrentAmps?: SortOrder
    cableLengthMeters?: SortOrder
    conductorSectionMm2?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    numberOfPoles?: SortOrder
  }

  export type CircuitMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    protectionId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    room?: SortOrder
    quantity?: SortOrder
    loadWatts?: SortOrder
    loadAmps?: SortOrder
    shortCircuitCurrentAmps?: SortOrder
    operatingCurrentAmps?: SortOrder
    circuitTotalCurrentAmps?: SortOrder
    cableLengthMeters?: SortOrder
    conductorSectionMm2?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    numberOfPoles?: SortOrder
    isDedicated?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CircuitMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    protectionId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    room?: SortOrder
    quantity?: SortOrder
    loadWatts?: SortOrder
    loadAmps?: SortOrder
    shortCircuitCurrentAmps?: SortOrder
    operatingCurrentAmps?: SortOrder
    circuitTotalCurrentAmps?: SortOrder
    cableLengthMeters?: SortOrder
    conductorSectionMm2?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    numberOfPoles?: SortOrder
    isDedicated?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CircuitSumOrderByAggregateInput = {
    quantity?: SortOrder
    loadWatts?: SortOrder
    loadAmps?: SortOrder
    shortCircuitCurrentAmps?: SortOrder
    operatingCurrentAmps?: SortOrder
    circuitTotalCurrentAmps?: SortOrder
    cableLengthMeters?: SortOrder
    conductorSectionMm2?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    numberOfPoles?: SortOrder
  }

  export type EnumCircuitCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitCategory | EnumCircuitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CircuitCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircuitCategoryFilter<$PrismaModel>
    _max?: NestedEnumCircuitCategoryFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumProtectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProtectionTypeFilter<$PrismaModel> | $Enums.ProtectionType
  }

  export type ProtectionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratingAmps?: SortOrder
    curve?: SortOrder
    poles?: SortOrder
    description?: SortOrder
    equipmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProtectionAvgOrderByAggregateInput = {
    ratingAmps?: SortOrder
    poles?: SortOrder
  }

  export type ProtectionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratingAmps?: SortOrder
    curve?: SortOrder
    poles?: SortOrder
    description?: SortOrder
    equipmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProtectionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratingAmps?: SortOrder
    curve?: SortOrder
    poles?: SortOrder
    description?: SortOrder
    equipmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProtectionSumOrderByAggregateInput = {
    ratingAmps?: SortOrder
    poles?: SortOrder
  }

  export type EnumProtectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProtectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProtectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProtectionTypeFilter<$PrismaModel>
    _max?: NestedEnumProtectionTypeFilter<$PrismaModel>
  }

  export type CalculationCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    totalInstalledPowerWatts?: SortOrder
    maximumShortCircuitAmps?: SortOrder
    totalOperatingCurrentAmps?: SortOrder
    totalCircuitCurrentAmps?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalculationAvgOrderByAggregateInput = {
    totalInstalledPowerWatts?: SortOrder
    maximumShortCircuitAmps?: SortOrder
    totalOperatingCurrentAmps?: SortOrder
    totalCircuitCurrentAmps?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
  }

  export type CalculationMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    totalInstalledPowerWatts?: SortOrder
    maximumShortCircuitAmps?: SortOrder
    totalOperatingCurrentAmps?: SortOrder
    totalCircuitCurrentAmps?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalculationMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    totalInstalledPowerWatts?: SortOrder
    maximumShortCircuitAmps?: SortOrder
    totalOperatingCurrentAmps?: SortOrder
    totalCircuitCurrentAmps?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalculationSumOrderByAggregateInput = {
    totalInstalledPowerWatts?: SortOrder
    maximumShortCircuitAmps?: SortOrder
    totalOperatingCurrentAmps?: SortOrder
    totalCircuitCurrentAmps?: SortOrder
    recommendedSectionMm2?: SortOrder
    voltageDropPercent?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type BuildingCreateNestedOneWithoutProjectInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput
    connect?: BuildingWhereUniqueInput
  }

  export type CalculationCreateNestedManyWithoutProjectInput = {
    create?: XOR<CalculationCreateWithoutProjectInput, CalculationUncheckedCreateWithoutProjectInput> | CalculationCreateWithoutProjectInput[] | CalculationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CalculationCreateOrConnectWithoutProjectInput | CalculationCreateOrConnectWithoutProjectInput[]
    createMany?: CalculationCreateManyProjectInputEnvelope
    connect?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
  }

  export type CircuitCreateNestedManyWithoutProjectInput = {
    create?: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput> | CircuitCreateWithoutProjectInput[] | CircuitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProjectInput | CircuitCreateOrConnectWithoutProjectInput[]
    createMany?: CircuitCreateManyProjectInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProtectionCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput> | ProtectionCreateWithoutProjectInput[] | ProtectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput | ProtectionCreateOrConnectWithoutProjectInput[]
    createMany?: ProtectionCreateManyProjectInputEnvelope
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
  }

  export type BuildingUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput
    connect?: BuildingWhereUniqueInput
  }

  export type CalculationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CalculationCreateWithoutProjectInput, CalculationUncheckedCreateWithoutProjectInput> | CalculationCreateWithoutProjectInput[] | CalculationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CalculationCreateOrConnectWithoutProjectInput | CalculationCreateOrConnectWithoutProjectInput[]
    createMany?: CalculationCreateManyProjectInputEnvelope
    connect?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
  }

  export type CircuitUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput> | CircuitCreateWithoutProjectInput[] | CircuitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProjectInput | CircuitCreateOrConnectWithoutProjectInput[]
    createMany?: CircuitCreateManyProjectInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type ProtectionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput> | ProtectionCreateWithoutProjectInput[] | ProtectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput | ProtectionCreateOrConnectWithoutProjectInput[]
    createMany?: ProtectionCreateManyProjectInputEnvelope
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type BuildingUpdateOneWithoutProjectNestedInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput
    upsert?: BuildingUpsertWithoutProjectInput
    disconnect?: BuildingWhereInput | boolean
    delete?: BuildingWhereInput | boolean
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutProjectInput, BuildingUpdateWithoutProjectInput>, BuildingUncheckedUpdateWithoutProjectInput>
  }

  export type CalculationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CalculationCreateWithoutProjectInput, CalculationUncheckedCreateWithoutProjectInput> | CalculationCreateWithoutProjectInput[] | CalculationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CalculationCreateOrConnectWithoutProjectInput | CalculationCreateOrConnectWithoutProjectInput[]
    upsert?: CalculationUpsertWithWhereUniqueWithoutProjectInput | CalculationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CalculationCreateManyProjectInputEnvelope
    set?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    disconnect?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    delete?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    connect?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    update?: CalculationUpdateWithWhereUniqueWithoutProjectInput | CalculationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CalculationUpdateManyWithWhereWithoutProjectInput | CalculationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CalculationScalarWhereInput | CalculationScalarWhereInput[]
  }

  export type CircuitUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput> | CircuitCreateWithoutProjectInput[] | CircuitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProjectInput | CircuitCreateOrConnectWithoutProjectInput[]
    upsert?: CircuitUpsertWithWhereUniqueWithoutProjectInput | CircuitUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CircuitCreateManyProjectInputEnvelope
    set?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    disconnect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    delete?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    update?: CircuitUpdateWithWhereUniqueWithoutProjectInput | CircuitUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CircuitUpdateManyWithWhereWithoutProjectInput | CircuitUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProtectionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput> | ProtectionCreateWithoutProjectInput[] | ProtectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput | ProtectionCreateOrConnectWithoutProjectInput[]
    upsert?: ProtectionUpsertWithWhereUniqueWithoutProjectInput | ProtectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProtectionCreateManyProjectInputEnvelope
    set?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    disconnect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    delete?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    update?: ProtectionUpdateWithWhereUniqueWithoutProjectInput | ProtectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProtectionUpdateManyWithWhereWithoutProjectInput | ProtectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
  }

  export type BuildingUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput
    upsert?: BuildingUpsertWithoutProjectInput
    disconnect?: BuildingWhereInput | boolean
    delete?: BuildingWhereInput | boolean
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutProjectInput, BuildingUpdateWithoutProjectInput>, BuildingUncheckedUpdateWithoutProjectInput>
  }

  export type CalculationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CalculationCreateWithoutProjectInput, CalculationUncheckedCreateWithoutProjectInput> | CalculationCreateWithoutProjectInput[] | CalculationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CalculationCreateOrConnectWithoutProjectInput | CalculationCreateOrConnectWithoutProjectInput[]
    upsert?: CalculationUpsertWithWhereUniqueWithoutProjectInput | CalculationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CalculationCreateManyProjectInputEnvelope
    set?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    disconnect?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    delete?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    connect?: CalculationWhereUniqueInput | CalculationWhereUniqueInput[]
    update?: CalculationUpdateWithWhereUniqueWithoutProjectInput | CalculationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CalculationUpdateManyWithWhereWithoutProjectInput | CalculationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CalculationScalarWhereInput | CalculationScalarWhereInput[]
  }

  export type CircuitUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput> | CircuitCreateWithoutProjectInput[] | CircuitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProjectInput | CircuitCreateOrConnectWithoutProjectInput[]
    upsert?: CircuitUpsertWithWhereUniqueWithoutProjectInput | CircuitUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CircuitCreateManyProjectInputEnvelope
    set?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    disconnect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    delete?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    update?: CircuitUpdateWithWhereUniqueWithoutProjectInput | CircuitUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CircuitUpdateManyWithWhereWithoutProjectInput | CircuitUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
  }

  export type ProtectionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput> | ProtectionCreateWithoutProjectInput[] | ProtectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput | ProtectionCreateOrConnectWithoutProjectInput[]
    upsert?: ProtectionUpsertWithWhereUniqueWithoutProjectInput | ProtectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProtectionCreateManyProjectInputEnvelope
    set?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    disconnect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    delete?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    update?: ProtectionUpdateWithWhereUniqueWithoutProjectInput | ProtectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProtectionUpdateManyWithWhereWithoutProjectInput | ProtectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutBuildingInput = {
    create?: XOR<ProjectCreateWithoutBuildingInput, ProjectUncheckedCreateWithoutBuildingInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildingInput
    connect?: ProjectWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBuildingTypeFieldUpdateOperationsInput = {
    set?: $Enums.BuildingType
  }

  export type ProjectUpdateOneRequiredWithoutBuildingNestedInput = {
    create?: XOR<ProjectCreateWithoutBuildingInput, ProjectUncheckedCreateWithoutBuildingInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildingInput
    upsert?: ProjectUpsertWithoutBuildingInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBuildingInput, ProjectUpdateWithoutBuildingInput>, ProjectUncheckedUpdateWithoutBuildingInput>
  }

  export type ProjectCreateNestedOneWithoutCircuitsInput = {
    create?: XOR<ProjectCreateWithoutCircuitsInput, ProjectUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCircuitsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProtectionCreateNestedOneWithoutCircuitsInput = {
    create?: XOR<ProtectionCreateWithoutCircuitsInput, ProtectionUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: ProtectionCreateOrConnectWithoutCircuitsInput
    connect?: ProtectionWhereUniqueInput
  }

  export type EnumCircuitCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CircuitCategory
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutCircuitsNestedInput = {
    create?: XOR<ProjectCreateWithoutCircuitsInput, ProjectUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCircuitsInput
    upsert?: ProjectUpsertWithoutCircuitsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCircuitsInput, ProjectUpdateWithoutCircuitsInput>, ProjectUncheckedUpdateWithoutCircuitsInput>
  }

  export type ProtectionUpdateOneWithoutCircuitsNestedInput = {
    create?: XOR<ProtectionCreateWithoutCircuitsInput, ProtectionUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: ProtectionCreateOrConnectWithoutCircuitsInput
    upsert?: ProtectionUpsertWithoutCircuitsInput
    disconnect?: ProtectionWhereInput | boolean
    delete?: ProtectionWhereInput | boolean
    connect?: ProtectionWhereUniqueInput
    update?: XOR<XOR<ProtectionUpdateToOneWithWhereWithoutCircuitsInput, ProtectionUpdateWithoutCircuitsInput>, ProtectionUncheckedUpdateWithoutCircuitsInput>
  }

  export type CircuitCreateNestedManyWithoutProtectionInput = {
    create?: XOR<CircuitCreateWithoutProtectionInput, CircuitUncheckedCreateWithoutProtectionInput> | CircuitCreateWithoutProtectionInput[] | CircuitUncheckedCreateWithoutProtectionInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProtectionInput | CircuitCreateOrConnectWithoutProtectionInput[]
    createMany?: CircuitCreateManyProtectionInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type ProjectCreateNestedOneWithoutProtectionsInput = {
    create?: XOR<ProjectCreateWithoutProtectionsInput, ProjectUncheckedCreateWithoutProtectionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProtectionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type CircuitUncheckedCreateNestedManyWithoutProtectionInput = {
    create?: XOR<CircuitCreateWithoutProtectionInput, CircuitUncheckedCreateWithoutProtectionInput> | CircuitCreateWithoutProtectionInput[] | CircuitUncheckedCreateWithoutProtectionInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProtectionInput | CircuitCreateOrConnectWithoutProtectionInput[]
    createMany?: CircuitCreateManyProtectionInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type EnumProtectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProtectionType
  }

  export type CircuitUpdateManyWithoutProtectionNestedInput = {
    create?: XOR<CircuitCreateWithoutProtectionInput, CircuitUncheckedCreateWithoutProtectionInput> | CircuitCreateWithoutProtectionInput[] | CircuitUncheckedCreateWithoutProtectionInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProtectionInput | CircuitCreateOrConnectWithoutProtectionInput[]
    upsert?: CircuitUpsertWithWhereUniqueWithoutProtectionInput | CircuitUpsertWithWhereUniqueWithoutProtectionInput[]
    createMany?: CircuitCreateManyProtectionInputEnvelope
    set?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    disconnect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    delete?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    update?: CircuitUpdateWithWhereUniqueWithoutProtectionInput | CircuitUpdateWithWhereUniqueWithoutProtectionInput[]
    updateMany?: CircuitUpdateManyWithWhereWithoutProtectionInput | CircuitUpdateManyWithWhereWithoutProtectionInput[]
    deleteMany?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
  }

  export type ProjectUpdateOneRequiredWithoutProtectionsNestedInput = {
    create?: XOR<ProjectCreateWithoutProtectionsInput, ProjectUncheckedCreateWithoutProtectionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProtectionsInput
    upsert?: ProjectUpsertWithoutProtectionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProtectionsInput, ProjectUpdateWithoutProtectionsInput>, ProjectUncheckedUpdateWithoutProtectionsInput>
  }

  export type CircuitUncheckedUpdateManyWithoutProtectionNestedInput = {
    create?: XOR<CircuitCreateWithoutProtectionInput, CircuitUncheckedCreateWithoutProtectionInput> | CircuitCreateWithoutProtectionInput[] | CircuitUncheckedCreateWithoutProtectionInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProtectionInput | CircuitCreateOrConnectWithoutProtectionInput[]
    upsert?: CircuitUpsertWithWhereUniqueWithoutProtectionInput | CircuitUpsertWithWhereUniqueWithoutProtectionInput[]
    createMany?: CircuitCreateManyProtectionInputEnvelope
    set?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    disconnect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    delete?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    update?: CircuitUpdateWithWhereUniqueWithoutProtectionInput | CircuitUpdateWithWhereUniqueWithoutProtectionInput[]
    updateMany?: CircuitUpdateManyWithWhereWithoutProtectionInput | CircuitUpdateManyWithWhereWithoutProtectionInput[]
    deleteMany?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutCalculationsInput = {
    create?: XOR<ProjectCreateWithoutCalculationsInput, ProjectUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCalculationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutCalculationsNestedInput = {
    create?: XOR<ProjectCreateWithoutCalculationsInput, ProjectUncheckedCreateWithoutCalculationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCalculationsInput
    upsert?: ProjectUpsertWithoutCalculationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCalculationsInput, ProjectUpdateWithoutCalculationsInput>, ProjectUncheckedUpdateWithoutCalculationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
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

  export type NestedEnumBuildingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildingTypeFilter<$PrismaModel> | $Enums.BuildingType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumBuildingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildingTypeWithAggregatesFilter<$PrismaModel> | $Enums.BuildingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildingTypeFilter<$PrismaModel>
    _max?: NestedEnumBuildingTypeFilter<$PrismaModel>
  }

  export type NestedEnumCircuitCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitCategory | EnumCircuitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitCategoryFilter<$PrismaModel> | $Enums.CircuitCategory
  }

  export type NestedEnumCircuitCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitCategory | EnumCircuitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitCategory[] | ListEnumCircuitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CircuitCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircuitCategoryFilter<$PrismaModel>
    _max?: NestedEnumCircuitCategoryFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumProtectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProtectionTypeFilter<$PrismaModel> | $Enums.ProtectionType
  }

  export type NestedEnumProtectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProtectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProtectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProtectionTypeFilter<$PrismaModel>
    _max?: NestedEnumProtectionTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_Token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_Token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutProjectInput
    calculations?: CalculationCreateNestedManyWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    protections?: ProtectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingUncheckedCreateNestedOneWithoutProjectInput
    calculations?: CalculationUncheckedCreateNestedManyWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    protections?: ProtectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    session: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    session: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_Token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    reference?: StringNullableFilter<"Project"> | string | null
    customerName?: StringNullableFilter<"Project"> | string | null
    siteAddress?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    objective?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    ownerId?: StringFilter<"Project"> | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    session?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BuildingCreateWithoutProjectInput = {
    id?: string
    surfaceArea: number
    numberOfRooms: number
    supplyVoltage: string
    phases?: number
    buildingType?: $Enums.BuildingType
    usage?: string | null
    comment?: string | null
  }

  export type BuildingUncheckedCreateWithoutProjectInput = {
    id?: string
    surfaceArea: number
    numberOfRooms: number
    supplyVoltage: string
    phases?: number
    buildingType?: $Enums.BuildingType
    usage?: string | null
    comment?: string | null
  }

  export type BuildingCreateOrConnectWithoutProjectInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
  }

  export type CalculationCreateWithoutProjectInput = {
    id?: string
    name: string
    totalInstalledPowerWatts?: number | null
    maximumShortCircuitAmps?: number | null
    totalOperatingCurrentAmps?: number | null
    totalCircuitCurrentAmps?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    totalInstalledPowerWatts?: number | null
    maximumShortCircuitAmps?: number | null
    totalOperatingCurrentAmps?: number | null
    totalCircuitCurrentAmps?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationCreateOrConnectWithoutProjectInput = {
    where: CalculationWhereUniqueInput
    create: XOR<CalculationCreateWithoutProjectInput, CalculationUncheckedCreateWithoutProjectInput>
  }

  export type CalculationCreateManyProjectInputEnvelope = {
    data: CalculationCreateManyProjectInput | CalculationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CircuitCreateWithoutProjectInput = {
    id?: string
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    protection?: ProtectionCreateNestedOneWithoutCircuitsInput
  }

  export type CircuitUncheckedCreateWithoutProjectInput = {
    id?: string
    protectionId?: string | null
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CircuitCreateOrConnectWithoutProjectInput = {
    where: CircuitWhereUniqueInput
    create: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput>
  }

  export type CircuitCreateManyProjectInputEnvelope = {
    data: CircuitCreateManyProjectInput | CircuitCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    photo?: string | null
    password?: string | null
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProtectionCreateWithoutProjectInput = {
    id?: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    circuits?: CircuitCreateNestedManyWithoutProtectionInput
  }

  export type ProtectionUncheckedCreateWithoutProjectInput = {
    id?: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    circuits?: CircuitUncheckedCreateNestedManyWithoutProtectionInput
  }

  export type ProtectionCreateOrConnectWithoutProjectInput = {
    where: ProtectionWhereUniqueInput
    create: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
  }

  export type ProtectionCreateManyProjectInputEnvelope = {
    data: ProtectionCreateManyProjectInput | ProtectionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type BuildingUpsertWithoutProjectInput = {
    update: XOR<BuildingUpdateWithoutProjectInput, BuildingUncheckedUpdateWithoutProjectInput>
    create: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
    where?: BuildingWhereInput
  }

  export type BuildingUpdateToOneWithWhereWithoutProjectInput = {
    where?: BuildingWhereInput
    data: XOR<BuildingUpdateWithoutProjectInput, BuildingUncheckedUpdateWithoutProjectInput>
  }

  export type BuildingUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    surfaceArea?: FloatFieldUpdateOperationsInput | number
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    supplyVoltage?: StringFieldUpdateOperationsInput | string
    phases?: IntFieldUpdateOperationsInput | number
    buildingType?: EnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildingUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    surfaceArea?: FloatFieldUpdateOperationsInput | number
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    supplyVoltage?: StringFieldUpdateOperationsInput | string
    phases?: IntFieldUpdateOperationsInput | number
    buildingType?: EnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalculationUpsertWithWhereUniqueWithoutProjectInput = {
    where: CalculationWhereUniqueInput
    update: XOR<CalculationUpdateWithoutProjectInput, CalculationUncheckedUpdateWithoutProjectInput>
    create: XOR<CalculationCreateWithoutProjectInput, CalculationUncheckedCreateWithoutProjectInput>
  }

  export type CalculationUpdateWithWhereUniqueWithoutProjectInput = {
    where: CalculationWhereUniqueInput
    data: XOR<CalculationUpdateWithoutProjectInput, CalculationUncheckedUpdateWithoutProjectInput>
  }

  export type CalculationUpdateManyWithWhereWithoutProjectInput = {
    where: CalculationScalarWhereInput
    data: XOR<CalculationUpdateManyMutationInput, CalculationUncheckedUpdateManyWithoutProjectInput>
  }

  export type CalculationScalarWhereInput = {
    AND?: CalculationScalarWhereInput | CalculationScalarWhereInput[]
    OR?: CalculationScalarWhereInput[]
    NOT?: CalculationScalarWhereInput | CalculationScalarWhereInput[]
    id?: StringFilter<"Calculation"> | string
    projectId?: StringFilter<"Calculation"> | string
    name?: StringFilter<"Calculation"> | string
    totalInstalledPowerWatts?: IntNullableFilter<"Calculation"> | number | null
    maximumShortCircuitAmps?: FloatNullableFilter<"Calculation"> | number | null
    totalOperatingCurrentAmps?: FloatNullableFilter<"Calculation"> | number | null
    totalCircuitCurrentAmps?: FloatNullableFilter<"Calculation"> | number | null
    recommendedSectionMm2?: FloatNullableFilter<"Calculation"> | number | null
    voltageDropPercent?: FloatNullableFilter<"Calculation"> | number | null
    notes?: StringNullableFilter<"Calculation"> | string | null
    createdAt?: DateTimeFilter<"Calculation"> | Date | string
    updatedAt?: DateTimeFilter<"Calculation"> | Date | string
  }

  export type CircuitUpsertWithWhereUniqueWithoutProjectInput = {
    where: CircuitWhereUniqueInput
    update: XOR<CircuitUpdateWithoutProjectInput, CircuitUncheckedUpdateWithoutProjectInput>
    create: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput>
  }

  export type CircuitUpdateWithWhereUniqueWithoutProjectInput = {
    where: CircuitWhereUniqueInput
    data: XOR<CircuitUpdateWithoutProjectInput, CircuitUncheckedUpdateWithoutProjectInput>
  }

  export type CircuitUpdateManyWithWhereWithoutProjectInput = {
    where: CircuitScalarWhereInput
    data: XOR<CircuitUpdateManyMutationInput, CircuitUncheckedUpdateManyWithoutProjectInput>
  }

  export type CircuitScalarWhereInput = {
    AND?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
    OR?: CircuitScalarWhereInput[]
    NOT?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
    id?: StringFilter<"Circuit"> | string
    projectId?: StringFilter<"Circuit"> | string
    protectionId?: StringNullableFilter<"Circuit"> | string | null
    label?: StringFilter<"Circuit"> | string
    type?: EnumCircuitCategoryFilter<"Circuit"> | $Enums.CircuitCategory
    room?: StringNullableFilter<"Circuit"> | string | null
    quantity?: IntFilter<"Circuit"> | number
    loadWatts?: IntNullableFilter<"Circuit"> | number | null
    loadAmps?: FloatNullableFilter<"Circuit"> | number | null
    shortCircuitCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    operatingCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    circuitTotalCurrentAmps?: FloatNullableFilter<"Circuit"> | number | null
    cableLengthMeters?: FloatNullableFilter<"Circuit"> | number | null
    conductorSectionMm2?: FloatNullableFilter<"Circuit"> | number | null
    recommendedSectionMm2?: FloatNullableFilter<"Circuit"> | number | null
    voltageDropPercent?: FloatNullableFilter<"Circuit"> | number | null
    numberOfPoles?: IntFilter<"Circuit"> | number
    isDedicated?: BoolFilter<"Circuit"> | boolean
    comment?: StringNullableFilter<"Circuit"> | string | null
    createdAt?: DateTimeFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeFilter<"Circuit"> | Date | string
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProtectionUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProtectionWhereUniqueInput
    update: XOR<ProtectionUpdateWithoutProjectInput, ProtectionUncheckedUpdateWithoutProjectInput>
    create: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
  }

  export type ProtectionUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProtectionWhereUniqueInput
    data: XOR<ProtectionUpdateWithoutProjectInput, ProtectionUncheckedUpdateWithoutProjectInput>
  }

  export type ProtectionUpdateManyWithWhereWithoutProjectInput = {
    where: ProtectionScalarWhereInput
    data: XOR<ProtectionUpdateManyMutationInput, ProtectionUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProtectionScalarWhereInput = {
    AND?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
    OR?: ProtectionScalarWhereInput[]
    NOT?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
    id?: StringFilter<"Protection"> | string
    projectId?: StringFilter<"Protection"> | string
    type?: EnumProtectionTypeFilter<"Protection"> | $Enums.ProtectionType
    ratingAmps?: IntFilter<"Protection"> | number
    curve?: StringNullableFilter<"Protection"> | string | null
    poles?: IntFilter<"Protection"> | number
    description?: StringNullableFilter<"Protection"> | string | null
    equipmentName?: StringNullableFilter<"Protection"> | string | null
    createdAt?: DateTimeFilter<"Protection"> | Date | string
    updatedAt?: DateTimeFilter<"Protection"> | Date | string
  }

  export type ProjectCreateWithoutBuildingInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calculations?: CalculationCreateNestedManyWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    owner: UserCreateNestedOneWithoutProjectsInput
    protections?: ProtectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBuildingInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    calculations?: CalculationUncheckedCreateNestedManyWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    protections?: ProtectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBuildingInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBuildingInput, ProjectUncheckedCreateWithoutBuildingInput>
  }

  export type ProjectUpsertWithoutBuildingInput = {
    update: XOR<ProjectUpdateWithoutBuildingInput, ProjectUncheckedUpdateWithoutBuildingInput>
    create: XOR<ProjectCreateWithoutBuildingInput, ProjectUncheckedCreateWithoutBuildingInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBuildingInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBuildingInput, ProjectUncheckedUpdateWithoutBuildingInput>
  }

  export type ProjectUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calculations?: CalculationUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    protections?: ProtectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    calculations?: CalculationUncheckedUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    protections?: ProtectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutCircuitsInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutProjectInput
    calculations?: CalculationCreateNestedManyWithoutProjectInput
    owner: UserCreateNestedOneWithoutProjectsInput
    protections?: ProtectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCircuitsInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    building?: BuildingUncheckedCreateNestedOneWithoutProjectInput
    calculations?: CalculationUncheckedCreateNestedManyWithoutProjectInput
    protections?: ProtectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCircuitsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCircuitsInput, ProjectUncheckedCreateWithoutCircuitsInput>
  }

  export type ProtectionCreateWithoutCircuitsInput = {
    id?: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProtectionsInput
  }

  export type ProtectionUncheckedCreateWithoutCircuitsInput = {
    id?: string
    projectId: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtectionCreateOrConnectWithoutCircuitsInput = {
    where: ProtectionWhereUniqueInput
    create: XOR<ProtectionCreateWithoutCircuitsInput, ProtectionUncheckedCreateWithoutCircuitsInput>
  }

  export type ProjectUpsertWithoutCircuitsInput = {
    update: XOR<ProjectUpdateWithoutCircuitsInput, ProjectUncheckedUpdateWithoutCircuitsInput>
    create: XOR<ProjectCreateWithoutCircuitsInput, ProjectUncheckedCreateWithoutCircuitsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCircuitsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCircuitsInput, ProjectUncheckedUpdateWithoutCircuitsInput>
  }

  export type ProjectUpdateWithoutCircuitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUpdateManyWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    protections?: ProtectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCircuitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    building?: BuildingUncheckedUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUncheckedUpdateManyWithoutProjectNestedInput
    protections?: ProtectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProtectionUpsertWithoutCircuitsInput = {
    update: XOR<ProtectionUpdateWithoutCircuitsInput, ProtectionUncheckedUpdateWithoutCircuitsInput>
    create: XOR<ProtectionCreateWithoutCircuitsInput, ProtectionUncheckedCreateWithoutCircuitsInput>
    where?: ProtectionWhereInput
  }

  export type ProtectionUpdateToOneWithWhereWithoutCircuitsInput = {
    where?: ProtectionWhereInput
    data: XOR<ProtectionUpdateWithoutCircuitsInput, ProtectionUncheckedUpdateWithoutCircuitsInput>
  }

  export type ProtectionUpdateWithoutCircuitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProtectionsNestedInput
  }

  export type ProtectionUncheckedUpdateWithoutCircuitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitCreateWithoutProtectionInput = {
    id?: string
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCircuitsInput
  }

  export type CircuitUncheckedCreateWithoutProtectionInput = {
    id?: string
    projectId: string
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CircuitCreateOrConnectWithoutProtectionInput = {
    where: CircuitWhereUniqueInput
    create: XOR<CircuitCreateWithoutProtectionInput, CircuitUncheckedCreateWithoutProtectionInput>
  }

  export type CircuitCreateManyProtectionInputEnvelope = {
    data: CircuitCreateManyProtectionInput | CircuitCreateManyProtectionInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutProtectionsInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutProjectInput
    calculations?: CalculationCreateNestedManyWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    owner: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutProtectionsInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    building?: BuildingUncheckedCreateNestedOneWithoutProjectInput
    calculations?: CalculationUncheckedCreateNestedManyWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProtectionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProtectionsInput, ProjectUncheckedCreateWithoutProtectionsInput>
  }

  export type CircuitUpsertWithWhereUniqueWithoutProtectionInput = {
    where: CircuitWhereUniqueInput
    update: XOR<CircuitUpdateWithoutProtectionInput, CircuitUncheckedUpdateWithoutProtectionInput>
    create: XOR<CircuitCreateWithoutProtectionInput, CircuitUncheckedCreateWithoutProtectionInput>
  }

  export type CircuitUpdateWithWhereUniqueWithoutProtectionInput = {
    where: CircuitWhereUniqueInput
    data: XOR<CircuitUpdateWithoutProtectionInput, CircuitUncheckedUpdateWithoutProtectionInput>
  }

  export type CircuitUpdateManyWithWhereWithoutProtectionInput = {
    where: CircuitScalarWhereInput
    data: XOR<CircuitUpdateManyMutationInput, CircuitUncheckedUpdateManyWithoutProtectionInput>
  }

  export type ProjectUpsertWithoutProtectionsInput = {
    update: XOR<ProjectUpdateWithoutProtectionsInput, ProjectUncheckedUpdateWithoutProtectionsInput>
    create: XOR<ProjectCreateWithoutProtectionsInput, ProjectUncheckedCreateWithoutProtectionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProtectionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProtectionsInput, ProjectUncheckedUpdateWithoutProtectionsInput>
  }

  export type ProjectUpdateWithoutProtectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProtectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    building?: BuildingUncheckedUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUncheckedUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutCalculationsInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    owner: UserCreateNestedOneWithoutProjectsInput
    protections?: ProtectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCalculationsInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    building?: BuildingUncheckedCreateNestedOneWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    protections?: ProtectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCalculationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCalculationsInput, ProjectUncheckedCreateWithoutCalculationsInput>
  }

  export type ProjectUpsertWithoutCalculationsInput = {
    update: XOR<ProjectUpdateWithoutCalculationsInput, ProjectUncheckedUpdateWithoutCalculationsInput>
    create: XOR<ProjectCreateWithoutCalculationsInput, ProjectUncheckedCreateWithoutCalculationsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCalculationsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCalculationsInput, ProjectUncheckedUpdateWithoutCalculationsInput>
  }

  export type ProjectUpdateWithoutCalculationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    protections?: ProtectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCalculationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    building?: BuildingUncheckedUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    protections?: ProtectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_Token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    reference?: string | null
    customerName?: string | null
    siteAddress?: string | null
    status?: $Enums.ProjectStatus
    objective?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    session: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    protections?: ProtectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUncheckedUpdateOneWithoutProjectNestedInput
    calculations?: CalculationUncheckedUpdateManyWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    protections?: ProtectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    siteAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationCreateManyProjectInput = {
    id?: string
    name: string
    totalInstalledPowerWatts?: number | null
    maximumShortCircuitAmps?: number | null
    totalOperatingCurrentAmps?: number | null
    totalCircuitCurrentAmps?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CircuitCreateManyProjectInput = {
    id?: string
    protectionId?: string | null
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtectionCreateManyProjectInput = {
    id?: string
    type?: $Enums.ProtectionType
    ratingAmps: number
    curve?: string | null
    poles?: number
    description?: string | null
    equipmentName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalInstalledPowerWatts?: NullableIntFieldUpdateOperationsInput | number | null
    maximumShortCircuitAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOperatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalInstalledPowerWatts?: NullableIntFieldUpdateOperationsInput | number | null
    maximumShortCircuitAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOperatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalInstalledPowerWatts?: NullableIntFieldUpdateOperationsInput | number | null
    maximumShortCircuitAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOperatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    protection?: ProtectionUpdateOneWithoutCircuitsNestedInput
  }

  export type CircuitUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    protectionId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    protectionId?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtectionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuits?: CircuitUpdateManyWithoutProtectionNestedInput
  }

  export type ProtectionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuits?: CircuitUncheckedUpdateManyWithoutProtectionNestedInput
  }

  export type ProtectionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratingAmps?: IntFieldUpdateOperationsInput | number
    curve?: NullableStringFieldUpdateOperationsInput | string | null
    poles?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitCreateManyProtectionInput = {
    id?: string
    projectId: string
    label: string
    type: $Enums.CircuitCategory
    room?: string | null
    quantity?: number
    loadWatts?: number | null
    loadAmps?: number | null
    shortCircuitCurrentAmps?: number | null
    operatingCurrentAmps?: number | null
    circuitTotalCurrentAmps?: number | null
    cableLengthMeters?: number | null
    conductorSectionMm2?: number | null
    recommendedSectionMm2?: number | null
    voltageDropPercent?: number | null
    numberOfPoles?: number
    isDedicated?: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CircuitUpdateWithoutProtectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCircuitsNestedInput
  }

  export type CircuitUncheckedUpdateWithoutProtectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitUncheckedUpdateManyWithoutProtectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumCircuitCategoryFieldUpdateOperationsInput | $Enums.CircuitCategory
    room?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    loadWatts?: NullableIntFieldUpdateOperationsInput | number | null
    loadAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    shortCircuitCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    circuitTotalCurrentAmps?: NullableFloatFieldUpdateOperationsInput | number | null
    cableLengthMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    conductorSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedSectionMm2?: NullableFloatFieldUpdateOperationsInput | number | null
    voltageDropPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    isDedicated?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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