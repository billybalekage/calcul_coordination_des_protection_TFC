
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
 * Model PowerSupply
 * 
 */
export type PowerSupply = $Result.DefaultSelection<Prisma.$PowerSupplyPayload>
/**
 * Model Circuit
 * 
 */
export type Circuit = $Result.DefaultSelection<Prisma.$CircuitPayload>
/**
 * Model FurthestLoadDistance
 * 
 */
export type FurthestLoadDistance = $Result.DefaultSelection<Prisma.$FurthestLoadDistancePayload>
/**
 * Model CableData
 * 
 */
export type CableData = $Result.DefaultSelection<Prisma.$CableDataPayload>
/**
 * Model Protection
 * 
 */
export type Protection = $Result.DefaultSelection<Prisma.$ProtectionPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const AlimentationType: {
  MONOPHASE: 'MONOPHASE',
  TRIPHASE: 'TRIPHASE'
};

export type AlimentationType = (typeof AlimentationType)[keyof typeof AlimentationType]


export const RegimeNeutre: {
  TT: 'TT',
  TN: 'TN',
  IT: 'IT'
};

export type RegimeNeutre = (typeof RegimeNeutre)[keyof typeof RegimeNeutre]


export const CircuitType: {
  ECLAIRAGE: 'ECLAIRAGE',
  PRISE_COURANT: 'PRISE_COURANT',
  FORCE_MOTRICE: 'FORCE_MOTRICE',
  CHAUFFAGE: 'CHAUFFAGE',
  CLIMATISATION: 'CLIMATISATION',
  AUTRE: 'AUTRE'
};

export type CircuitType = (typeof CircuitType)[keyof typeof CircuitType]


export const CableMaterial: {
  CUIVRE: 'CUIVRE',
  ALUMINIUM: 'ALUMINIUM'
};

export type CableMaterial = (typeof CableMaterial)[keyof typeof CableMaterial]


export const CableIsolation: {
  PVC: 'PVC',
  XLPE: 'XLPE',
  EPR: 'EPR'
};

export type CableIsolation = (typeof CableIsolation)[keyof typeof CableIsolation]


export const ModePose: {
  SOUS_CONDUIT_EN_SAILLIE: 'SOUS_CONDUIT_EN_SAILLIE',
  ENCASTRE_DANS_MUR: 'ENCASTRE_DANS_MUR',
  CHEMINEE_DE_CABLES: 'CHEMINEE_DE_CABLES',
  ENTERRE: 'ENTERRE',
  AIR_LIBRE: 'AIR_LIBRE'
};

export type ModePose = (typeof ModePose)[keyof typeof ModePose]


export const ProtectionType: {
  DISJONCTEUR: 'DISJONCTEUR',
  FUSIBLE: 'FUSIBLE',
  INTERRUPTEUR_SECTIONNEUR: 'INTERRUPTEUR_SECTIONNEUR'
};

export type ProtectionType = (typeof ProtectionType)[keyof typeof ProtectionType]


export const CurveType: {
  B: 'B',
  C: 'C',
  D: 'D',
  K: 'K',
  Z: 'Z'
};

export type CurveType = (typeof CurveType)[keyof typeof CurveType]


export const CheckStatus: {
  PASS: 'PASS',
  FAIL: 'FAIL',
  TO_VERIFY_WITH_MANUFACTURER: 'TO_VERIFY_WITH_MANUFACTURER'
};

export type CheckStatus = (typeof CheckStatus)[keyof typeof CheckStatus]


export const Standard: {
  NFC_15_100: 'NFC_15_100',
  CEI_60364: 'CEI_60364',
  IEEE_141: 'IEEE_141',
  IEEE_242: 'IEEE_242'
};

export type Standard = (typeof Standard)[keyof typeof Standard]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type AlimentationType = $Enums.AlimentationType

export const AlimentationType: typeof $Enums.AlimentationType

export type RegimeNeutre = $Enums.RegimeNeutre

export const RegimeNeutre: typeof $Enums.RegimeNeutre

export type CircuitType = $Enums.CircuitType

export const CircuitType: typeof $Enums.CircuitType

export type CableMaterial = $Enums.CableMaterial

export const CableMaterial: typeof $Enums.CableMaterial

export type CableIsolation = $Enums.CableIsolation

export const CableIsolation: typeof $Enums.CableIsolation

export type ModePose = $Enums.ModePose

export const ModePose: typeof $Enums.ModePose

export type ProtectionType = $Enums.ProtectionType

export const ProtectionType: typeof $Enums.ProtectionType

export type CurveType = $Enums.CurveType

export const CurveType: typeof $Enums.CurveType

export type CheckStatus = $Enums.CheckStatus

export const CheckStatus: typeof $Enums.CheckStatus

export type Standard = $Enums.Standard

export const Standard: typeof $Enums.Standard

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
   * `prisma.powerSupply`: Exposes CRUD operations for the **PowerSupply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PowerSupplies
    * const powerSupplies = await prisma.powerSupply.findMany()
    * ```
    */
  get powerSupply(): Prisma.PowerSupplyDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.furthestLoadDistance`: Exposes CRUD operations for the **FurthestLoadDistance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FurthestLoadDistances
    * const furthestLoadDistances = await prisma.furthestLoadDistance.findMany()
    * ```
    */
  get furthestLoadDistance(): Prisma.FurthestLoadDistanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cableData`: Exposes CRUD operations for the **CableData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CableData
    * const cableData = await prisma.cableData.findMany()
    * ```
    */
  get cableData(): Prisma.CableDataDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;
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
    PowerSupply: 'PowerSupply',
    Circuit: 'Circuit',
    FurthestLoadDistance: 'FurthestLoadDistance',
    CableData: 'CableData',
    Protection: 'Protection',
    Result: 'Result'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "project" | "powerSupply" | "circuit" | "furthestLoadDistance" | "cableData" | "protection" | "result"
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
      PowerSupply: {
        payload: Prisma.$PowerSupplyPayload<ExtArgs>
        fields: Prisma.PowerSupplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PowerSupplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PowerSupplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>
          }
          findFirst: {
            args: Prisma.PowerSupplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PowerSupplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>
          }
          findMany: {
            args: Prisma.PowerSupplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>[]
          }
          create: {
            args: Prisma.PowerSupplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>
          }
          createMany: {
            args: Prisma.PowerSupplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PowerSupplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>[]
          }
          delete: {
            args: Prisma.PowerSupplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>
          }
          update: {
            args: Prisma.PowerSupplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>
          }
          deleteMany: {
            args: Prisma.PowerSupplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PowerSupplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PowerSupplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>[]
          }
          upsert: {
            args: Prisma.PowerSupplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSupplyPayload>
          }
          aggregate: {
            args: Prisma.PowerSupplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePowerSupply>
          }
          groupBy: {
            args: Prisma.PowerSupplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PowerSupplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PowerSupplyCountArgs<ExtArgs>
            result: $Utils.Optional<PowerSupplyCountAggregateOutputType> | number
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
      FurthestLoadDistance: {
        payload: Prisma.$FurthestLoadDistancePayload<ExtArgs>
        fields: Prisma.FurthestLoadDistanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FurthestLoadDistanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FurthestLoadDistanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>
          }
          findFirst: {
            args: Prisma.FurthestLoadDistanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FurthestLoadDistanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>
          }
          findMany: {
            args: Prisma.FurthestLoadDistanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>[]
          }
          create: {
            args: Prisma.FurthestLoadDistanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>
          }
          createMany: {
            args: Prisma.FurthestLoadDistanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FurthestLoadDistanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>[]
          }
          delete: {
            args: Prisma.FurthestLoadDistanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>
          }
          update: {
            args: Prisma.FurthestLoadDistanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>
          }
          deleteMany: {
            args: Prisma.FurthestLoadDistanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FurthestLoadDistanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FurthestLoadDistanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>[]
          }
          upsert: {
            args: Prisma.FurthestLoadDistanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FurthestLoadDistancePayload>
          }
          aggregate: {
            args: Prisma.FurthestLoadDistanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFurthestLoadDistance>
          }
          groupBy: {
            args: Prisma.FurthestLoadDistanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FurthestLoadDistanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FurthestLoadDistanceCountArgs<ExtArgs>
            result: $Utils.Optional<FurthestLoadDistanceCountAggregateOutputType> | number
          }
        }
      }
      CableData: {
        payload: Prisma.$CableDataPayload<ExtArgs>
        fields: Prisma.CableDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CableDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CableDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>
          }
          findFirst: {
            args: Prisma.CableDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CableDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>
          }
          findMany: {
            args: Prisma.CableDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>[]
          }
          create: {
            args: Prisma.CableDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>
          }
          createMany: {
            args: Prisma.CableDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CableDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>[]
          }
          delete: {
            args: Prisma.CableDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>
          }
          update: {
            args: Prisma.CableDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>
          }
          deleteMany: {
            args: Prisma.CableDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CableDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CableDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>[]
          }
          upsert: {
            args: Prisma.CableDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CableDataPayload>
          }
          aggregate: {
            args: Prisma.CableDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCableData>
          }
          groupBy: {
            args: Prisma.CableDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CableDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.CableDataCountArgs<ExtArgs>
            result: $Utils.Optional<CableDataCountAggregateOutputType> | number
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
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
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
    powerSupply?: PowerSupplyOmit
    circuit?: CircuitOmit
    furthestLoadDistance?: FurthestLoadDistanceOmit
    cableData?: CableDataOmit
    protection?: ProtectionOmit
    result?: ResultOmit
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
    circuits: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circuits?: boolean | ProjectCountOutputTypeCountCircuitsArgs
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
  export type ProjectCountOutputTypeCountCircuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    avatarUrl: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
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
    avatarUrl: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
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
    avatarUrl: number
    password: number
    role: number
    status: number
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
    avatarUrl?: true
    password?: true
    role?: true
    status?: true
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
    avatarUrl?: true
    password?: true
    role?: true
    status?: true
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
    avatarUrl?: true
    password?: true
    role?: true
    status?: true
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
    avatarUrl: string | null
    password: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
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
    avatarUrl?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
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
    avatarUrl?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
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
    avatarUrl?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
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
    avatarUrl?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    isTwoFactorEnabled?: boolean
    twofactorSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "avatarUrl" | "password" | "role" | "status" | "isTwoFactorEnabled" | "twofactorSecret" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
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
      avatarUrl: string | null
      password: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
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
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
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
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    client: string | null
    location: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    client: string | null
    location: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    name: number
    client: number
    location: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    client?: true
    location?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    client?: true
    location?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    client?: true
    location?: true
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
    userId: string
    createdAt: Date
    updatedAt: Date
    name: string
    client: string | null
    location: string | null
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
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    client?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    powerSupply?: boolean | Project$powerSupplyArgs<ExtArgs>
    circuits?: boolean | Project$circuitsArgs<ExtArgs>
    cableData?: boolean | Project$cableDataArgs<ExtArgs>
    protection?: boolean | Project$protectionArgs<ExtArgs>
    result?: boolean | Project$resultArgs<ExtArgs>
    furthestLoadDistance?: boolean | Project$furthestLoadDistanceArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    client?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    client?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    client?: boolean
    location?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt" | "name" | "client" | "location", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    powerSupply?: boolean | Project$powerSupplyArgs<ExtArgs>
    circuits?: boolean | Project$circuitsArgs<ExtArgs>
    cableData?: boolean | Project$cableDataArgs<ExtArgs>
    protection?: boolean | Project$protectionArgs<ExtArgs>
    result?: boolean | Project$resultArgs<ExtArgs>
    furthestLoadDistance?: boolean | Project$furthestLoadDistanceArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      powerSupply: Prisma.$PowerSupplyPayload<ExtArgs> | null
      circuits: Prisma.$CircuitPayload<ExtArgs>[]
      cableData: Prisma.$CableDataPayload<ExtArgs> | null
      protection: Prisma.$ProtectionPayload<ExtArgs> | null
      result: Prisma.$ResultPayload<ExtArgs> | null
      furthestLoadDistance: Prisma.$FurthestLoadDistancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
      name: string
      client: string | null
      location: string | null
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    powerSupply<T extends Project$powerSupplyArgs<ExtArgs> = {}>(args?: Subset<T, Project$powerSupplyArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    circuits<T extends Project$circuitsArgs<ExtArgs> = {}>(args?: Subset<T, Project$circuitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cableData<T extends Project$cableDataArgs<ExtArgs> = {}>(args?: Subset<T, Project$cableDataArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    protection<T extends Project$protectionArgs<ExtArgs> = {}>(args?: Subset<T, Project$protectionArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    result<T extends Project$resultArgs<ExtArgs> = {}>(args?: Subset<T, Project$resultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    furthestLoadDistance<T extends Project$furthestLoadDistanceArgs<ExtArgs> = {}>(args?: Subset<T, Project$furthestLoadDistanceArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly name: FieldRef<"Project", 'String'>
    readonly client: FieldRef<"Project", 'String'>
    readonly location: FieldRef<"Project", 'String'>
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
   * Project.powerSupply
   */
  export type Project$powerSupplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    where?: PowerSupplyWhereInput
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
   * Project.cableData
   */
  export type Project$cableDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    where?: CableDataWhereInput
  }

  /**
   * Project.protection
   */
  export type Project$protectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Project.result
   */
  export type Project$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
  }

  /**
   * Project.furthestLoadDistance
   */
  export type Project$furthestLoadDistanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    where?: FurthestLoadDistanceWhereInput
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
   * Model PowerSupply
   */

  export type AggregatePowerSupply = {
    _count: PowerSupplyCountAggregateOutputType | null
    _avg: PowerSupplyAvgAggregateOutputType | null
    _sum: PowerSupplySumAggregateOutputType | null
    _min: PowerSupplyMinAggregateOutputType | null
    _max: PowerSupplyMaxAggregateOutputType | null
  }

  export type PowerSupplyAvgAggregateOutputType = {
    nominalVoltage: number | null
    frequency: number | null
    distanceSourceToTGBT: number | null
  }

  export type PowerSupplySumAggregateOutputType = {
    nominalVoltage: number | null
    frequency: number | null
    distanceSourceToTGBT: number | null
  }

  export type PowerSupplyMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.AlimentationType | null
    nominalVoltage: number | null
    frequency: number | null
    regimeNeutre: $Enums.RegimeNeutre | null
    distanceSourceToTGBT: number | null
    standard: $Enums.Standard | null
  }

  export type PowerSupplyMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.AlimentationType | null
    nominalVoltage: number | null
    frequency: number | null
    regimeNeutre: $Enums.RegimeNeutre | null
    distanceSourceToTGBT: number | null
    standard: $Enums.Standard | null
  }

  export type PowerSupplyCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    nominalVoltage: number
    frequency: number
    regimeNeutre: number
    distanceSourceToTGBT: number
    standard: number
    _all: number
  }


  export type PowerSupplyAvgAggregateInputType = {
    nominalVoltage?: true
    frequency?: true
    distanceSourceToTGBT?: true
  }

  export type PowerSupplySumAggregateInputType = {
    nominalVoltage?: true
    frequency?: true
    distanceSourceToTGBT?: true
  }

  export type PowerSupplyMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    nominalVoltage?: true
    frequency?: true
    regimeNeutre?: true
    distanceSourceToTGBT?: true
    standard?: true
  }

  export type PowerSupplyMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    nominalVoltage?: true
    frequency?: true
    regimeNeutre?: true
    distanceSourceToTGBT?: true
    standard?: true
  }

  export type PowerSupplyCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    nominalVoltage?: true
    frequency?: true
    regimeNeutre?: true
    distanceSourceToTGBT?: true
    standard?: true
    _all?: true
  }

  export type PowerSupplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PowerSupply to aggregate.
     */
    where?: PowerSupplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSupplies to fetch.
     */
    orderBy?: PowerSupplyOrderByWithRelationInput | PowerSupplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PowerSupplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSupplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSupplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PowerSupplies
    **/
    _count?: true | PowerSupplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PowerSupplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PowerSupplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PowerSupplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PowerSupplyMaxAggregateInputType
  }

  export type GetPowerSupplyAggregateType<T extends PowerSupplyAggregateArgs> = {
        [P in keyof T & keyof AggregatePowerSupply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePowerSupply[P]>
      : GetScalarType<T[P], AggregatePowerSupply[P]>
  }




  export type PowerSupplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PowerSupplyWhereInput
    orderBy?: PowerSupplyOrderByWithAggregationInput | PowerSupplyOrderByWithAggregationInput[]
    by: PowerSupplyScalarFieldEnum[] | PowerSupplyScalarFieldEnum
    having?: PowerSupplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PowerSupplyCountAggregateInputType | true
    _avg?: PowerSupplyAvgAggregateInputType
    _sum?: PowerSupplySumAggregateInputType
    _min?: PowerSupplyMinAggregateInputType
    _max?: PowerSupplyMaxAggregateInputType
  }

  export type PowerSupplyGroupByOutputType = {
    id: string
    projectId: string
    type: $Enums.AlimentationType
    nominalVoltage: number
    frequency: number
    regimeNeutre: $Enums.RegimeNeutre
    distanceSourceToTGBT: number
    standard: $Enums.Standard
    _count: PowerSupplyCountAggregateOutputType | null
    _avg: PowerSupplyAvgAggregateOutputType | null
    _sum: PowerSupplySumAggregateOutputType | null
    _min: PowerSupplyMinAggregateOutputType | null
    _max: PowerSupplyMaxAggregateOutputType | null
  }

  type GetPowerSupplyGroupByPayload<T extends PowerSupplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PowerSupplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PowerSupplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PowerSupplyGroupByOutputType[P]>
            : GetScalarType<T[P], PowerSupplyGroupByOutputType[P]>
        }
      >
    >


  export type PowerSupplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    nominalVoltage?: boolean
    frequency?: boolean
    regimeNeutre?: boolean
    distanceSourceToTGBT?: boolean
    standard?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["powerSupply"]>

  export type PowerSupplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    nominalVoltage?: boolean
    frequency?: boolean
    regimeNeutre?: boolean
    distanceSourceToTGBT?: boolean
    standard?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["powerSupply"]>

  export type PowerSupplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    nominalVoltage?: boolean
    frequency?: boolean
    regimeNeutre?: boolean
    distanceSourceToTGBT?: boolean
    standard?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["powerSupply"]>

  export type PowerSupplySelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    nominalVoltage?: boolean
    frequency?: boolean
    regimeNeutre?: boolean
    distanceSourceToTGBT?: boolean
    standard?: boolean
  }

  export type PowerSupplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "nominalVoltage" | "frequency" | "regimeNeutre" | "distanceSourceToTGBT" | "standard", ExtArgs["result"]["powerSupply"]>
  export type PowerSupplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PowerSupplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PowerSupplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PowerSupplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PowerSupply"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      type: $Enums.AlimentationType
      nominalVoltage: number
      frequency: number
      regimeNeutre: $Enums.RegimeNeutre
      distanceSourceToTGBT: number
      standard: $Enums.Standard
    }, ExtArgs["result"]["powerSupply"]>
    composites: {}
  }

  type PowerSupplyGetPayload<S extends boolean | null | undefined | PowerSupplyDefaultArgs> = $Result.GetResult<Prisma.$PowerSupplyPayload, S>

  type PowerSupplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PowerSupplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PowerSupplyCountAggregateInputType | true
    }

  export interface PowerSupplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PowerSupply'], meta: { name: 'PowerSupply' } }
    /**
     * Find zero or one PowerSupply that matches the filter.
     * @param {PowerSupplyFindUniqueArgs} args - Arguments to find a PowerSupply
     * @example
     * // Get one PowerSupply
     * const powerSupply = await prisma.powerSupply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PowerSupplyFindUniqueArgs>(args: SelectSubset<T, PowerSupplyFindUniqueArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PowerSupply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PowerSupplyFindUniqueOrThrowArgs} args - Arguments to find a PowerSupply
     * @example
     * // Get one PowerSupply
     * const powerSupply = await prisma.powerSupply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PowerSupplyFindUniqueOrThrowArgs>(args: SelectSubset<T, PowerSupplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PowerSupply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSupplyFindFirstArgs} args - Arguments to find a PowerSupply
     * @example
     * // Get one PowerSupply
     * const powerSupply = await prisma.powerSupply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PowerSupplyFindFirstArgs>(args?: SelectSubset<T, PowerSupplyFindFirstArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PowerSupply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSupplyFindFirstOrThrowArgs} args - Arguments to find a PowerSupply
     * @example
     * // Get one PowerSupply
     * const powerSupply = await prisma.powerSupply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PowerSupplyFindFirstOrThrowArgs>(args?: SelectSubset<T, PowerSupplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PowerSupplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSupplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PowerSupplies
     * const powerSupplies = await prisma.powerSupply.findMany()
     * 
     * // Get first 10 PowerSupplies
     * const powerSupplies = await prisma.powerSupply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const powerSupplyWithIdOnly = await prisma.powerSupply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PowerSupplyFindManyArgs>(args?: SelectSubset<T, PowerSupplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PowerSupply.
     * @param {PowerSupplyCreateArgs} args - Arguments to create a PowerSupply.
     * @example
     * // Create one PowerSupply
     * const PowerSupply = await prisma.powerSupply.create({
     *   data: {
     *     // ... data to create a PowerSupply
     *   }
     * })
     * 
     */
    create<T extends PowerSupplyCreateArgs>(args: SelectSubset<T, PowerSupplyCreateArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PowerSupplies.
     * @param {PowerSupplyCreateManyArgs} args - Arguments to create many PowerSupplies.
     * @example
     * // Create many PowerSupplies
     * const powerSupply = await prisma.powerSupply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PowerSupplyCreateManyArgs>(args?: SelectSubset<T, PowerSupplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PowerSupplies and returns the data saved in the database.
     * @param {PowerSupplyCreateManyAndReturnArgs} args - Arguments to create many PowerSupplies.
     * @example
     * // Create many PowerSupplies
     * const powerSupply = await prisma.powerSupply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PowerSupplies and only return the `id`
     * const powerSupplyWithIdOnly = await prisma.powerSupply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PowerSupplyCreateManyAndReturnArgs>(args?: SelectSubset<T, PowerSupplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PowerSupply.
     * @param {PowerSupplyDeleteArgs} args - Arguments to delete one PowerSupply.
     * @example
     * // Delete one PowerSupply
     * const PowerSupply = await prisma.powerSupply.delete({
     *   where: {
     *     // ... filter to delete one PowerSupply
     *   }
     * })
     * 
     */
    delete<T extends PowerSupplyDeleteArgs>(args: SelectSubset<T, PowerSupplyDeleteArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PowerSupply.
     * @param {PowerSupplyUpdateArgs} args - Arguments to update one PowerSupply.
     * @example
     * // Update one PowerSupply
     * const powerSupply = await prisma.powerSupply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PowerSupplyUpdateArgs>(args: SelectSubset<T, PowerSupplyUpdateArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PowerSupplies.
     * @param {PowerSupplyDeleteManyArgs} args - Arguments to filter PowerSupplies to delete.
     * @example
     * // Delete a few PowerSupplies
     * const { count } = await prisma.powerSupply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PowerSupplyDeleteManyArgs>(args?: SelectSubset<T, PowerSupplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PowerSupplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSupplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PowerSupplies
     * const powerSupply = await prisma.powerSupply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PowerSupplyUpdateManyArgs>(args: SelectSubset<T, PowerSupplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PowerSupplies and returns the data updated in the database.
     * @param {PowerSupplyUpdateManyAndReturnArgs} args - Arguments to update many PowerSupplies.
     * @example
     * // Update many PowerSupplies
     * const powerSupply = await prisma.powerSupply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PowerSupplies and only return the `id`
     * const powerSupplyWithIdOnly = await prisma.powerSupply.updateManyAndReturn({
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
    updateManyAndReturn<T extends PowerSupplyUpdateManyAndReturnArgs>(args: SelectSubset<T, PowerSupplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PowerSupply.
     * @param {PowerSupplyUpsertArgs} args - Arguments to update or create a PowerSupply.
     * @example
     * // Update or create a PowerSupply
     * const powerSupply = await prisma.powerSupply.upsert({
     *   create: {
     *     // ... data to create a PowerSupply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PowerSupply we want to update
     *   }
     * })
     */
    upsert<T extends PowerSupplyUpsertArgs>(args: SelectSubset<T, PowerSupplyUpsertArgs<ExtArgs>>): Prisma__PowerSupplyClient<$Result.GetResult<Prisma.$PowerSupplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PowerSupplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSupplyCountArgs} args - Arguments to filter PowerSupplies to count.
     * @example
     * // Count the number of PowerSupplies
     * const count = await prisma.powerSupply.count({
     *   where: {
     *     // ... the filter for the PowerSupplies we want to count
     *   }
     * })
    **/
    count<T extends PowerSupplyCountArgs>(
      args?: Subset<T, PowerSupplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PowerSupplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PowerSupply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSupplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PowerSupplyAggregateArgs>(args: Subset<T, PowerSupplyAggregateArgs>): Prisma.PrismaPromise<GetPowerSupplyAggregateType<T>>

    /**
     * Group by PowerSupply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSupplyGroupByArgs} args - Group by arguments.
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
      T extends PowerSupplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PowerSupplyGroupByArgs['orderBy'] }
        : { orderBy?: PowerSupplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PowerSupplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPowerSupplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PowerSupply model
   */
  readonly fields: PowerSupplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PowerSupply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PowerSupplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PowerSupply model
   */
  interface PowerSupplyFieldRefs {
    readonly id: FieldRef<"PowerSupply", 'String'>
    readonly projectId: FieldRef<"PowerSupply", 'String'>
    readonly type: FieldRef<"PowerSupply", 'AlimentationType'>
    readonly nominalVoltage: FieldRef<"PowerSupply", 'Float'>
    readonly frequency: FieldRef<"PowerSupply", 'Float'>
    readonly regimeNeutre: FieldRef<"PowerSupply", 'RegimeNeutre'>
    readonly distanceSourceToTGBT: FieldRef<"PowerSupply", 'Float'>
    readonly standard: FieldRef<"PowerSupply", 'Standard'>
  }
    

  // Custom InputTypes
  /**
   * PowerSupply findUnique
   */
  export type PowerSupplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * Filter, which PowerSupply to fetch.
     */
    where: PowerSupplyWhereUniqueInput
  }

  /**
   * PowerSupply findUniqueOrThrow
   */
  export type PowerSupplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * Filter, which PowerSupply to fetch.
     */
    where: PowerSupplyWhereUniqueInput
  }

  /**
   * PowerSupply findFirst
   */
  export type PowerSupplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * Filter, which PowerSupply to fetch.
     */
    where?: PowerSupplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSupplies to fetch.
     */
    orderBy?: PowerSupplyOrderByWithRelationInput | PowerSupplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PowerSupplies.
     */
    cursor?: PowerSupplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSupplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSupplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerSupplies.
     */
    distinct?: PowerSupplyScalarFieldEnum | PowerSupplyScalarFieldEnum[]
  }

  /**
   * PowerSupply findFirstOrThrow
   */
  export type PowerSupplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * Filter, which PowerSupply to fetch.
     */
    where?: PowerSupplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSupplies to fetch.
     */
    orderBy?: PowerSupplyOrderByWithRelationInput | PowerSupplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PowerSupplies.
     */
    cursor?: PowerSupplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSupplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSupplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerSupplies.
     */
    distinct?: PowerSupplyScalarFieldEnum | PowerSupplyScalarFieldEnum[]
  }

  /**
   * PowerSupply findMany
   */
  export type PowerSupplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * Filter, which PowerSupplies to fetch.
     */
    where?: PowerSupplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSupplies to fetch.
     */
    orderBy?: PowerSupplyOrderByWithRelationInput | PowerSupplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PowerSupplies.
     */
    cursor?: PowerSupplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSupplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSupplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerSupplies.
     */
    distinct?: PowerSupplyScalarFieldEnum | PowerSupplyScalarFieldEnum[]
  }

  /**
   * PowerSupply create
   */
  export type PowerSupplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * The data needed to create a PowerSupply.
     */
    data: XOR<PowerSupplyCreateInput, PowerSupplyUncheckedCreateInput>
  }

  /**
   * PowerSupply createMany
   */
  export type PowerSupplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PowerSupplies.
     */
    data: PowerSupplyCreateManyInput | PowerSupplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PowerSupply createManyAndReturn
   */
  export type PowerSupplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * The data used to create many PowerSupplies.
     */
    data: PowerSupplyCreateManyInput | PowerSupplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PowerSupply update
   */
  export type PowerSupplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * The data needed to update a PowerSupply.
     */
    data: XOR<PowerSupplyUpdateInput, PowerSupplyUncheckedUpdateInput>
    /**
     * Choose, which PowerSupply to update.
     */
    where: PowerSupplyWhereUniqueInput
  }

  /**
   * PowerSupply updateMany
   */
  export type PowerSupplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PowerSupplies.
     */
    data: XOR<PowerSupplyUpdateManyMutationInput, PowerSupplyUncheckedUpdateManyInput>
    /**
     * Filter which PowerSupplies to update
     */
    where?: PowerSupplyWhereInput
    /**
     * Limit how many PowerSupplies to update.
     */
    limit?: number
  }

  /**
   * PowerSupply updateManyAndReturn
   */
  export type PowerSupplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * The data used to update PowerSupplies.
     */
    data: XOR<PowerSupplyUpdateManyMutationInput, PowerSupplyUncheckedUpdateManyInput>
    /**
     * Filter which PowerSupplies to update
     */
    where?: PowerSupplyWhereInput
    /**
     * Limit how many PowerSupplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PowerSupply upsert
   */
  export type PowerSupplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * The filter to search for the PowerSupply to update in case it exists.
     */
    where: PowerSupplyWhereUniqueInput
    /**
     * In case the PowerSupply found by the `where` argument doesn't exist, create a new PowerSupply with this data.
     */
    create: XOR<PowerSupplyCreateInput, PowerSupplyUncheckedCreateInput>
    /**
     * In case the PowerSupply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PowerSupplyUpdateInput, PowerSupplyUncheckedUpdateInput>
  }

  /**
   * PowerSupply delete
   */
  export type PowerSupplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
    /**
     * Filter which PowerSupply to delete.
     */
    where: PowerSupplyWhereUniqueInput
  }

  /**
   * PowerSupply deleteMany
   */
  export type PowerSupplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PowerSupplies to delete
     */
    where?: PowerSupplyWhereInput
    /**
     * Limit how many PowerSupplies to delete.
     */
    limit?: number
  }

  /**
   * PowerSupply without action
   */
  export type PowerSupplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSupply
     */
    select?: PowerSupplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSupply
     */
    omit?: PowerSupplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSupplyInclude<ExtArgs> | null
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
    circuitCount: number | null
    totalPower: number | null
    cosPhi: number | null
    utilizationFactor: number | null
    simultaneityFactor: number | null
    distance: number | null
    izReference: number | null
    millivoltsPerAmpereMeter: number | null
    ratedCurrent: number | null
    numberOfPoles: number | null
    breakingCapacity: number | null
  }

  export type CircuitSumAggregateOutputType = {
    circuitCount: number | null
    totalPower: number | null
    cosPhi: number | null
    utilizationFactor: number | null
    simultaneityFactor: number | null
    distance: number | null
    izReference: number | null
    millivoltsPerAmpereMeter: number | null
    ratedCurrent: number | null
    numberOfPoles: number | null
    breakingCapacity: number | null
  }

  export type CircuitMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    circuitCount: number | null
    type: $Enums.CircuitType | null
    totalPower: number | null
    cosPhi: number | null
    utilizationFactor: number | null
    simultaneityFactor: number | null
    distance: number | null
    cableMaterial: $Enums.CableMaterial | null
    cableIsolation: $Enums.CableIsolation | null
    modePose: $Enums.ModePose | null
    izReference: number | null
    millivoltsPerAmpereMeter: number | null
    protectionType: $Enums.ProtectionType | null
    ratedCurrent: number | null
    numberOfPoles: number | null
    curveType: $Enums.CurveType | null
    breakingCapacity: number | null
    selectivityVerified: boolean | null
  }

  export type CircuitMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    circuitCount: number | null
    type: $Enums.CircuitType | null
    totalPower: number | null
    cosPhi: number | null
    utilizationFactor: number | null
    simultaneityFactor: number | null
    distance: number | null
    cableMaterial: $Enums.CableMaterial | null
    cableIsolation: $Enums.CableIsolation | null
    modePose: $Enums.ModePose | null
    izReference: number | null
    millivoltsPerAmpereMeter: number | null
    protectionType: $Enums.ProtectionType | null
    ratedCurrent: number | null
    numberOfPoles: number | null
    curveType: $Enums.CurveType | null
    breakingCapacity: number | null
    selectivityVerified: boolean | null
  }

  export type CircuitCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    circuitCount: number
    type: number
    totalPower: number
    cosPhi: number
    utilizationFactor: number
    simultaneityFactor: number
    distance: number
    cableMaterial: number
    cableIsolation: number
    modePose: number
    correctionFactors: number
    izReference: number
    millivoltsPerAmpereMeter: number
    protectionType: number
    ratedCurrent: number
    numberOfPoles: number
    curveType: number
    breakingCapacity: number
    selectivityVerified: number
    _all: number
  }


  export type CircuitAvgAggregateInputType = {
    circuitCount?: true
    totalPower?: true
    cosPhi?: true
    utilizationFactor?: true
    simultaneityFactor?: true
    distance?: true
    izReference?: true
    millivoltsPerAmpereMeter?: true
    ratedCurrent?: true
    numberOfPoles?: true
    breakingCapacity?: true
  }

  export type CircuitSumAggregateInputType = {
    circuitCount?: true
    totalPower?: true
    cosPhi?: true
    utilizationFactor?: true
    simultaneityFactor?: true
    distance?: true
    izReference?: true
    millivoltsPerAmpereMeter?: true
    ratedCurrent?: true
    numberOfPoles?: true
    breakingCapacity?: true
  }

  export type CircuitMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    circuitCount?: true
    type?: true
    totalPower?: true
    cosPhi?: true
    utilizationFactor?: true
    simultaneityFactor?: true
    distance?: true
    cableMaterial?: true
    cableIsolation?: true
    modePose?: true
    izReference?: true
    millivoltsPerAmpereMeter?: true
    protectionType?: true
    ratedCurrent?: true
    numberOfPoles?: true
    curveType?: true
    breakingCapacity?: true
    selectivityVerified?: true
  }

  export type CircuitMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    circuitCount?: true
    type?: true
    totalPower?: true
    cosPhi?: true
    utilizationFactor?: true
    simultaneityFactor?: true
    distance?: true
    cableMaterial?: true
    cableIsolation?: true
    modePose?: true
    izReference?: true
    millivoltsPerAmpereMeter?: true
    protectionType?: true
    ratedCurrent?: true
    numberOfPoles?: true
    curveType?: true
    breakingCapacity?: true
    selectivityVerified?: true
  }

  export type CircuitCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    circuitCount?: true
    type?: true
    totalPower?: true
    cosPhi?: true
    utilizationFactor?: true
    simultaneityFactor?: true
    distance?: true
    cableMaterial?: true
    cableIsolation?: true
    modePose?: true
    correctionFactors?: true
    izReference?: true
    millivoltsPerAmpereMeter?: true
    protectionType?: true
    ratedCurrent?: true
    numberOfPoles?: true
    curveType?: true
    breakingCapacity?: true
    selectivityVerified?: true
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
    name: string
    circuitCount: number
    type: $Enums.CircuitType
    totalPower: number
    cosPhi: number
    utilizationFactor: number
    simultaneityFactor: number
    distance: number | null
    cableMaterial: $Enums.CableMaterial | null
    cableIsolation: $Enums.CableIsolation | null
    modePose: $Enums.ModePose | null
    correctionFactors: JsonValue | null
    izReference: number | null
    millivoltsPerAmpereMeter: number | null
    protectionType: $Enums.ProtectionType | null
    ratedCurrent: number | null
    numberOfPoles: number | null
    curveType: $Enums.CurveType | null
    breakingCapacity: number | null
    selectivityVerified: boolean
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
    name?: boolean
    circuitCount?: boolean
    type?: boolean
    totalPower?: boolean
    cosPhi?: boolean
    utilizationFactor?: boolean
    simultaneityFactor?: boolean
    distance?: boolean
    cableMaterial?: boolean
    cableIsolation?: boolean
    modePose?: boolean
    correctionFactors?: boolean
    izReference?: boolean
    millivoltsPerAmpereMeter?: boolean
    protectionType?: boolean
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
    selectivityVerified?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    circuitCount?: boolean
    type?: boolean
    totalPower?: boolean
    cosPhi?: boolean
    utilizationFactor?: boolean
    simultaneityFactor?: boolean
    distance?: boolean
    cableMaterial?: boolean
    cableIsolation?: boolean
    modePose?: boolean
    correctionFactors?: boolean
    izReference?: boolean
    millivoltsPerAmpereMeter?: boolean
    protectionType?: boolean
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
    selectivityVerified?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    circuitCount?: boolean
    type?: boolean
    totalPower?: boolean
    cosPhi?: boolean
    utilizationFactor?: boolean
    simultaneityFactor?: boolean
    distance?: boolean
    cableMaterial?: boolean
    cableIsolation?: boolean
    modePose?: boolean
    correctionFactors?: boolean
    izReference?: boolean
    millivoltsPerAmpereMeter?: boolean
    protectionType?: boolean
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
    selectivityVerified?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    circuitCount?: boolean
    type?: boolean
    totalPower?: boolean
    cosPhi?: boolean
    utilizationFactor?: boolean
    simultaneityFactor?: boolean
    distance?: boolean
    cableMaterial?: boolean
    cableIsolation?: boolean
    modePose?: boolean
    correctionFactors?: boolean
    izReference?: boolean
    millivoltsPerAmpereMeter?: boolean
    protectionType?: boolean
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
    selectivityVerified?: boolean
  }

  export type CircuitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "circuitCount" | "type" | "totalPower" | "cosPhi" | "utilizationFactor" | "simultaneityFactor" | "distance" | "cableMaterial" | "cableIsolation" | "modePose" | "correctionFactors" | "izReference" | "millivoltsPerAmpereMeter" | "protectionType" | "ratedCurrent" | "numberOfPoles" | "curveType" | "breakingCapacity" | "selectivityVerified", ExtArgs["result"]["circuit"]>
  export type CircuitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CircuitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CircuitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CircuitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circuit"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      circuitCount: number
      type: $Enums.CircuitType
      totalPower: number
      cosPhi: number
      utilizationFactor: number
      simultaneityFactor: number
      distance: number | null
      cableMaterial: $Enums.CableMaterial | null
      cableIsolation: $Enums.CableIsolation | null
      modePose: $Enums.ModePose | null
      correctionFactors: Prisma.JsonValue | null
      izReference: number | null
      millivoltsPerAmpereMeter: number | null
      protectionType: $Enums.ProtectionType | null
      ratedCurrent: number | null
      numberOfPoles: number | null
      curveType: $Enums.CurveType | null
      breakingCapacity: number | null
      selectivityVerified: boolean
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
    readonly name: FieldRef<"Circuit", 'String'>
    readonly circuitCount: FieldRef<"Circuit", 'Int'>
    readonly type: FieldRef<"Circuit", 'CircuitType'>
    readonly totalPower: FieldRef<"Circuit", 'Float'>
    readonly cosPhi: FieldRef<"Circuit", 'Float'>
    readonly utilizationFactor: FieldRef<"Circuit", 'Float'>
    readonly simultaneityFactor: FieldRef<"Circuit", 'Float'>
    readonly distance: FieldRef<"Circuit", 'Float'>
    readonly cableMaterial: FieldRef<"Circuit", 'CableMaterial'>
    readonly cableIsolation: FieldRef<"Circuit", 'CableIsolation'>
    readonly modePose: FieldRef<"Circuit", 'ModePose'>
    readonly correctionFactors: FieldRef<"Circuit", 'Json'>
    readonly izReference: FieldRef<"Circuit", 'Float'>
    readonly millivoltsPerAmpereMeter: FieldRef<"Circuit", 'Float'>
    readonly protectionType: FieldRef<"Circuit", 'ProtectionType'>
    readonly ratedCurrent: FieldRef<"Circuit", 'Float'>
    readonly numberOfPoles: FieldRef<"Circuit", 'Int'>
    readonly curveType: FieldRef<"Circuit", 'CurveType'>
    readonly breakingCapacity: FieldRef<"Circuit", 'Float'>
    readonly selectivityVerified: FieldRef<"Circuit", 'Boolean'>
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
   * Model FurthestLoadDistance
   */

  export type AggregateFurthestLoadDistance = {
    _count: FurthestLoadDistanceCountAggregateOutputType | null
    _avg: FurthestLoadDistanceAvgAggregateOutputType | null
    _sum: FurthestLoadDistanceSumAggregateOutputType | null
    _min: FurthestLoadDistanceMinAggregateOutputType | null
    _max: FurthestLoadDistanceMaxAggregateOutputType | null
  }

  export type FurthestLoadDistanceAvgAggregateOutputType = {
    distance: number | null
  }

  export type FurthestLoadDistanceSumAggregateOutputType = {
    distance: number | null
  }

  export type FurthestLoadDistanceMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    circuitName: string | null
    distance: number | null
  }

  export type FurthestLoadDistanceMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    circuitName: string | null
    distance: number | null
  }

  export type FurthestLoadDistanceCountAggregateOutputType = {
    id: number
    projectId: number
    circuitName: number
    distance: number
    _all: number
  }


  export type FurthestLoadDistanceAvgAggregateInputType = {
    distance?: true
  }

  export type FurthestLoadDistanceSumAggregateInputType = {
    distance?: true
  }

  export type FurthestLoadDistanceMinAggregateInputType = {
    id?: true
    projectId?: true
    circuitName?: true
    distance?: true
  }

  export type FurthestLoadDistanceMaxAggregateInputType = {
    id?: true
    projectId?: true
    circuitName?: true
    distance?: true
  }

  export type FurthestLoadDistanceCountAggregateInputType = {
    id?: true
    projectId?: true
    circuitName?: true
    distance?: true
    _all?: true
  }

  export type FurthestLoadDistanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FurthestLoadDistance to aggregate.
     */
    where?: FurthestLoadDistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FurthestLoadDistances to fetch.
     */
    orderBy?: FurthestLoadDistanceOrderByWithRelationInput | FurthestLoadDistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FurthestLoadDistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FurthestLoadDistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FurthestLoadDistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FurthestLoadDistances
    **/
    _count?: true | FurthestLoadDistanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FurthestLoadDistanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FurthestLoadDistanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FurthestLoadDistanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FurthestLoadDistanceMaxAggregateInputType
  }

  export type GetFurthestLoadDistanceAggregateType<T extends FurthestLoadDistanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFurthestLoadDistance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFurthestLoadDistance[P]>
      : GetScalarType<T[P], AggregateFurthestLoadDistance[P]>
  }




  export type FurthestLoadDistanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FurthestLoadDistanceWhereInput
    orderBy?: FurthestLoadDistanceOrderByWithAggregationInput | FurthestLoadDistanceOrderByWithAggregationInput[]
    by: FurthestLoadDistanceScalarFieldEnum[] | FurthestLoadDistanceScalarFieldEnum
    having?: FurthestLoadDistanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FurthestLoadDistanceCountAggregateInputType | true
    _avg?: FurthestLoadDistanceAvgAggregateInputType
    _sum?: FurthestLoadDistanceSumAggregateInputType
    _min?: FurthestLoadDistanceMinAggregateInputType
    _max?: FurthestLoadDistanceMaxAggregateInputType
  }

  export type FurthestLoadDistanceGroupByOutputType = {
    id: string
    projectId: string
    circuitName: string
    distance: number
    _count: FurthestLoadDistanceCountAggregateOutputType | null
    _avg: FurthestLoadDistanceAvgAggregateOutputType | null
    _sum: FurthestLoadDistanceSumAggregateOutputType | null
    _min: FurthestLoadDistanceMinAggregateOutputType | null
    _max: FurthestLoadDistanceMaxAggregateOutputType | null
  }

  type GetFurthestLoadDistanceGroupByPayload<T extends FurthestLoadDistanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FurthestLoadDistanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FurthestLoadDistanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FurthestLoadDistanceGroupByOutputType[P]>
            : GetScalarType<T[P], FurthestLoadDistanceGroupByOutputType[P]>
        }
      >
    >


  export type FurthestLoadDistanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    circuitName?: boolean
    distance?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["furthestLoadDistance"]>

  export type FurthestLoadDistanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    circuitName?: boolean
    distance?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["furthestLoadDistance"]>

  export type FurthestLoadDistanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    circuitName?: boolean
    distance?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["furthestLoadDistance"]>

  export type FurthestLoadDistanceSelectScalar = {
    id?: boolean
    projectId?: boolean
    circuitName?: boolean
    distance?: boolean
  }

  export type FurthestLoadDistanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "circuitName" | "distance", ExtArgs["result"]["furthestLoadDistance"]>
  export type FurthestLoadDistanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FurthestLoadDistanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FurthestLoadDistanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FurthestLoadDistancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FurthestLoadDistance"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      circuitName: string
      distance: number
    }, ExtArgs["result"]["furthestLoadDistance"]>
    composites: {}
  }

  type FurthestLoadDistanceGetPayload<S extends boolean | null | undefined | FurthestLoadDistanceDefaultArgs> = $Result.GetResult<Prisma.$FurthestLoadDistancePayload, S>

  type FurthestLoadDistanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FurthestLoadDistanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FurthestLoadDistanceCountAggregateInputType | true
    }

  export interface FurthestLoadDistanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FurthestLoadDistance'], meta: { name: 'FurthestLoadDistance' } }
    /**
     * Find zero or one FurthestLoadDistance that matches the filter.
     * @param {FurthestLoadDistanceFindUniqueArgs} args - Arguments to find a FurthestLoadDistance
     * @example
     * // Get one FurthestLoadDistance
     * const furthestLoadDistance = await prisma.furthestLoadDistance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FurthestLoadDistanceFindUniqueArgs>(args: SelectSubset<T, FurthestLoadDistanceFindUniqueArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FurthestLoadDistance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FurthestLoadDistanceFindUniqueOrThrowArgs} args - Arguments to find a FurthestLoadDistance
     * @example
     * // Get one FurthestLoadDistance
     * const furthestLoadDistance = await prisma.furthestLoadDistance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FurthestLoadDistanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FurthestLoadDistanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FurthestLoadDistance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurthestLoadDistanceFindFirstArgs} args - Arguments to find a FurthestLoadDistance
     * @example
     * // Get one FurthestLoadDistance
     * const furthestLoadDistance = await prisma.furthestLoadDistance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FurthestLoadDistanceFindFirstArgs>(args?: SelectSubset<T, FurthestLoadDistanceFindFirstArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FurthestLoadDistance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurthestLoadDistanceFindFirstOrThrowArgs} args - Arguments to find a FurthestLoadDistance
     * @example
     * // Get one FurthestLoadDistance
     * const furthestLoadDistance = await prisma.furthestLoadDistance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FurthestLoadDistanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FurthestLoadDistanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FurthestLoadDistances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurthestLoadDistanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FurthestLoadDistances
     * const furthestLoadDistances = await prisma.furthestLoadDistance.findMany()
     * 
     * // Get first 10 FurthestLoadDistances
     * const furthestLoadDistances = await prisma.furthestLoadDistance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const furthestLoadDistanceWithIdOnly = await prisma.furthestLoadDistance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FurthestLoadDistanceFindManyArgs>(args?: SelectSubset<T, FurthestLoadDistanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FurthestLoadDistance.
     * @param {FurthestLoadDistanceCreateArgs} args - Arguments to create a FurthestLoadDistance.
     * @example
     * // Create one FurthestLoadDistance
     * const FurthestLoadDistance = await prisma.furthestLoadDistance.create({
     *   data: {
     *     // ... data to create a FurthestLoadDistance
     *   }
     * })
     * 
     */
    create<T extends FurthestLoadDistanceCreateArgs>(args: SelectSubset<T, FurthestLoadDistanceCreateArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FurthestLoadDistances.
     * @param {FurthestLoadDistanceCreateManyArgs} args - Arguments to create many FurthestLoadDistances.
     * @example
     * // Create many FurthestLoadDistances
     * const furthestLoadDistance = await prisma.furthestLoadDistance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FurthestLoadDistanceCreateManyArgs>(args?: SelectSubset<T, FurthestLoadDistanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FurthestLoadDistances and returns the data saved in the database.
     * @param {FurthestLoadDistanceCreateManyAndReturnArgs} args - Arguments to create many FurthestLoadDistances.
     * @example
     * // Create many FurthestLoadDistances
     * const furthestLoadDistance = await prisma.furthestLoadDistance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FurthestLoadDistances and only return the `id`
     * const furthestLoadDistanceWithIdOnly = await prisma.furthestLoadDistance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FurthestLoadDistanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FurthestLoadDistanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FurthestLoadDistance.
     * @param {FurthestLoadDistanceDeleteArgs} args - Arguments to delete one FurthestLoadDistance.
     * @example
     * // Delete one FurthestLoadDistance
     * const FurthestLoadDistance = await prisma.furthestLoadDistance.delete({
     *   where: {
     *     // ... filter to delete one FurthestLoadDistance
     *   }
     * })
     * 
     */
    delete<T extends FurthestLoadDistanceDeleteArgs>(args: SelectSubset<T, FurthestLoadDistanceDeleteArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FurthestLoadDistance.
     * @param {FurthestLoadDistanceUpdateArgs} args - Arguments to update one FurthestLoadDistance.
     * @example
     * // Update one FurthestLoadDistance
     * const furthestLoadDistance = await prisma.furthestLoadDistance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FurthestLoadDistanceUpdateArgs>(args: SelectSubset<T, FurthestLoadDistanceUpdateArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FurthestLoadDistances.
     * @param {FurthestLoadDistanceDeleteManyArgs} args - Arguments to filter FurthestLoadDistances to delete.
     * @example
     * // Delete a few FurthestLoadDistances
     * const { count } = await prisma.furthestLoadDistance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FurthestLoadDistanceDeleteManyArgs>(args?: SelectSubset<T, FurthestLoadDistanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FurthestLoadDistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurthestLoadDistanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FurthestLoadDistances
     * const furthestLoadDistance = await prisma.furthestLoadDistance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FurthestLoadDistanceUpdateManyArgs>(args: SelectSubset<T, FurthestLoadDistanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FurthestLoadDistances and returns the data updated in the database.
     * @param {FurthestLoadDistanceUpdateManyAndReturnArgs} args - Arguments to update many FurthestLoadDistances.
     * @example
     * // Update many FurthestLoadDistances
     * const furthestLoadDistance = await prisma.furthestLoadDistance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FurthestLoadDistances and only return the `id`
     * const furthestLoadDistanceWithIdOnly = await prisma.furthestLoadDistance.updateManyAndReturn({
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
    updateManyAndReturn<T extends FurthestLoadDistanceUpdateManyAndReturnArgs>(args: SelectSubset<T, FurthestLoadDistanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FurthestLoadDistance.
     * @param {FurthestLoadDistanceUpsertArgs} args - Arguments to update or create a FurthestLoadDistance.
     * @example
     * // Update or create a FurthestLoadDistance
     * const furthestLoadDistance = await prisma.furthestLoadDistance.upsert({
     *   create: {
     *     // ... data to create a FurthestLoadDistance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FurthestLoadDistance we want to update
     *   }
     * })
     */
    upsert<T extends FurthestLoadDistanceUpsertArgs>(args: SelectSubset<T, FurthestLoadDistanceUpsertArgs<ExtArgs>>): Prisma__FurthestLoadDistanceClient<$Result.GetResult<Prisma.$FurthestLoadDistancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FurthestLoadDistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurthestLoadDistanceCountArgs} args - Arguments to filter FurthestLoadDistances to count.
     * @example
     * // Count the number of FurthestLoadDistances
     * const count = await prisma.furthestLoadDistance.count({
     *   where: {
     *     // ... the filter for the FurthestLoadDistances we want to count
     *   }
     * })
    **/
    count<T extends FurthestLoadDistanceCountArgs>(
      args?: Subset<T, FurthestLoadDistanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FurthestLoadDistanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FurthestLoadDistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurthestLoadDistanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FurthestLoadDistanceAggregateArgs>(args: Subset<T, FurthestLoadDistanceAggregateArgs>): Prisma.PrismaPromise<GetFurthestLoadDistanceAggregateType<T>>

    /**
     * Group by FurthestLoadDistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurthestLoadDistanceGroupByArgs} args - Group by arguments.
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
      T extends FurthestLoadDistanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FurthestLoadDistanceGroupByArgs['orderBy'] }
        : { orderBy?: FurthestLoadDistanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FurthestLoadDistanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFurthestLoadDistanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FurthestLoadDistance model
   */
  readonly fields: FurthestLoadDistanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FurthestLoadDistance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FurthestLoadDistanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FurthestLoadDistance model
   */
  interface FurthestLoadDistanceFieldRefs {
    readonly id: FieldRef<"FurthestLoadDistance", 'String'>
    readonly projectId: FieldRef<"FurthestLoadDistance", 'String'>
    readonly circuitName: FieldRef<"FurthestLoadDistance", 'String'>
    readonly distance: FieldRef<"FurthestLoadDistance", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * FurthestLoadDistance findUnique
   */
  export type FurthestLoadDistanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * Filter, which FurthestLoadDistance to fetch.
     */
    where: FurthestLoadDistanceWhereUniqueInput
  }

  /**
   * FurthestLoadDistance findUniqueOrThrow
   */
  export type FurthestLoadDistanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * Filter, which FurthestLoadDistance to fetch.
     */
    where: FurthestLoadDistanceWhereUniqueInput
  }

  /**
   * FurthestLoadDistance findFirst
   */
  export type FurthestLoadDistanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * Filter, which FurthestLoadDistance to fetch.
     */
    where?: FurthestLoadDistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FurthestLoadDistances to fetch.
     */
    orderBy?: FurthestLoadDistanceOrderByWithRelationInput | FurthestLoadDistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FurthestLoadDistances.
     */
    cursor?: FurthestLoadDistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FurthestLoadDistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FurthestLoadDistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FurthestLoadDistances.
     */
    distinct?: FurthestLoadDistanceScalarFieldEnum | FurthestLoadDistanceScalarFieldEnum[]
  }

  /**
   * FurthestLoadDistance findFirstOrThrow
   */
  export type FurthestLoadDistanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * Filter, which FurthestLoadDistance to fetch.
     */
    where?: FurthestLoadDistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FurthestLoadDistances to fetch.
     */
    orderBy?: FurthestLoadDistanceOrderByWithRelationInput | FurthestLoadDistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FurthestLoadDistances.
     */
    cursor?: FurthestLoadDistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FurthestLoadDistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FurthestLoadDistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FurthestLoadDistances.
     */
    distinct?: FurthestLoadDistanceScalarFieldEnum | FurthestLoadDistanceScalarFieldEnum[]
  }

  /**
   * FurthestLoadDistance findMany
   */
  export type FurthestLoadDistanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * Filter, which FurthestLoadDistances to fetch.
     */
    where?: FurthestLoadDistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FurthestLoadDistances to fetch.
     */
    orderBy?: FurthestLoadDistanceOrderByWithRelationInput | FurthestLoadDistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FurthestLoadDistances.
     */
    cursor?: FurthestLoadDistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FurthestLoadDistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FurthestLoadDistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FurthestLoadDistances.
     */
    distinct?: FurthestLoadDistanceScalarFieldEnum | FurthestLoadDistanceScalarFieldEnum[]
  }

  /**
   * FurthestLoadDistance create
   */
  export type FurthestLoadDistanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * The data needed to create a FurthestLoadDistance.
     */
    data: XOR<FurthestLoadDistanceCreateInput, FurthestLoadDistanceUncheckedCreateInput>
  }

  /**
   * FurthestLoadDistance createMany
   */
  export type FurthestLoadDistanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FurthestLoadDistances.
     */
    data: FurthestLoadDistanceCreateManyInput | FurthestLoadDistanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FurthestLoadDistance createManyAndReturn
   */
  export type FurthestLoadDistanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * The data used to create many FurthestLoadDistances.
     */
    data: FurthestLoadDistanceCreateManyInput | FurthestLoadDistanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FurthestLoadDistance update
   */
  export type FurthestLoadDistanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * The data needed to update a FurthestLoadDistance.
     */
    data: XOR<FurthestLoadDistanceUpdateInput, FurthestLoadDistanceUncheckedUpdateInput>
    /**
     * Choose, which FurthestLoadDistance to update.
     */
    where: FurthestLoadDistanceWhereUniqueInput
  }

  /**
   * FurthestLoadDistance updateMany
   */
  export type FurthestLoadDistanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FurthestLoadDistances.
     */
    data: XOR<FurthestLoadDistanceUpdateManyMutationInput, FurthestLoadDistanceUncheckedUpdateManyInput>
    /**
     * Filter which FurthestLoadDistances to update
     */
    where?: FurthestLoadDistanceWhereInput
    /**
     * Limit how many FurthestLoadDistances to update.
     */
    limit?: number
  }

  /**
   * FurthestLoadDistance updateManyAndReturn
   */
  export type FurthestLoadDistanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * The data used to update FurthestLoadDistances.
     */
    data: XOR<FurthestLoadDistanceUpdateManyMutationInput, FurthestLoadDistanceUncheckedUpdateManyInput>
    /**
     * Filter which FurthestLoadDistances to update
     */
    where?: FurthestLoadDistanceWhereInput
    /**
     * Limit how many FurthestLoadDistances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FurthestLoadDistance upsert
   */
  export type FurthestLoadDistanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * The filter to search for the FurthestLoadDistance to update in case it exists.
     */
    where: FurthestLoadDistanceWhereUniqueInput
    /**
     * In case the FurthestLoadDistance found by the `where` argument doesn't exist, create a new FurthestLoadDistance with this data.
     */
    create: XOR<FurthestLoadDistanceCreateInput, FurthestLoadDistanceUncheckedCreateInput>
    /**
     * In case the FurthestLoadDistance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FurthestLoadDistanceUpdateInput, FurthestLoadDistanceUncheckedUpdateInput>
  }

  /**
   * FurthestLoadDistance delete
   */
  export type FurthestLoadDistanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
    /**
     * Filter which FurthestLoadDistance to delete.
     */
    where: FurthestLoadDistanceWhereUniqueInput
  }

  /**
   * FurthestLoadDistance deleteMany
   */
  export type FurthestLoadDistanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FurthestLoadDistances to delete
     */
    where?: FurthestLoadDistanceWhereInput
    /**
     * Limit how many FurthestLoadDistances to delete.
     */
    limit?: number
  }

  /**
   * FurthestLoadDistance without action
   */
  export type FurthestLoadDistanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurthestLoadDistance
     */
    select?: FurthestLoadDistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FurthestLoadDistance
     */
    omit?: FurthestLoadDistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FurthestLoadDistanceInclude<ExtArgs> | null
  }


  /**
   * Model CableData
   */

  export type AggregateCableData = {
    _count: CableDataCountAggregateOutputType | null
    _min: CableDataMinAggregateOutputType | null
    _max: CableDataMaxAggregateOutputType | null
  }

  export type CableDataMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    material: $Enums.CableMaterial | null
    isolation: $Enums.CableIsolation | null
    modePose: $Enums.ModePose | null
  }

  export type CableDataMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    material: $Enums.CableMaterial | null
    isolation: $Enums.CableIsolation | null
    modePose: $Enums.ModePose | null
  }

  export type CableDataCountAggregateOutputType = {
    id: number
    projectId: number
    material: number
    isolation: number
    modePose: number
    _all: number
  }


  export type CableDataMinAggregateInputType = {
    id?: true
    projectId?: true
    material?: true
    isolation?: true
    modePose?: true
  }

  export type CableDataMaxAggregateInputType = {
    id?: true
    projectId?: true
    material?: true
    isolation?: true
    modePose?: true
  }

  export type CableDataCountAggregateInputType = {
    id?: true
    projectId?: true
    material?: true
    isolation?: true
    modePose?: true
    _all?: true
  }

  export type CableDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableData to aggregate.
     */
    where?: CableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableData to fetch.
     */
    orderBy?: CableDataOrderByWithRelationInput | CableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CableData
    **/
    _count?: true | CableDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CableDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CableDataMaxAggregateInputType
  }

  export type GetCableDataAggregateType<T extends CableDataAggregateArgs> = {
        [P in keyof T & keyof AggregateCableData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCableData[P]>
      : GetScalarType<T[P], AggregateCableData[P]>
  }




  export type CableDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CableDataWhereInput
    orderBy?: CableDataOrderByWithAggregationInput | CableDataOrderByWithAggregationInput[]
    by: CableDataScalarFieldEnum[] | CableDataScalarFieldEnum
    having?: CableDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CableDataCountAggregateInputType | true
    _min?: CableDataMinAggregateInputType
    _max?: CableDataMaxAggregateInputType
  }

  export type CableDataGroupByOutputType = {
    id: string
    projectId: string
    material: $Enums.CableMaterial
    isolation: $Enums.CableIsolation
    modePose: $Enums.ModePose
    _count: CableDataCountAggregateOutputType | null
    _min: CableDataMinAggregateOutputType | null
    _max: CableDataMaxAggregateOutputType | null
  }

  type GetCableDataGroupByPayload<T extends CableDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CableDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CableDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CableDataGroupByOutputType[P]>
            : GetScalarType<T[P], CableDataGroupByOutputType[P]>
        }
      >
    >


  export type CableDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    material?: boolean
    isolation?: boolean
    modePose?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cableData"]>

  export type CableDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    material?: boolean
    isolation?: boolean
    modePose?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cableData"]>

  export type CableDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    material?: boolean
    isolation?: boolean
    modePose?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cableData"]>

  export type CableDataSelectScalar = {
    id?: boolean
    projectId?: boolean
    material?: boolean
    isolation?: boolean
    modePose?: boolean
  }

  export type CableDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "material" | "isolation" | "modePose", ExtArgs["result"]["cableData"]>
  export type CableDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CableDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CableDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CableDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CableData"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      material: $Enums.CableMaterial
      isolation: $Enums.CableIsolation
      modePose: $Enums.ModePose
    }, ExtArgs["result"]["cableData"]>
    composites: {}
  }

  type CableDataGetPayload<S extends boolean | null | undefined | CableDataDefaultArgs> = $Result.GetResult<Prisma.$CableDataPayload, S>

  type CableDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CableDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CableDataCountAggregateInputType | true
    }

  export interface CableDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CableData'], meta: { name: 'CableData' } }
    /**
     * Find zero or one CableData that matches the filter.
     * @param {CableDataFindUniqueArgs} args - Arguments to find a CableData
     * @example
     * // Get one CableData
     * const cableData = await prisma.cableData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CableDataFindUniqueArgs>(args: SelectSubset<T, CableDataFindUniqueArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CableData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CableDataFindUniqueOrThrowArgs} args - Arguments to find a CableData
     * @example
     * // Get one CableData
     * const cableData = await prisma.cableData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CableDataFindUniqueOrThrowArgs>(args: SelectSubset<T, CableDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CableData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableDataFindFirstArgs} args - Arguments to find a CableData
     * @example
     * // Get one CableData
     * const cableData = await prisma.cableData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CableDataFindFirstArgs>(args?: SelectSubset<T, CableDataFindFirstArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CableData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableDataFindFirstOrThrowArgs} args - Arguments to find a CableData
     * @example
     * // Get one CableData
     * const cableData = await prisma.cableData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CableDataFindFirstOrThrowArgs>(args?: SelectSubset<T, CableDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CableData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CableData
     * const cableData = await prisma.cableData.findMany()
     * 
     * // Get first 10 CableData
     * const cableData = await prisma.cableData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cableDataWithIdOnly = await prisma.cableData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CableDataFindManyArgs>(args?: SelectSubset<T, CableDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CableData.
     * @param {CableDataCreateArgs} args - Arguments to create a CableData.
     * @example
     * // Create one CableData
     * const CableData = await prisma.cableData.create({
     *   data: {
     *     // ... data to create a CableData
     *   }
     * })
     * 
     */
    create<T extends CableDataCreateArgs>(args: SelectSubset<T, CableDataCreateArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CableData.
     * @param {CableDataCreateManyArgs} args - Arguments to create many CableData.
     * @example
     * // Create many CableData
     * const cableData = await prisma.cableData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CableDataCreateManyArgs>(args?: SelectSubset<T, CableDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CableData and returns the data saved in the database.
     * @param {CableDataCreateManyAndReturnArgs} args - Arguments to create many CableData.
     * @example
     * // Create many CableData
     * const cableData = await prisma.cableData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CableData and only return the `id`
     * const cableDataWithIdOnly = await prisma.cableData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CableDataCreateManyAndReturnArgs>(args?: SelectSubset<T, CableDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CableData.
     * @param {CableDataDeleteArgs} args - Arguments to delete one CableData.
     * @example
     * // Delete one CableData
     * const CableData = await prisma.cableData.delete({
     *   where: {
     *     // ... filter to delete one CableData
     *   }
     * })
     * 
     */
    delete<T extends CableDataDeleteArgs>(args: SelectSubset<T, CableDataDeleteArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CableData.
     * @param {CableDataUpdateArgs} args - Arguments to update one CableData.
     * @example
     * // Update one CableData
     * const cableData = await prisma.cableData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CableDataUpdateArgs>(args: SelectSubset<T, CableDataUpdateArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CableData.
     * @param {CableDataDeleteManyArgs} args - Arguments to filter CableData to delete.
     * @example
     * // Delete a few CableData
     * const { count } = await prisma.cableData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CableDataDeleteManyArgs>(args?: SelectSubset<T, CableDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CableData
     * const cableData = await prisma.cableData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CableDataUpdateManyArgs>(args: SelectSubset<T, CableDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CableData and returns the data updated in the database.
     * @param {CableDataUpdateManyAndReturnArgs} args - Arguments to update many CableData.
     * @example
     * // Update many CableData
     * const cableData = await prisma.cableData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CableData and only return the `id`
     * const cableDataWithIdOnly = await prisma.cableData.updateManyAndReturn({
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
    updateManyAndReturn<T extends CableDataUpdateManyAndReturnArgs>(args: SelectSubset<T, CableDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CableData.
     * @param {CableDataUpsertArgs} args - Arguments to update or create a CableData.
     * @example
     * // Update or create a CableData
     * const cableData = await prisma.cableData.upsert({
     *   create: {
     *     // ... data to create a CableData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CableData we want to update
     *   }
     * })
     */
    upsert<T extends CableDataUpsertArgs>(args: SelectSubset<T, CableDataUpsertArgs<ExtArgs>>): Prisma__CableDataClient<$Result.GetResult<Prisma.$CableDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableDataCountArgs} args - Arguments to filter CableData to count.
     * @example
     * // Count the number of CableData
     * const count = await prisma.cableData.count({
     *   where: {
     *     // ... the filter for the CableData we want to count
     *   }
     * })
    **/
    count<T extends CableDataCountArgs>(
      args?: Subset<T, CableDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CableDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CableDataAggregateArgs>(args: Subset<T, CableDataAggregateArgs>): Prisma.PrismaPromise<GetCableDataAggregateType<T>>

    /**
     * Group by CableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableDataGroupByArgs} args - Group by arguments.
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
      T extends CableDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CableDataGroupByArgs['orderBy'] }
        : { orderBy?: CableDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CableDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCableDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CableData model
   */
  readonly fields: CableDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CableData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CableDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CableData model
   */
  interface CableDataFieldRefs {
    readonly id: FieldRef<"CableData", 'String'>
    readonly projectId: FieldRef<"CableData", 'String'>
    readonly material: FieldRef<"CableData", 'CableMaterial'>
    readonly isolation: FieldRef<"CableData", 'CableIsolation'>
    readonly modePose: FieldRef<"CableData", 'ModePose'>
  }
    

  // Custom InputTypes
  /**
   * CableData findUnique
   */
  export type CableDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * Filter, which CableData to fetch.
     */
    where: CableDataWhereUniqueInput
  }

  /**
   * CableData findUniqueOrThrow
   */
  export type CableDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * Filter, which CableData to fetch.
     */
    where: CableDataWhereUniqueInput
  }

  /**
   * CableData findFirst
   */
  export type CableDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * Filter, which CableData to fetch.
     */
    where?: CableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableData to fetch.
     */
    orderBy?: CableDataOrderByWithRelationInput | CableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableData.
     */
    cursor?: CableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableData.
     */
    distinct?: CableDataScalarFieldEnum | CableDataScalarFieldEnum[]
  }

  /**
   * CableData findFirstOrThrow
   */
  export type CableDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * Filter, which CableData to fetch.
     */
    where?: CableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableData to fetch.
     */
    orderBy?: CableDataOrderByWithRelationInput | CableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableData.
     */
    cursor?: CableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableData.
     */
    distinct?: CableDataScalarFieldEnum | CableDataScalarFieldEnum[]
  }

  /**
   * CableData findMany
   */
  export type CableDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * Filter, which CableData to fetch.
     */
    where?: CableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableData to fetch.
     */
    orderBy?: CableDataOrderByWithRelationInput | CableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CableData.
     */
    cursor?: CableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableData.
     */
    distinct?: CableDataScalarFieldEnum | CableDataScalarFieldEnum[]
  }

  /**
   * CableData create
   */
  export type CableDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * The data needed to create a CableData.
     */
    data: XOR<CableDataCreateInput, CableDataUncheckedCreateInput>
  }

  /**
   * CableData createMany
   */
  export type CableDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CableData.
     */
    data: CableDataCreateManyInput | CableDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CableData createManyAndReturn
   */
  export type CableDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * The data used to create many CableData.
     */
    data: CableDataCreateManyInput | CableDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CableData update
   */
  export type CableDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * The data needed to update a CableData.
     */
    data: XOR<CableDataUpdateInput, CableDataUncheckedUpdateInput>
    /**
     * Choose, which CableData to update.
     */
    where: CableDataWhereUniqueInput
  }

  /**
   * CableData updateMany
   */
  export type CableDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CableData.
     */
    data: XOR<CableDataUpdateManyMutationInput, CableDataUncheckedUpdateManyInput>
    /**
     * Filter which CableData to update
     */
    where?: CableDataWhereInput
    /**
     * Limit how many CableData to update.
     */
    limit?: number
  }

  /**
   * CableData updateManyAndReturn
   */
  export type CableDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * The data used to update CableData.
     */
    data: XOR<CableDataUpdateManyMutationInput, CableDataUncheckedUpdateManyInput>
    /**
     * Filter which CableData to update
     */
    where?: CableDataWhereInput
    /**
     * Limit how many CableData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CableData upsert
   */
  export type CableDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * The filter to search for the CableData to update in case it exists.
     */
    where: CableDataWhereUniqueInput
    /**
     * In case the CableData found by the `where` argument doesn't exist, create a new CableData with this data.
     */
    create: XOR<CableDataCreateInput, CableDataUncheckedCreateInput>
    /**
     * In case the CableData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CableDataUpdateInput, CableDataUncheckedUpdateInput>
  }

  /**
   * CableData delete
   */
  export type CableDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
    /**
     * Filter which CableData to delete.
     */
    where: CableDataWhereUniqueInput
  }

  /**
   * CableData deleteMany
   */
  export type CableDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableData to delete
     */
    where?: CableDataWhereInput
    /**
     * Limit how many CableData to delete.
     */
    limit?: number
  }

  /**
   * CableData without action
   */
  export type CableDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableData
     */
    select?: CableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CableData
     */
    omit?: CableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CableDataInclude<ExtArgs> | null
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
    ratedCurrent: number | null
    numberOfPoles: number | null
    breakingCapacity: number | null
  }

  export type ProtectionSumAggregateOutputType = {
    ratedCurrent: number | null
    numberOfPoles: number | null
    breakingCapacity: number | null
  }

  export type ProtectionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.ProtectionType | null
    ratedCurrent: number | null
    numberOfPoles: number | null
    curveType: $Enums.CurveType | null
    breakingCapacity: number | null
  }

  export type ProtectionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.ProtectionType | null
    ratedCurrent: number | null
    numberOfPoles: number | null
    curveType: $Enums.CurveType | null
    breakingCapacity: number | null
  }

  export type ProtectionCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    ratedCurrent: number
    numberOfPoles: number
    curveType: number
    breakingCapacity: number
    _all: number
  }


  export type ProtectionAvgAggregateInputType = {
    ratedCurrent?: true
    numberOfPoles?: true
    breakingCapacity?: true
  }

  export type ProtectionSumAggregateInputType = {
    ratedCurrent?: true
    numberOfPoles?: true
    breakingCapacity?: true
  }

  export type ProtectionMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    ratedCurrent?: true
    numberOfPoles?: true
    curveType?: true
    breakingCapacity?: true
  }

  export type ProtectionMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    ratedCurrent?: true
    numberOfPoles?: true
    curveType?: true
    breakingCapacity?: true
  }

  export type ProtectionCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    ratedCurrent?: true
    numberOfPoles?: true
    curveType?: true
    breakingCapacity?: true
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
    ratedCurrent: number
    numberOfPoles: number
    curveType: $Enums.CurveType
    breakingCapacity: number
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
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    ratedCurrent?: boolean
    numberOfPoles?: boolean
    curveType?: boolean
    breakingCapacity?: boolean
  }

  export type ProtectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "ratedCurrent" | "numberOfPoles" | "curveType" | "breakingCapacity", ExtArgs["result"]["protection"]>
  export type ProtectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
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
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      type: $Enums.ProtectionType
      ratedCurrent: number
      numberOfPoles: number
      curveType: $Enums.CurveType
      breakingCapacity: number
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
    readonly ratedCurrent: FieldRef<"Protection", 'Float'>
    readonly numberOfPoles: FieldRef<"Protection", 'Int'>
    readonly curveType: FieldRef<"Protection", 'CurveType'>
    readonly breakingCapacity: FieldRef<"Protection", 'Float'>
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
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    currentNominal: number | null
    currentDesign: number | null
    recommendedCableSection: number | null
    correctedCableCapacity: number | null
    recommendedBreaker: number | null
    voltageDropVolts: number | null
    voltageDropPercent: number | null
    shortCircuitCurrentAtEnd: number | null
    breakerBreakingCapacity: number | null
  }

  export type ResultSumAggregateOutputType = {
    currentNominal: number | null
    currentDesign: number | null
    recommendedCableSection: number | null
    correctedCableCapacity: number | null
    recommendedBreaker: number | null
    voltageDropVolts: number | null
    voltageDropPercent: number | null
    shortCircuitCurrentAtEnd: number | null
    breakerBreakingCapacity: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    currentNominal: number | null
    currentDesign: number | null
    recommendedCableSection: number | null
    correctedCableCapacity: number | null
    recommendedBreaker: number | null
    voltageDropVolts: number | null
    voltageDropPercent: number | null
    shortCircuitCurrentAtEnd: number | null
    breakerBreakingCapacity: number | null
    overloadCheck: $Enums.CheckStatus | null
    voltageDropCheck: $Enums.CheckStatus | null
    breakingCapacityCheck: $Enums.CheckStatus | null
    coordinationCheck: $Enums.CheckStatus | null
  }

  export type ResultMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    currentNominal: number | null
    currentDesign: number | null
    recommendedCableSection: number | null
    correctedCableCapacity: number | null
    recommendedBreaker: number | null
    voltageDropVolts: number | null
    voltageDropPercent: number | null
    shortCircuitCurrentAtEnd: number | null
    breakerBreakingCapacity: number | null
    overloadCheck: $Enums.CheckStatus | null
    voltageDropCheck: $Enums.CheckStatus | null
    breakingCapacityCheck: $Enums.CheckStatus | null
    coordinationCheck: $Enums.CheckStatus | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    projectId: number
    currentNominal: number
    currentDesign: number
    recommendedCableSection: number
    correctedCableCapacity: number
    recommendedBreaker: number
    voltageDropVolts: number
    voltageDropPercent: number
    shortCircuitCurrentAtEnd: number
    breakerBreakingCapacity: number
    overloadCheck: number
    voltageDropCheck: number
    breakingCapacityCheck: number
    coordinationCheck: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    currentNominal?: true
    currentDesign?: true
    recommendedCableSection?: true
    correctedCableCapacity?: true
    recommendedBreaker?: true
    voltageDropVolts?: true
    voltageDropPercent?: true
    shortCircuitCurrentAtEnd?: true
    breakerBreakingCapacity?: true
  }

  export type ResultSumAggregateInputType = {
    currentNominal?: true
    currentDesign?: true
    recommendedCableSection?: true
    correctedCableCapacity?: true
    recommendedBreaker?: true
    voltageDropVolts?: true
    voltageDropPercent?: true
    shortCircuitCurrentAtEnd?: true
    breakerBreakingCapacity?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    projectId?: true
    currentNominal?: true
    currentDesign?: true
    recommendedCableSection?: true
    correctedCableCapacity?: true
    recommendedBreaker?: true
    voltageDropVolts?: true
    voltageDropPercent?: true
    shortCircuitCurrentAtEnd?: true
    breakerBreakingCapacity?: true
    overloadCheck?: true
    voltageDropCheck?: true
    breakingCapacityCheck?: true
    coordinationCheck?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    projectId?: true
    currentNominal?: true
    currentDesign?: true
    recommendedCableSection?: true
    correctedCableCapacity?: true
    recommendedBreaker?: true
    voltageDropVolts?: true
    voltageDropPercent?: true
    shortCircuitCurrentAtEnd?: true
    breakerBreakingCapacity?: true
    overloadCheck?: true
    voltageDropCheck?: true
    breakingCapacityCheck?: true
    coordinationCheck?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    projectId?: true
    currentNominal?: true
    currentDesign?: true
    recommendedCableSection?: true
    correctedCableCapacity?: true
    recommendedBreaker?: true
    voltageDropVolts?: true
    voltageDropPercent?: true
    shortCircuitCurrentAtEnd?: true
    breakerBreakingCapacity?: true
    overloadCheck?: true
    voltageDropCheck?: true
    breakingCapacityCheck?: true
    coordinationCheck?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: string
    projectId: string
    currentNominal: number
    currentDesign: number
    recommendedCableSection: number
    correctedCableCapacity: number
    recommendedBreaker: number
    voltageDropVolts: number
    voltageDropPercent: number
    shortCircuitCurrentAtEnd: number
    breakerBreakingCapacity: number
    overloadCheck: $Enums.CheckStatus
    voltageDropCheck: $Enums.CheckStatus
    breakingCapacityCheck: $Enums.CheckStatus
    coordinationCheck: $Enums.CheckStatus
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    currentNominal?: boolean
    currentDesign?: boolean
    recommendedCableSection?: boolean
    correctedCableCapacity?: boolean
    recommendedBreaker?: boolean
    voltageDropVolts?: boolean
    voltageDropPercent?: boolean
    shortCircuitCurrentAtEnd?: boolean
    breakerBreakingCapacity?: boolean
    overloadCheck?: boolean
    voltageDropCheck?: boolean
    breakingCapacityCheck?: boolean
    coordinationCheck?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    currentNominal?: boolean
    currentDesign?: boolean
    recommendedCableSection?: boolean
    correctedCableCapacity?: boolean
    recommendedBreaker?: boolean
    voltageDropVolts?: boolean
    voltageDropPercent?: boolean
    shortCircuitCurrentAtEnd?: boolean
    breakerBreakingCapacity?: boolean
    overloadCheck?: boolean
    voltageDropCheck?: boolean
    breakingCapacityCheck?: boolean
    coordinationCheck?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    currentNominal?: boolean
    currentDesign?: boolean
    recommendedCableSection?: boolean
    correctedCableCapacity?: boolean
    recommendedBreaker?: boolean
    voltageDropVolts?: boolean
    voltageDropPercent?: boolean
    shortCircuitCurrentAtEnd?: boolean
    breakerBreakingCapacity?: boolean
    overloadCheck?: boolean
    voltageDropCheck?: boolean
    breakingCapacityCheck?: boolean
    coordinationCheck?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    id?: boolean
    projectId?: boolean
    currentNominal?: boolean
    currentDesign?: boolean
    recommendedCableSection?: boolean
    correctedCableCapacity?: boolean
    recommendedBreaker?: boolean
    voltageDropVolts?: boolean
    voltageDropPercent?: boolean
    shortCircuitCurrentAtEnd?: boolean
    breakerBreakingCapacity?: boolean
    overloadCheck?: boolean
    voltageDropCheck?: boolean
    breakingCapacityCheck?: boolean
    coordinationCheck?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "currentNominal" | "currentDesign" | "recommendedCableSection" | "correctedCableCapacity" | "recommendedBreaker" | "voltageDropVolts" | "voltageDropPercent" | "shortCircuitCurrentAtEnd" | "breakerBreakingCapacity" | "overloadCheck" | "voltageDropCheck" | "breakingCapacityCheck" | "coordinationCheck", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      currentNominal: number
      currentDesign: number
      recommendedCableSection: number
      correctedCableCapacity: number
      recommendedBreaker: number
      voltageDropVolts: number
      voltageDropPercent: number
      shortCircuitCurrentAtEnd: number
      breakerBreakingCapacity: number
      overloadCheck: $Enums.CheckStatus
      voltageDropCheck: $Enums.CheckStatus
      breakingCapacityCheck: $Enums.CheckStatus
      coordinationCheck: $Enums.CheckStatus
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Results and returns the data saved in the database.
     * @param {ResultCreateManyAndReturnArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results and returns the data updated in the database.
     * @param {ResultUpdateManyAndReturnArgs} args - Arguments to update many Results.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
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
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'String'>
    readonly projectId: FieldRef<"Result", 'String'>
    readonly currentNominal: FieldRef<"Result", 'Float'>
    readonly currentDesign: FieldRef<"Result", 'Float'>
    readonly recommendedCableSection: FieldRef<"Result", 'Float'>
    readonly correctedCableCapacity: FieldRef<"Result", 'Float'>
    readonly recommendedBreaker: FieldRef<"Result", 'Float'>
    readonly voltageDropVolts: FieldRef<"Result", 'Float'>
    readonly voltageDropPercent: FieldRef<"Result", 'Float'>
    readonly shortCircuitCurrentAtEnd: FieldRef<"Result", 'Float'>
    readonly breakerBreakingCapacity: FieldRef<"Result", 'Float'>
    readonly overloadCheck: FieldRef<"Result", 'CheckStatus'>
    readonly voltageDropCheck: FieldRef<"Result", 'CheckStatus'>
    readonly breakingCapacityCheck: FieldRef<"Result", 'CheckStatus'>
    readonly coordinationCheck: FieldRef<"Result", 'CheckStatus'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result createManyAndReturn
   */
  export type ResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result updateManyAndReturn
   */
  export type ResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
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
    avatarUrl: 'avatarUrl',
    password: 'password',
    role: 'role',
    status: 'status',
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
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    client: 'client',
    location: 'location'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const PowerSupplyScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    nominalVoltage: 'nominalVoltage',
    frequency: 'frequency',
    regimeNeutre: 'regimeNeutre',
    distanceSourceToTGBT: 'distanceSourceToTGBT',
    standard: 'standard'
  };

  export type PowerSupplyScalarFieldEnum = (typeof PowerSupplyScalarFieldEnum)[keyof typeof PowerSupplyScalarFieldEnum]


  export const CircuitScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    circuitCount: 'circuitCount',
    type: 'type',
    totalPower: 'totalPower',
    cosPhi: 'cosPhi',
    utilizationFactor: 'utilizationFactor',
    simultaneityFactor: 'simultaneityFactor',
    distance: 'distance',
    cableMaterial: 'cableMaterial',
    cableIsolation: 'cableIsolation',
    modePose: 'modePose',
    correctionFactors: 'correctionFactors',
    izReference: 'izReference',
    millivoltsPerAmpereMeter: 'millivoltsPerAmpereMeter',
    protectionType: 'protectionType',
    ratedCurrent: 'ratedCurrent',
    numberOfPoles: 'numberOfPoles',
    curveType: 'curveType',
    breakingCapacity: 'breakingCapacity',
    selectivityVerified: 'selectivityVerified'
  };

  export type CircuitScalarFieldEnum = (typeof CircuitScalarFieldEnum)[keyof typeof CircuitScalarFieldEnum]


  export const FurthestLoadDistanceScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    circuitName: 'circuitName',
    distance: 'distance'
  };

  export type FurthestLoadDistanceScalarFieldEnum = (typeof FurthestLoadDistanceScalarFieldEnum)[keyof typeof FurthestLoadDistanceScalarFieldEnum]


  export const CableDataScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    material: 'material',
    isolation: 'isolation',
    modePose: 'modePose'
  };

  export type CableDataScalarFieldEnum = (typeof CableDataScalarFieldEnum)[keyof typeof CableDataScalarFieldEnum]


  export const ProtectionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    ratedCurrent: 'ratedCurrent',
    numberOfPoles: 'numberOfPoles',
    curveType: 'curveType',
    breakingCapacity: 'breakingCapacity'
  };

  export type ProtectionScalarFieldEnum = (typeof ProtectionScalarFieldEnum)[keyof typeof ProtectionScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    currentNominal: 'currentNominal',
    currentDesign: 'currentDesign',
    recommendedCableSection: 'recommendedCableSection',
    correctedCableCapacity: 'correctedCableCapacity',
    recommendedBreaker: 'recommendedBreaker',
    voltageDropVolts: 'voltageDropVolts',
    voltageDropPercent: 'voltageDropPercent',
    shortCircuitCurrentAtEnd: 'shortCircuitCurrentAtEnd',
    breakerBreakingCapacity: 'breakerBreakingCapacity',
    overloadCheck: 'overloadCheck',
    voltageDropCheck: 'voltageDropCheck',
    breakingCapacityCheck: 'breakingCapacityCheck',
    coordinationCheck: 'coordinationCheck'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


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
   * Reference to a field of type 'AlimentationType'
   */
  export type EnumAlimentationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlimentationType'>
    


  /**
   * Reference to a field of type 'AlimentationType[]'
   */
  export type ListEnumAlimentationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlimentationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RegimeNeutre'
   */
  export type EnumRegimeNeutreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegimeNeutre'>
    


  /**
   * Reference to a field of type 'RegimeNeutre[]'
   */
  export type ListEnumRegimeNeutreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegimeNeutre[]'>
    


  /**
   * Reference to a field of type 'Standard'
   */
  export type EnumStandardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Standard'>
    


  /**
   * Reference to a field of type 'Standard[]'
   */
  export type ListEnumStandardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Standard[]'>
    


  /**
   * Reference to a field of type 'CircuitType'
   */
  export type EnumCircuitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircuitType'>
    


  /**
   * Reference to a field of type 'CircuitType[]'
   */
  export type ListEnumCircuitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircuitType[]'>
    


  /**
   * Reference to a field of type 'CableMaterial'
   */
  export type EnumCableMaterialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CableMaterial'>
    


  /**
   * Reference to a field of type 'CableMaterial[]'
   */
  export type ListEnumCableMaterialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CableMaterial[]'>
    


  /**
   * Reference to a field of type 'CableIsolation'
   */
  export type EnumCableIsolationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CableIsolation'>
    


  /**
   * Reference to a field of type 'CableIsolation[]'
   */
  export type ListEnumCableIsolationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CableIsolation[]'>
    


  /**
   * Reference to a field of type 'ModePose'
   */
  export type EnumModePoseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePose'>
    


  /**
   * Reference to a field of type 'ModePose[]'
   */
  export type ListEnumModePoseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePose[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ProtectionType'
   */
  export type EnumProtectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProtectionType'>
    


  /**
   * Reference to a field of type 'ProtectionType[]'
   */
  export type ListEnumProtectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProtectionType[]'>
    


  /**
   * Reference to a field of type 'CurveType'
   */
  export type EnumCurveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurveType'>
    


  /**
   * Reference to a field of type 'CurveType[]'
   */
  export type ListEnumCurveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurveType[]'>
    


  /**
   * Reference to a field of type 'CheckStatus'
   */
  export type EnumCheckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckStatus'>
    


  /**
   * Reference to a field of type 'CheckStatus[]'
   */
  export type ListEnumCheckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckStatus[]'>
    
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
    avatarUrl?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
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
    avatarUrl?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
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
    avatarUrl?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
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
    avatarUrl?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
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
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
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
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    client?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    powerSupply?: XOR<PowerSupplyNullableScalarRelationFilter, PowerSupplyWhereInput> | null
    circuits?: CircuitListRelationFilter
    cableData?: XOR<CableDataNullableScalarRelationFilter, CableDataWhereInput> | null
    protection?: XOR<ProtectionNullableScalarRelationFilter, ProtectionWhereInput> | null
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    furthestLoadDistance?: XOR<FurthestLoadDistanceNullableScalarRelationFilter, FurthestLoadDistanceWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    client?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    powerSupply?: PowerSupplyOrderByWithRelationInput
    circuits?: CircuitOrderByRelationAggregateInput
    cableData?: CableDataOrderByWithRelationInput
    protection?: ProtectionOrderByWithRelationInput
    result?: ResultOrderByWithRelationInput
    furthestLoadDistance?: FurthestLoadDistanceOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    client?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    powerSupply?: XOR<PowerSupplyNullableScalarRelationFilter, PowerSupplyWhereInput> | null
    circuits?: CircuitListRelationFilter
    cableData?: XOR<CableDataNullableScalarRelationFilter, CableDataWhereInput> | null
    protection?: XOR<ProtectionNullableScalarRelationFilter, ProtectionWhereInput> | null
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    furthestLoadDistance?: XOR<FurthestLoadDistanceNullableScalarRelationFilter, FurthestLoadDistanceWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    client?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    name?: StringWithAggregatesFilter<"Project"> | string
    client?: StringNullableWithAggregatesFilter<"Project"> | string | null
    location?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type PowerSupplyWhereInput = {
    AND?: PowerSupplyWhereInput | PowerSupplyWhereInput[]
    OR?: PowerSupplyWhereInput[]
    NOT?: PowerSupplyWhereInput | PowerSupplyWhereInput[]
    id?: StringFilter<"PowerSupply"> | string
    projectId?: StringFilter<"PowerSupply"> | string
    type?: EnumAlimentationTypeFilter<"PowerSupply"> | $Enums.AlimentationType
    nominalVoltage?: FloatFilter<"PowerSupply"> | number
    frequency?: FloatFilter<"PowerSupply"> | number
    regimeNeutre?: EnumRegimeNeutreFilter<"PowerSupply"> | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFilter<"PowerSupply"> | number
    standard?: EnumStandardFilter<"PowerSupply"> | $Enums.Standard
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PowerSupplyOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    nominalVoltage?: SortOrder
    frequency?: SortOrder
    regimeNeutre?: SortOrder
    distanceSourceToTGBT?: SortOrder
    standard?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type PowerSupplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: PowerSupplyWhereInput | PowerSupplyWhereInput[]
    OR?: PowerSupplyWhereInput[]
    NOT?: PowerSupplyWhereInput | PowerSupplyWhereInput[]
    type?: EnumAlimentationTypeFilter<"PowerSupply"> | $Enums.AlimentationType
    nominalVoltage?: FloatFilter<"PowerSupply"> | number
    frequency?: FloatFilter<"PowerSupply"> | number
    regimeNeutre?: EnumRegimeNeutreFilter<"PowerSupply"> | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFilter<"PowerSupply"> | number
    standard?: EnumStandardFilter<"PowerSupply"> | $Enums.Standard
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type PowerSupplyOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    nominalVoltage?: SortOrder
    frequency?: SortOrder
    regimeNeutre?: SortOrder
    distanceSourceToTGBT?: SortOrder
    standard?: SortOrder
    _count?: PowerSupplyCountOrderByAggregateInput
    _avg?: PowerSupplyAvgOrderByAggregateInput
    _max?: PowerSupplyMaxOrderByAggregateInput
    _min?: PowerSupplyMinOrderByAggregateInput
    _sum?: PowerSupplySumOrderByAggregateInput
  }

  export type PowerSupplyScalarWhereWithAggregatesInput = {
    AND?: PowerSupplyScalarWhereWithAggregatesInput | PowerSupplyScalarWhereWithAggregatesInput[]
    OR?: PowerSupplyScalarWhereWithAggregatesInput[]
    NOT?: PowerSupplyScalarWhereWithAggregatesInput | PowerSupplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PowerSupply"> | string
    projectId?: StringWithAggregatesFilter<"PowerSupply"> | string
    type?: EnumAlimentationTypeWithAggregatesFilter<"PowerSupply"> | $Enums.AlimentationType
    nominalVoltage?: FloatWithAggregatesFilter<"PowerSupply"> | number
    frequency?: FloatWithAggregatesFilter<"PowerSupply"> | number
    regimeNeutre?: EnumRegimeNeutreWithAggregatesFilter<"PowerSupply"> | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatWithAggregatesFilter<"PowerSupply"> | number
    standard?: EnumStandardWithAggregatesFilter<"PowerSupply"> | $Enums.Standard
  }

  export type CircuitWhereInput = {
    AND?: CircuitWhereInput | CircuitWhereInput[]
    OR?: CircuitWhereInput[]
    NOT?: CircuitWhereInput | CircuitWhereInput[]
    id?: StringFilter<"Circuit"> | string
    projectId?: StringFilter<"Circuit"> | string
    name?: StringFilter<"Circuit"> | string
    circuitCount?: IntFilter<"Circuit"> | number
    type?: EnumCircuitTypeFilter<"Circuit"> | $Enums.CircuitType
    totalPower?: FloatFilter<"Circuit"> | number
    cosPhi?: FloatFilter<"Circuit"> | number
    utilizationFactor?: FloatFilter<"Circuit"> | number
    simultaneityFactor?: FloatFilter<"Circuit"> | number
    distance?: FloatNullableFilter<"Circuit"> | number | null
    cableMaterial?: EnumCableMaterialNullableFilter<"Circuit"> | $Enums.CableMaterial | null
    cableIsolation?: EnumCableIsolationNullableFilter<"Circuit"> | $Enums.CableIsolation | null
    modePose?: EnumModePoseNullableFilter<"Circuit"> | $Enums.ModePose | null
    correctionFactors?: JsonNullableFilter<"Circuit">
    izReference?: FloatNullableFilter<"Circuit"> | number | null
    millivoltsPerAmpereMeter?: FloatNullableFilter<"Circuit"> | number | null
    protectionType?: EnumProtectionTypeNullableFilter<"Circuit"> | $Enums.ProtectionType | null
    ratedCurrent?: FloatNullableFilter<"Circuit"> | number | null
    numberOfPoles?: IntNullableFilter<"Circuit"> | number | null
    curveType?: EnumCurveTypeNullableFilter<"Circuit"> | $Enums.CurveType | null
    breakingCapacity?: FloatNullableFilter<"Circuit"> | number | null
    selectivityVerified?: BoolFilter<"Circuit"> | boolean
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type CircuitOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    circuitCount?: SortOrder
    type?: SortOrder
    totalPower?: SortOrder
    cosPhi?: SortOrder
    utilizationFactor?: SortOrder
    simultaneityFactor?: SortOrder
    distance?: SortOrderInput | SortOrder
    cableMaterial?: SortOrderInput | SortOrder
    cableIsolation?: SortOrderInput | SortOrder
    modePose?: SortOrderInput | SortOrder
    correctionFactors?: SortOrderInput | SortOrder
    izReference?: SortOrderInput | SortOrder
    millivoltsPerAmpereMeter?: SortOrderInput | SortOrder
    protectionType?: SortOrderInput | SortOrder
    ratedCurrent?: SortOrderInput | SortOrder
    numberOfPoles?: SortOrderInput | SortOrder
    curveType?: SortOrderInput | SortOrder
    breakingCapacity?: SortOrderInput | SortOrder
    selectivityVerified?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type CircuitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircuitWhereInput | CircuitWhereInput[]
    OR?: CircuitWhereInput[]
    NOT?: CircuitWhereInput | CircuitWhereInput[]
    projectId?: StringFilter<"Circuit"> | string
    name?: StringFilter<"Circuit"> | string
    circuitCount?: IntFilter<"Circuit"> | number
    type?: EnumCircuitTypeFilter<"Circuit"> | $Enums.CircuitType
    totalPower?: FloatFilter<"Circuit"> | number
    cosPhi?: FloatFilter<"Circuit"> | number
    utilizationFactor?: FloatFilter<"Circuit"> | number
    simultaneityFactor?: FloatFilter<"Circuit"> | number
    distance?: FloatNullableFilter<"Circuit"> | number | null
    cableMaterial?: EnumCableMaterialNullableFilter<"Circuit"> | $Enums.CableMaterial | null
    cableIsolation?: EnumCableIsolationNullableFilter<"Circuit"> | $Enums.CableIsolation | null
    modePose?: EnumModePoseNullableFilter<"Circuit"> | $Enums.ModePose | null
    correctionFactors?: JsonNullableFilter<"Circuit">
    izReference?: FloatNullableFilter<"Circuit"> | number | null
    millivoltsPerAmpereMeter?: FloatNullableFilter<"Circuit"> | number | null
    protectionType?: EnumProtectionTypeNullableFilter<"Circuit"> | $Enums.ProtectionType | null
    ratedCurrent?: FloatNullableFilter<"Circuit"> | number | null
    numberOfPoles?: IntNullableFilter<"Circuit"> | number | null
    curveType?: EnumCurveTypeNullableFilter<"Circuit"> | $Enums.CurveType | null
    breakingCapacity?: FloatNullableFilter<"Circuit"> | number | null
    selectivityVerified?: BoolFilter<"Circuit"> | boolean
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type CircuitOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    circuitCount?: SortOrder
    type?: SortOrder
    totalPower?: SortOrder
    cosPhi?: SortOrder
    utilizationFactor?: SortOrder
    simultaneityFactor?: SortOrder
    distance?: SortOrderInput | SortOrder
    cableMaterial?: SortOrderInput | SortOrder
    cableIsolation?: SortOrderInput | SortOrder
    modePose?: SortOrderInput | SortOrder
    correctionFactors?: SortOrderInput | SortOrder
    izReference?: SortOrderInput | SortOrder
    millivoltsPerAmpereMeter?: SortOrderInput | SortOrder
    protectionType?: SortOrderInput | SortOrder
    ratedCurrent?: SortOrderInput | SortOrder
    numberOfPoles?: SortOrderInput | SortOrder
    curveType?: SortOrderInput | SortOrder
    breakingCapacity?: SortOrderInput | SortOrder
    selectivityVerified?: SortOrder
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
    name?: StringWithAggregatesFilter<"Circuit"> | string
    circuitCount?: IntWithAggregatesFilter<"Circuit"> | number
    type?: EnumCircuitTypeWithAggregatesFilter<"Circuit"> | $Enums.CircuitType
    totalPower?: FloatWithAggregatesFilter<"Circuit"> | number
    cosPhi?: FloatWithAggregatesFilter<"Circuit"> | number
    utilizationFactor?: FloatWithAggregatesFilter<"Circuit"> | number
    simultaneityFactor?: FloatWithAggregatesFilter<"Circuit"> | number
    distance?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    cableMaterial?: EnumCableMaterialNullableWithAggregatesFilter<"Circuit"> | $Enums.CableMaterial | null
    cableIsolation?: EnumCableIsolationNullableWithAggregatesFilter<"Circuit"> | $Enums.CableIsolation | null
    modePose?: EnumModePoseNullableWithAggregatesFilter<"Circuit"> | $Enums.ModePose | null
    correctionFactors?: JsonNullableWithAggregatesFilter<"Circuit">
    izReference?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    millivoltsPerAmpereMeter?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    protectionType?: EnumProtectionTypeNullableWithAggregatesFilter<"Circuit"> | $Enums.ProtectionType | null
    ratedCurrent?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    numberOfPoles?: IntNullableWithAggregatesFilter<"Circuit"> | number | null
    curveType?: EnumCurveTypeNullableWithAggregatesFilter<"Circuit"> | $Enums.CurveType | null
    breakingCapacity?: FloatNullableWithAggregatesFilter<"Circuit"> | number | null
    selectivityVerified?: BoolWithAggregatesFilter<"Circuit"> | boolean
  }

  export type FurthestLoadDistanceWhereInput = {
    AND?: FurthestLoadDistanceWhereInput | FurthestLoadDistanceWhereInput[]
    OR?: FurthestLoadDistanceWhereInput[]
    NOT?: FurthestLoadDistanceWhereInput | FurthestLoadDistanceWhereInput[]
    id?: StringFilter<"FurthestLoadDistance"> | string
    projectId?: StringFilter<"FurthestLoadDistance"> | string
    circuitName?: StringFilter<"FurthestLoadDistance"> | string
    distance?: FloatFilter<"FurthestLoadDistance"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type FurthestLoadDistanceOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    circuitName?: SortOrder
    distance?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type FurthestLoadDistanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: FurthestLoadDistanceWhereInput | FurthestLoadDistanceWhereInput[]
    OR?: FurthestLoadDistanceWhereInput[]
    NOT?: FurthestLoadDistanceWhereInput | FurthestLoadDistanceWhereInput[]
    circuitName?: StringFilter<"FurthestLoadDistance"> | string
    distance?: FloatFilter<"FurthestLoadDistance"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type FurthestLoadDistanceOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    circuitName?: SortOrder
    distance?: SortOrder
    _count?: FurthestLoadDistanceCountOrderByAggregateInput
    _avg?: FurthestLoadDistanceAvgOrderByAggregateInput
    _max?: FurthestLoadDistanceMaxOrderByAggregateInput
    _min?: FurthestLoadDistanceMinOrderByAggregateInput
    _sum?: FurthestLoadDistanceSumOrderByAggregateInput
  }

  export type FurthestLoadDistanceScalarWhereWithAggregatesInput = {
    AND?: FurthestLoadDistanceScalarWhereWithAggregatesInput | FurthestLoadDistanceScalarWhereWithAggregatesInput[]
    OR?: FurthestLoadDistanceScalarWhereWithAggregatesInput[]
    NOT?: FurthestLoadDistanceScalarWhereWithAggregatesInput | FurthestLoadDistanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FurthestLoadDistance"> | string
    projectId?: StringWithAggregatesFilter<"FurthestLoadDistance"> | string
    circuitName?: StringWithAggregatesFilter<"FurthestLoadDistance"> | string
    distance?: FloatWithAggregatesFilter<"FurthestLoadDistance"> | number
  }

  export type CableDataWhereInput = {
    AND?: CableDataWhereInput | CableDataWhereInput[]
    OR?: CableDataWhereInput[]
    NOT?: CableDataWhereInput | CableDataWhereInput[]
    id?: StringFilter<"CableData"> | string
    projectId?: StringFilter<"CableData"> | string
    material?: EnumCableMaterialFilter<"CableData"> | $Enums.CableMaterial
    isolation?: EnumCableIsolationFilter<"CableData"> | $Enums.CableIsolation
    modePose?: EnumModePoseFilter<"CableData"> | $Enums.ModePose
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type CableDataOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    material?: SortOrder
    isolation?: SortOrder
    modePose?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type CableDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: CableDataWhereInput | CableDataWhereInput[]
    OR?: CableDataWhereInput[]
    NOT?: CableDataWhereInput | CableDataWhereInput[]
    material?: EnumCableMaterialFilter<"CableData"> | $Enums.CableMaterial
    isolation?: EnumCableIsolationFilter<"CableData"> | $Enums.CableIsolation
    modePose?: EnumModePoseFilter<"CableData"> | $Enums.ModePose
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type CableDataOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    material?: SortOrder
    isolation?: SortOrder
    modePose?: SortOrder
    _count?: CableDataCountOrderByAggregateInput
    _max?: CableDataMaxOrderByAggregateInput
    _min?: CableDataMinOrderByAggregateInput
  }

  export type CableDataScalarWhereWithAggregatesInput = {
    AND?: CableDataScalarWhereWithAggregatesInput | CableDataScalarWhereWithAggregatesInput[]
    OR?: CableDataScalarWhereWithAggregatesInput[]
    NOT?: CableDataScalarWhereWithAggregatesInput | CableDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CableData"> | string
    projectId?: StringWithAggregatesFilter<"CableData"> | string
    material?: EnumCableMaterialWithAggregatesFilter<"CableData"> | $Enums.CableMaterial
    isolation?: EnumCableIsolationWithAggregatesFilter<"CableData"> | $Enums.CableIsolation
    modePose?: EnumModePoseWithAggregatesFilter<"CableData"> | $Enums.ModePose
  }

  export type ProtectionWhereInput = {
    AND?: ProtectionWhereInput | ProtectionWhereInput[]
    OR?: ProtectionWhereInput[]
    NOT?: ProtectionWhereInput | ProtectionWhereInput[]
    id?: StringFilter<"Protection"> | string
    projectId?: StringFilter<"Protection"> | string
    type?: EnumProtectionTypeFilter<"Protection"> | $Enums.ProtectionType
    ratedCurrent?: FloatFilter<"Protection"> | number
    numberOfPoles?: IntFilter<"Protection"> | number
    curveType?: EnumCurveTypeFilter<"Protection"> | $Enums.CurveType
    breakingCapacity?: FloatFilter<"Protection"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProtectionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProtectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ProtectionWhereInput | ProtectionWhereInput[]
    OR?: ProtectionWhereInput[]
    NOT?: ProtectionWhereInput | ProtectionWhereInput[]
    type?: EnumProtectionTypeFilter<"Protection"> | $Enums.ProtectionType
    ratedCurrent?: FloatFilter<"Protection"> | number
    numberOfPoles?: IntFilter<"Protection"> | number
    curveType?: EnumCurveTypeFilter<"Protection"> | $Enums.CurveType
    breakingCapacity?: FloatFilter<"Protection"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ProtectionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
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
    ratedCurrent?: FloatWithAggregatesFilter<"Protection"> | number
    numberOfPoles?: IntWithAggregatesFilter<"Protection"> | number
    curveType?: EnumCurveTypeWithAggregatesFilter<"Protection"> | $Enums.CurveType
    breakingCapacity?: FloatWithAggregatesFilter<"Protection"> | number
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: StringFilter<"Result"> | string
    projectId?: StringFilter<"Result"> | string
    currentNominal?: FloatFilter<"Result"> | number
    currentDesign?: FloatFilter<"Result"> | number
    recommendedCableSection?: FloatFilter<"Result"> | number
    correctedCableCapacity?: FloatFilter<"Result"> | number
    recommendedBreaker?: FloatFilter<"Result"> | number
    voltageDropVolts?: FloatFilter<"Result"> | number
    voltageDropPercent?: FloatFilter<"Result"> | number
    shortCircuitCurrentAtEnd?: FloatFilter<"Result"> | number
    breakerBreakingCapacity?: FloatFilter<"Result"> | number
    overloadCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    currentNominal?: SortOrder
    currentDesign?: SortOrder
    recommendedCableSection?: SortOrder
    correctedCableCapacity?: SortOrder
    recommendedBreaker?: SortOrder
    voltageDropVolts?: SortOrder
    voltageDropPercent?: SortOrder
    shortCircuitCurrentAtEnd?: SortOrder
    breakerBreakingCapacity?: SortOrder
    overloadCheck?: SortOrder
    voltageDropCheck?: SortOrder
    breakingCapacityCheck?: SortOrder
    coordinationCheck?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    currentNominal?: FloatFilter<"Result"> | number
    currentDesign?: FloatFilter<"Result"> | number
    recommendedCableSection?: FloatFilter<"Result"> | number
    correctedCableCapacity?: FloatFilter<"Result"> | number
    recommendedBreaker?: FloatFilter<"Result"> | number
    voltageDropVolts?: FloatFilter<"Result"> | number
    voltageDropPercent?: FloatFilter<"Result"> | number
    shortCircuitCurrentAtEnd?: FloatFilter<"Result"> | number
    breakerBreakingCapacity?: FloatFilter<"Result"> | number
    overloadCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFilter<"Result"> | $Enums.CheckStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    currentNominal?: SortOrder
    currentDesign?: SortOrder
    recommendedCableSection?: SortOrder
    correctedCableCapacity?: SortOrder
    recommendedBreaker?: SortOrder
    voltageDropVolts?: SortOrder
    voltageDropPercent?: SortOrder
    shortCircuitCurrentAtEnd?: SortOrder
    breakerBreakingCapacity?: SortOrder
    overloadCheck?: SortOrder
    voltageDropCheck?: SortOrder
    breakingCapacityCheck?: SortOrder
    coordinationCheck?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Result"> | string
    projectId?: StringWithAggregatesFilter<"Result"> | string
    currentNominal?: FloatWithAggregatesFilter<"Result"> | number
    currentDesign?: FloatWithAggregatesFilter<"Result"> | number
    recommendedCableSection?: FloatWithAggregatesFilter<"Result"> | number
    correctedCableCapacity?: FloatWithAggregatesFilter<"Result"> | number
    recommendedBreaker?: FloatWithAggregatesFilter<"Result"> | number
    voltageDropVolts?: FloatWithAggregatesFilter<"Result"> | number
    voltageDropPercent?: FloatWithAggregatesFilter<"Result"> | number
    shortCircuitCurrentAtEnd?: FloatWithAggregatesFilter<"Result"> | number
    breakerBreakingCapacity?: FloatWithAggregatesFilter<"Result"> | number
    overloadCheck?: EnumCheckStatusWithAggregatesFilter<"Result"> | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusWithAggregatesFilter<"Result"> | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusWithAggregatesFilter<"Result"> | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusWithAggregatesFilter<"Result"> | $Enums.CheckStatus
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
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
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    powerSupply?: PowerSupplyCreateNestedOneWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    cableData?: CableDataCreateNestedOneWithoutProjectInput
    protection?: ProtectionCreateNestedOneWithoutProjectInput
    result?: ResultCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyUncheckedCreateNestedOneWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    cableData?: CableDataUncheckedCreateNestedOneWithoutProjectInput
    protection?: ProtectionUncheckedCreateNestedOneWithoutProjectInput
    result?: ResultUncheckedCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    powerSupply?: PowerSupplyUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUpdateOneWithoutProjectNestedInput
    result?: ResultUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUncheckedUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUncheckedUpdateOneWithoutProjectNestedInput
    result?: ResultUncheckedUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PowerSupplyCreateInput = {
    id?: string
    type: $Enums.AlimentationType
    nominalVoltage: number
    frequency: number
    regimeNeutre: $Enums.RegimeNeutre
    distanceSourceToTGBT: number
    standard: $Enums.Standard
    project: ProjectCreateNestedOneWithoutPowerSupplyInput
  }

  export type PowerSupplyUncheckedCreateInput = {
    id?: string
    projectId: string
    type: $Enums.AlimentationType
    nominalVoltage: number
    frequency: number
    regimeNeutre: $Enums.RegimeNeutre
    distanceSourceToTGBT: number
    standard: $Enums.Standard
  }

  export type PowerSupplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlimentationTypeFieldUpdateOperationsInput | $Enums.AlimentationType
    nominalVoltage?: FloatFieldUpdateOperationsInput | number
    frequency?: FloatFieldUpdateOperationsInput | number
    regimeNeutre?: EnumRegimeNeutreFieldUpdateOperationsInput | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFieldUpdateOperationsInput | number
    standard?: EnumStandardFieldUpdateOperationsInput | $Enums.Standard
    project?: ProjectUpdateOneRequiredWithoutPowerSupplyNestedInput
  }

  export type PowerSupplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlimentationTypeFieldUpdateOperationsInput | $Enums.AlimentationType
    nominalVoltage?: FloatFieldUpdateOperationsInput | number
    frequency?: FloatFieldUpdateOperationsInput | number
    regimeNeutre?: EnumRegimeNeutreFieldUpdateOperationsInput | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFieldUpdateOperationsInput | number
    standard?: EnumStandardFieldUpdateOperationsInput | $Enums.Standard
  }

  export type PowerSupplyCreateManyInput = {
    id?: string
    projectId: string
    type: $Enums.AlimentationType
    nominalVoltage: number
    frequency: number
    regimeNeutre: $Enums.RegimeNeutre
    distanceSourceToTGBT: number
    standard: $Enums.Standard
  }

  export type PowerSupplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlimentationTypeFieldUpdateOperationsInput | $Enums.AlimentationType
    nominalVoltage?: FloatFieldUpdateOperationsInput | number
    frequency?: FloatFieldUpdateOperationsInput | number
    regimeNeutre?: EnumRegimeNeutreFieldUpdateOperationsInput | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFieldUpdateOperationsInput | number
    standard?: EnumStandardFieldUpdateOperationsInput | $Enums.Standard
  }

  export type PowerSupplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlimentationTypeFieldUpdateOperationsInput | $Enums.AlimentationType
    nominalVoltage?: FloatFieldUpdateOperationsInput | number
    frequency?: FloatFieldUpdateOperationsInput | number
    regimeNeutre?: EnumRegimeNeutreFieldUpdateOperationsInput | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFieldUpdateOperationsInput | number
    standard?: EnumStandardFieldUpdateOperationsInput | $Enums.Standard
  }

  export type CircuitCreateInput = {
    id?: string
    name: string
    circuitCount?: number
    type: $Enums.CircuitType
    totalPower: number
    cosPhi?: number
    utilizationFactor?: number
    simultaneityFactor?: number
    distance?: number | null
    cableMaterial?: $Enums.CableMaterial | null
    cableIsolation?: $Enums.CableIsolation | null
    modePose?: $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: number | null
    millivoltsPerAmpereMeter?: number | null
    protectionType?: $Enums.ProtectionType | null
    ratedCurrent?: number | null
    numberOfPoles?: number | null
    curveType?: $Enums.CurveType | null
    breakingCapacity?: number | null
    selectivityVerified?: boolean
    project: ProjectCreateNestedOneWithoutCircuitsInput
  }

  export type CircuitUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    circuitCount?: number
    type: $Enums.CircuitType
    totalPower: number
    cosPhi?: number
    utilizationFactor?: number
    simultaneityFactor?: number
    distance?: number | null
    cableMaterial?: $Enums.CableMaterial | null
    cableIsolation?: $Enums.CableIsolation | null
    modePose?: $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: number | null
    millivoltsPerAmpereMeter?: number | null
    protectionType?: $Enums.ProtectionType | null
    ratedCurrent?: number | null
    numberOfPoles?: number | null
    curveType?: $Enums.CurveType | null
    breakingCapacity?: number | null
    selectivityVerified?: boolean
  }

  export type CircuitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    circuitCount?: IntFieldUpdateOperationsInput | number
    type?: EnumCircuitTypeFieldUpdateOperationsInput | $Enums.CircuitType
    totalPower?: FloatFieldUpdateOperationsInput | number
    cosPhi?: FloatFieldUpdateOperationsInput | number
    utilizationFactor?: FloatFieldUpdateOperationsInput | number
    simultaneityFactor?: FloatFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    cableMaterial?: NullableEnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial | null
    cableIsolation?: NullableEnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation | null
    modePose?: NullableEnumModePoseFieldUpdateOperationsInput | $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: NullableFloatFieldUpdateOperationsInput | number | null
    millivoltsPerAmpereMeter?: NullableFloatFieldUpdateOperationsInput | number | null
    protectionType?: NullableEnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType | null
    ratedCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: NullableIntFieldUpdateOperationsInput | number | null
    curveType?: NullableEnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType | null
    breakingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    selectivityVerified?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneRequiredWithoutCircuitsNestedInput
  }

  export type CircuitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    circuitCount?: IntFieldUpdateOperationsInput | number
    type?: EnumCircuitTypeFieldUpdateOperationsInput | $Enums.CircuitType
    totalPower?: FloatFieldUpdateOperationsInput | number
    cosPhi?: FloatFieldUpdateOperationsInput | number
    utilizationFactor?: FloatFieldUpdateOperationsInput | number
    simultaneityFactor?: FloatFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    cableMaterial?: NullableEnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial | null
    cableIsolation?: NullableEnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation | null
    modePose?: NullableEnumModePoseFieldUpdateOperationsInput | $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: NullableFloatFieldUpdateOperationsInput | number | null
    millivoltsPerAmpereMeter?: NullableFloatFieldUpdateOperationsInput | number | null
    protectionType?: NullableEnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType | null
    ratedCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: NullableIntFieldUpdateOperationsInput | number | null
    curveType?: NullableEnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType | null
    breakingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    selectivityVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CircuitCreateManyInput = {
    id?: string
    projectId: string
    name: string
    circuitCount?: number
    type: $Enums.CircuitType
    totalPower: number
    cosPhi?: number
    utilizationFactor?: number
    simultaneityFactor?: number
    distance?: number | null
    cableMaterial?: $Enums.CableMaterial | null
    cableIsolation?: $Enums.CableIsolation | null
    modePose?: $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: number | null
    millivoltsPerAmpereMeter?: number | null
    protectionType?: $Enums.ProtectionType | null
    ratedCurrent?: number | null
    numberOfPoles?: number | null
    curveType?: $Enums.CurveType | null
    breakingCapacity?: number | null
    selectivityVerified?: boolean
  }

  export type CircuitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    circuitCount?: IntFieldUpdateOperationsInput | number
    type?: EnumCircuitTypeFieldUpdateOperationsInput | $Enums.CircuitType
    totalPower?: FloatFieldUpdateOperationsInput | number
    cosPhi?: FloatFieldUpdateOperationsInput | number
    utilizationFactor?: FloatFieldUpdateOperationsInput | number
    simultaneityFactor?: FloatFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    cableMaterial?: NullableEnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial | null
    cableIsolation?: NullableEnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation | null
    modePose?: NullableEnumModePoseFieldUpdateOperationsInput | $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: NullableFloatFieldUpdateOperationsInput | number | null
    millivoltsPerAmpereMeter?: NullableFloatFieldUpdateOperationsInput | number | null
    protectionType?: NullableEnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType | null
    ratedCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: NullableIntFieldUpdateOperationsInput | number | null
    curveType?: NullableEnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType | null
    breakingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    selectivityVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CircuitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    circuitCount?: IntFieldUpdateOperationsInput | number
    type?: EnumCircuitTypeFieldUpdateOperationsInput | $Enums.CircuitType
    totalPower?: FloatFieldUpdateOperationsInput | number
    cosPhi?: FloatFieldUpdateOperationsInput | number
    utilizationFactor?: FloatFieldUpdateOperationsInput | number
    simultaneityFactor?: FloatFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    cableMaterial?: NullableEnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial | null
    cableIsolation?: NullableEnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation | null
    modePose?: NullableEnumModePoseFieldUpdateOperationsInput | $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: NullableFloatFieldUpdateOperationsInput | number | null
    millivoltsPerAmpereMeter?: NullableFloatFieldUpdateOperationsInput | number | null
    protectionType?: NullableEnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType | null
    ratedCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: NullableIntFieldUpdateOperationsInput | number | null
    curveType?: NullableEnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType | null
    breakingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    selectivityVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FurthestLoadDistanceCreateInput = {
    id?: string
    circuitName: string
    distance: number
    project: ProjectCreateNestedOneWithoutFurthestLoadDistanceInput
  }

  export type FurthestLoadDistanceUncheckedCreateInput = {
    id?: string
    projectId: string
    circuitName: string
    distance: number
  }

  export type FurthestLoadDistanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circuitName?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutFurthestLoadDistanceNestedInput
  }

  export type FurthestLoadDistanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    circuitName?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type FurthestLoadDistanceCreateManyInput = {
    id?: string
    projectId: string
    circuitName: string
    distance: number
  }

  export type FurthestLoadDistanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    circuitName?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type FurthestLoadDistanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    circuitName?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type CableDataCreateInput = {
    id?: string
    material: $Enums.CableMaterial
    isolation: $Enums.CableIsolation
    modePose: $Enums.ModePose
    project: ProjectCreateNestedOneWithoutCableDataInput
  }

  export type CableDataUncheckedCreateInput = {
    id?: string
    projectId: string
    material: $Enums.CableMaterial
    isolation: $Enums.CableIsolation
    modePose: $Enums.ModePose
  }

  export type CableDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    material?: EnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial
    isolation?: EnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation
    modePose?: EnumModePoseFieldUpdateOperationsInput | $Enums.ModePose
    project?: ProjectUpdateOneRequiredWithoutCableDataNestedInput
  }

  export type CableDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    material?: EnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial
    isolation?: EnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation
    modePose?: EnumModePoseFieldUpdateOperationsInput | $Enums.ModePose
  }

  export type CableDataCreateManyInput = {
    id?: string
    projectId: string
    material: $Enums.CableMaterial
    isolation: $Enums.CableIsolation
    modePose: $Enums.ModePose
  }

  export type CableDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    material?: EnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial
    isolation?: EnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation
    modePose?: EnumModePoseFieldUpdateOperationsInput | $Enums.ModePose
  }

  export type CableDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    material?: EnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial
    isolation?: EnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation
    modePose?: EnumModePoseFieldUpdateOperationsInput | $Enums.ModePose
  }

  export type ProtectionCreateInput = {
    id?: string
    type: $Enums.ProtectionType
    ratedCurrent: number
    numberOfPoles: number
    curveType: $Enums.CurveType
    breakingCapacity: number
    project: ProjectCreateNestedOneWithoutProtectionInput
  }

  export type ProtectionUncheckedCreateInput = {
    id?: string
    projectId: string
    type: $Enums.ProtectionType
    ratedCurrent: number
    numberOfPoles: number
    curveType: $Enums.CurveType
    breakingCapacity: number
  }

  export type ProtectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratedCurrent?: FloatFieldUpdateOperationsInput | number
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    curveType?: EnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType
    breakingCapacity?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutProtectionNestedInput
  }

  export type ProtectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratedCurrent?: FloatFieldUpdateOperationsInput | number
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    curveType?: EnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType
    breakingCapacity?: FloatFieldUpdateOperationsInput | number
  }

  export type ProtectionCreateManyInput = {
    id?: string
    projectId: string
    type: $Enums.ProtectionType
    ratedCurrent: number
    numberOfPoles: number
    curveType: $Enums.CurveType
    breakingCapacity: number
  }

  export type ProtectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratedCurrent?: FloatFieldUpdateOperationsInput | number
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    curveType?: EnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType
    breakingCapacity?: FloatFieldUpdateOperationsInput | number
  }

  export type ProtectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratedCurrent?: FloatFieldUpdateOperationsInput | number
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    curveType?: EnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType
    breakingCapacity?: FloatFieldUpdateOperationsInput | number
  }

  export type ResultCreateInput = {
    id?: string
    currentNominal: number
    currentDesign: number
    recommendedCableSection: number
    correctedCableCapacity: number
    recommendedBreaker: number
    voltageDropVolts: number
    voltageDropPercent: number
    shortCircuitCurrentAtEnd: number
    breakerBreakingCapacity: number
    overloadCheck: $Enums.CheckStatus
    voltageDropCheck: $Enums.CheckStatus
    breakingCapacityCheck: $Enums.CheckStatus
    coordinationCheck: $Enums.CheckStatus
    project: ProjectCreateNestedOneWithoutResultInput
  }

  export type ResultUncheckedCreateInput = {
    id?: string
    projectId: string
    currentNominal: number
    currentDesign: number
    recommendedCableSection: number
    correctedCableCapacity: number
    recommendedBreaker: number
    voltageDropVolts: number
    voltageDropPercent: number
    shortCircuitCurrentAtEnd: number
    breakerBreakingCapacity: number
    overloadCheck: $Enums.CheckStatus
    voltageDropCheck: $Enums.CheckStatus
    breakingCapacityCheck: $Enums.CheckStatus
    coordinationCheck: $Enums.CheckStatus
  }

  export type ResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNominal?: FloatFieldUpdateOperationsInput | number
    currentDesign?: FloatFieldUpdateOperationsInput | number
    recommendedCableSection?: FloatFieldUpdateOperationsInput | number
    correctedCableCapacity?: FloatFieldUpdateOperationsInput | number
    recommendedBreaker?: FloatFieldUpdateOperationsInput | number
    voltageDropVolts?: FloatFieldUpdateOperationsInput | number
    voltageDropPercent?: FloatFieldUpdateOperationsInput | number
    shortCircuitCurrentAtEnd?: FloatFieldUpdateOperationsInput | number
    breakerBreakingCapacity?: FloatFieldUpdateOperationsInput | number
    overloadCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    project?: ProjectUpdateOneRequiredWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    currentNominal?: FloatFieldUpdateOperationsInput | number
    currentDesign?: FloatFieldUpdateOperationsInput | number
    recommendedCableSection?: FloatFieldUpdateOperationsInput | number
    correctedCableCapacity?: FloatFieldUpdateOperationsInput | number
    recommendedBreaker?: FloatFieldUpdateOperationsInput | number
    voltageDropVolts?: FloatFieldUpdateOperationsInput | number
    voltageDropPercent?: FloatFieldUpdateOperationsInput | number
    shortCircuitCurrentAtEnd?: FloatFieldUpdateOperationsInput | number
    breakerBreakingCapacity?: FloatFieldUpdateOperationsInput | number
    overloadCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
  }

  export type ResultCreateManyInput = {
    id?: string
    projectId: string
    currentNominal: number
    currentDesign: number
    recommendedCableSection: number
    correctedCableCapacity: number
    recommendedBreaker: number
    voltageDropVolts: number
    voltageDropPercent: number
    shortCircuitCurrentAtEnd: number
    breakerBreakingCapacity: number
    overloadCheck: $Enums.CheckStatus
    voltageDropCheck: $Enums.CheckStatus
    breakingCapacityCheck: $Enums.CheckStatus
    coordinationCheck: $Enums.CheckStatus
  }

  export type ResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNominal?: FloatFieldUpdateOperationsInput | number
    currentDesign?: FloatFieldUpdateOperationsInput | number
    recommendedCableSection?: FloatFieldUpdateOperationsInput | number
    correctedCableCapacity?: FloatFieldUpdateOperationsInput | number
    recommendedBreaker?: FloatFieldUpdateOperationsInput | number
    voltageDropVolts?: FloatFieldUpdateOperationsInput | number
    voltageDropPercent?: FloatFieldUpdateOperationsInput | number
    shortCircuitCurrentAtEnd?: FloatFieldUpdateOperationsInput | number
    breakerBreakingCapacity?: FloatFieldUpdateOperationsInput | number
    overloadCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    currentNominal?: FloatFieldUpdateOperationsInput | number
    currentDesign?: FloatFieldUpdateOperationsInput | number
    recommendedCableSection?: FloatFieldUpdateOperationsInput | number
    correctedCableCapacity?: FloatFieldUpdateOperationsInput | number
    recommendedBreaker?: FloatFieldUpdateOperationsInput | number
    voltageDropVolts?: FloatFieldUpdateOperationsInput | number
    voltageDropPercent?: FloatFieldUpdateOperationsInput | number
    shortCircuitCurrentAtEnd?: FloatFieldUpdateOperationsInput | number
    breakerBreakingCapacity?: FloatFieldUpdateOperationsInput | number
    overloadCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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
    avatarUrl?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
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
    avatarUrl?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
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
    avatarUrl?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type PowerSupplyNullableScalarRelationFilter = {
    is?: PowerSupplyWhereInput | null
    isNot?: PowerSupplyWhereInput | null
  }

  export type CircuitListRelationFilter = {
    every?: CircuitWhereInput
    some?: CircuitWhereInput
    none?: CircuitWhereInput
  }

  export type CableDataNullableScalarRelationFilter = {
    is?: CableDataWhereInput | null
    isNot?: CableDataWhereInput | null
  }

  export type ProtectionNullableScalarRelationFilter = {
    is?: ProtectionWhereInput | null
    isNot?: ProtectionWhereInput | null
  }

  export type ResultNullableScalarRelationFilter = {
    is?: ResultWhereInput | null
    isNot?: ResultWhereInput | null
  }

  export type FurthestLoadDistanceNullableScalarRelationFilter = {
    is?: FurthestLoadDistanceWhereInput | null
    isNot?: FurthestLoadDistanceWhereInput | null
  }

  export type CircuitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    client?: SortOrder
    location?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    client?: SortOrder
    location?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    client?: SortOrder
    location?: SortOrder
  }

  export type EnumAlimentationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlimentationType | EnumAlimentationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlimentationTypeFilter<$PrismaModel> | $Enums.AlimentationType
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

  export type EnumRegimeNeutreFilter<$PrismaModel = never> = {
    equals?: $Enums.RegimeNeutre | EnumRegimeNeutreFieldRefInput<$PrismaModel>
    in?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    not?: NestedEnumRegimeNeutreFilter<$PrismaModel> | $Enums.RegimeNeutre
  }

  export type EnumStandardFilter<$PrismaModel = never> = {
    equals?: $Enums.Standard | EnumStandardFieldRefInput<$PrismaModel>
    in?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    notIn?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    not?: NestedEnumStandardFilter<$PrismaModel> | $Enums.Standard
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type PowerSupplyCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    nominalVoltage?: SortOrder
    frequency?: SortOrder
    regimeNeutre?: SortOrder
    distanceSourceToTGBT?: SortOrder
    standard?: SortOrder
  }

  export type PowerSupplyAvgOrderByAggregateInput = {
    nominalVoltage?: SortOrder
    frequency?: SortOrder
    distanceSourceToTGBT?: SortOrder
  }

  export type PowerSupplyMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    nominalVoltage?: SortOrder
    frequency?: SortOrder
    regimeNeutre?: SortOrder
    distanceSourceToTGBT?: SortOrder
    standard?: SortOrder
  }

  export type PowerSupplyMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    nominalVoltage?: SortOrder
    frequency?: SortOrder
    regimeNeutre?: SortOrder
    distanceSourceToTGBT?: SortOrder
    standard?: SortOrder
  }

  export type PowerSupplySumOrderByAggregateInput = {
    nominalVoltage?: SortOrder
    frequency?: SortOrder
    distanceSourceToTGBT?: SortOrder
  }

  export type EnumAlimentationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlimentationType | EnumAlimentationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlimentationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlimentationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlimentationTypeFilter<$PrismaModel>
    _max?: NestedEnumAlimentationTypeFilter<$PrismaModel>
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

  export type EnumRegimeNeutreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegimeNeutre | EnumRegimeNeutreFieldRefInput<$PrismaModel>
    in?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    not?: NestedEnumRegimeNeutreWithAggregatesFilter<$PrismaModel> | $Enums.RegimeNeutre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegimeNeutreFilter<$PrismaModel>
    _max?: NestedEnumRegimeNeutreFilter<$PrismaModel>
  }

  export type EnumStandardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Standard | EnumStandardFieldRefInput<$PrismaModel>
    in?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    notIn?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    not?: NestedEnumStandardWithAggregatesFilter<$PrismaModel> | $Enums.Standard
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStandardFilter<$PrismaModel>
    _max?: NestedEnumStandardFilter<$PrismaModel>
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

  export type EnumCircuitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitType | EnumCircuitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitTypeFilter<$PrismaModel> | $Enums.CircuitType
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

  export type EnumCableMaterialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableMaterialNullableFilter<$PrismaModel> | $Enums.CableMaterial | null
  }

  export type EnumCableIsolationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableIsolationNullableFilter<$PrismaModel> | $Enums.CableIsolation | null
  }

  export type EnumModePoseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModePoseNullableFilter<$PrismaModel> | $Enums.ModePose | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumProtectionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProtectionTypeNullableFilter<$PrismaModel> | $Enums.ProtectionType | null
  }

  export type EnumCurveTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCurveTypeNullableFilter<$PrismaModel> | $Enums.CurveType | null
  }

  export type CircuitCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    circuitCount?: SortOrder
    type?: SortOrder
    totalPower?: SortOrder
    cosPhi?: SortOrder
    utilizationFactor?: SortOrder
    simultaneityFactor?: SortOrder
    distance?: SortOrder
    cableMaterial?: SortOrder
    cableIsolation?: SortOrder
    modePose?: SortOrder
    correctionFactors?: SortOrder
    izReference?: SortOrder
    millivoltsPerAmpereMeter?: SortOrder
    protectionType?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
    selectivityVerified?: SortOrder
  }

  export type CircuitAvgOrderByAggregateInput = {
    circuitCount?: SortOrder
    totalPower?: SortOrder
    cosPhi?: SortOrder
    utilizationFactor?: SortOrder
    simultaneityFactor?: SortOrder
    distance?: SortOrder
    izReference?: SortOrder
    millivoltsPerAmpereMeter?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    breakingCapacity?: SortOrder
  }

  export type CircuitMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    circuitCount?: SortOrder
    type?: SortOrder
    totalPower?: SortOrder
    cosPhi?: SortOrder
    utilizationFactor?: SortOrder
    simultaneityFactor?: SortOrder
    distance?: SortOrder
    cableMaterial?: SortOrder
    cableIsolation?: SortOrder
    modePose?: SortOrder
    izReference?: SortOrder
    millivoltsPerAmpereMeter?: SortOrder
    protectionType?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
    selectivityVerified?: SortOrder
  }

  export type CircuitMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    circuitCount?: SortOrder
    type?: SortOrder
    totalPower?: SortOrder
    cosPhi?: SortOrder
    utilizationFactor?: SortOrder
    simultaneityFactor?: SortOrder
    distance?: SortOrder
    cableMaterial?: SortOrder
    cableIsolation?: SortOrder
    modePose?: SortOrder
    izReference?: SortOrder
    millivoltsPerAmpereMeter?: SortOrder
    protectionType?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
    selectivityVerified?: SortOrder
  }

  export type CircuitSumOrderByAggregateInput = {
    circuitCount?: SortOrder
    totalPower?: SortOrder
    cosPhi?: SortOrder
    utilizationFactor?: SortOrder
    simultaneityFactor?: SortOrder
    distance?: SortOrder
    izReference?: SortOrder
    millivoltsPerAmpereMeter?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    breakingCapacity?: SortOrder
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

  export type EnumCircuitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitType | EnumCircuitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitTypeWithAggregatesFilter<$PrismaModel> | $Enums.CircuitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircuitTypeFilter<$PrismaModel>
    _max?: NestedEnumCircuitTypeFilter<$PrismaModel>
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

  export type EnumCableMaterialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableMaterialNullableWithAggregatesFilter<$PrismaModel> | $Enums.CableMaterial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCableMaterialNullableFilter<$PrismaModel>
    _max?: NestedEnumCableMaterialNullableFilter<$PrismaModel>
  }

  export type EnumCableIsolationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableIsolationNullableWithAggregatesFilter<$PrismaModel> | $Enums.CableIsolation | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCableIsolationNullableFilter<$PrismaModel>
    _max?: NestedEnumCableIsolationNullableFilter<$PrismaModel>
  }

  export type EnumModePoseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModePoseNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModePose | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumModePoseNullableFilter<$PrismaModel>
    _max?: NestedEnumModePoseNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumProtectionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProtectionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProtectionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProtectionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumProtectionTypeNullableFilter<$PrismaModel>
  }

  export type EnumCurveTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCurveTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CurveType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCurveTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCurveTypeNullableFilter<$PrismaModel>
  }

  export type FurthestLoadDistanceCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    circuitName?: SortOrder
    distance?: SortOrder
  }

  export type FurthestLoadDistanceAvgOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type FurthestLoadDistanceMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    circuitName?: SortOrder
    distance?: SortOrder
  }

  export type FurthestLoadDistanceMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    circuitName?: SortOrder
    distance?: SortOrder
  }

  export type FurthestLoadDistanceSumOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type EnumCableMaterialFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel>
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    not?: NestedEnumCableMaterialFilter<$PrismaModel> | $Enums.CableMaterial
  }

  export type EnumCableIsolationFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel>
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    not?: NestedEnumCableIsolationFilter<$PrismaModel> | $Enums.CableIsolation
  }

  export type EnumModePoseFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel>
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    not?: NestedEnumModePoseFilter<$PrismaModel> | $Enums.ModePose
  }

  export type CableDataCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    material?: SortOrder
    isolation?: SortOrder
    modePose?: SortOrder
  }

  export type CableDataMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    material?: SortOrder
    isolation?: SortOrder
    modePose?: SortOrder
  }

  export type CableDataMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    material?: SortOrder
    isolation?: SortOrder
    modePose?: SortOrder
  }

  export type EnumCableMaterialWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel>
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    not?: NestedEnumCableMaterialWithAggregatesFilter<$PrismaModel> | $Enums.CableMaterial
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCableMaterialFilter<$PrismaModel>
    _max?: NestedEnumCableMaterialFilter<$PrismaModel>
  }

  export type EnumCableIsolationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel>
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    not?: NestedEnumCableIsolationWithAggregatesFilter<$PrismaModel> | $Enums.CableIsolation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCableIsolationFilter<$PrismaModel>
    _max?: NestedEnumCableIsolationFilter<$PrismaModel>
  }

  export type EnumModePoseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel>
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    not?: NestedEnumModePoseWithAggregatesFilter<$PrismaModel> | $Enums.ModePose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePoseFilter<$PrismaModel>
    _max?: NestedEnumModePoseFilter<$PrismaModel>
  }

  export type EnumProtectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProtectionTypeFilter<$PrismaModel> | $Enums.ProtectionType
  }

  export type EnumCurveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurveTypeFilter<$PrismaModel> | $Enums.CurveType
  }

  export type ProtectionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
  }

  export type ProtectionAvgOrderByAggregateInput = {
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    breakingCapacity?: SortOrder
  }

  export type ProtectionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
  }

  export type ProtectionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    curveType?: SortOrder
    breakingCapacity?: SortOrder
  }

  export type ProtectionSumOrderByAggregateInput = {
    ratedCurrent?: SortOrder
    numberOfPoles?: SortOrder
    breakingCapacity?: SortOrder
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

  export type EnumCurveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurveTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurveTypeFilter<$PrismaModel>
    _max?: NestedEnumCurveTypeFilter<$PrismaModel>
  }

  export type EnumCheckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusFilter<$PrismaModel> | $Enums.CheckStatus
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    currentNominal?: SortOrder
    currentDesign?: SortOrder
    recommendedCableSection?: SortOrder
    correctedCableCapacity?: SortOrder
    recommendedBreaker?: SortOrder
    voltageDropVolts?: SortOrder
    voltageDropPercent?: SortOrder
    shortCircuitCurrentAtEnd?: SortOrder
    breakerBreakingCapacity?: SortOrder
    overloadCheck?: SortOrder
    voltageDropCheck?: SortOrder
    breakingCapacityCheck?: SortOrder
    coordinationCheck?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    currentNominal?: SortOrder
    currentDesign?: SortOrder
    recommendedCableSection?: SortOrder
    correctedCableCapacity?: SortOrder
    recommendedBreaker?: SortOrder
    voltageDropVolts?: SortOrder
    voltageDropPercent?: SortOrder
    shortCircuitCurrentAtEnd?: SortOrder
    breakerBreakingCapacity?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    currentNominal?: SortOrder
    currentDesign?: SortOrder
    recommendedCableSection?: SortOrder
    correctedCableCapacity?: SortOrder
    recommendedBreaker?: SortOrder
    voltageDropVolts?: SortOrder
    voltageDropPercent?: SortOrder
    shortCircuitCurrentAtEnd?: SortOrder
    breakerBreakingCapacity?: SortOrder
    overloadCheck?: SortOrder
    voltageDropCheck?: SortOrder
    breakingCapacityCheck?: SortOrder
    coordinationCheck?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    currentNominal?: SortOrder
    currentDesign?: SortOrder
    recommendedCableSection?: SortOrder
    correctedCableCapacity?: SortOrder
    recommendedBreaker?: SortOrder
    voltageDropVolts?: SortOrder
    voltageDropPercent?: SortOrder
    shortCircuitCurrentAtEnd?: SortOrder
    breakerBreakingCapacity?: SortOrder
    overloadCheck?: SortOrder
    voltageDropCheck?: SortOrder
    breakingCapacityCheck?: SortOrder
    coordinationCheck?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    currentNominal?: SortOrder
    currentDesign?: SortOrder
    recommendedCableSection?: SortOrder
    correctedCableCapacity?: SortOrder
    recommendedBreaker?: SortOrder
    voltageDropVolts?: SortOrder
    voltageDropPercent?: SortOrder
    shortCircuitCurrentAtEnd?: SortOrder
    breakerBreakingCapacity?: SortOrder
  }

  export type EnumCheckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckStatusFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
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

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
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

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
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

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
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

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
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

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type PowerSupplyCreateNestedOneWithoutProjectInput = {
    create?: XOR<PowerSupplyCreateWithoutProjectInput, PowerSupplyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PowerSupplyCreateOrConnectWithoutProjectInput
    connect?: PowerSupplyWhereUniqueInput
  }

  export type CircuitCreateNestedManyWithoutProjectInput = {
    create?: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput> | CircuitCreateWithoutProjectInput[] | CircuitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProjectInput | CircuitCreateOrConnectWithoutProjectInput[]
    createMany?: CircuitCreateManyProjectInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type CableDataCreateNestedOneWithoutProjectInput = {
    create?: XOR<CableDataCreateWithoutProjectInput, CableDataUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CableDataCreateOrConnectWithoutProjectInput
    connect?: CableDataWhereUniqueInput
  }

  export type ProtectionCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput
    connect?: ProtectionWhereUniqueInput
  }

  export type ResultCreateNestedOneWithoutProjectInput = {
    create?: XOR<ResultCreateWithoutProjectInput, ResultUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ResultCreateOrConnectWithoutProjectInput
    connect?: ResultWhereUniqueInput
  }

  export type FurthestLoadDistanceCreateNestedOneWithoutProjectInput = {
    create?: XOR<FurthestLoadDistanceCreateWithoutProjectInput, FurthestLoadDistanceUncheckedCreateWithoutProjectInput>
    connectOrCreate?: FurthestLoadDistanceCreateOrConnectWithoutProjectInput
    connect?: FurthestLoadDistanceWhereUniqueInput
  }

  export type PowerSupplyUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<PowerSupplyCreateWithoutProjectInput, PowerSupplyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PowerSupplyCreateOrConnectWithoutProjectInput
    connect?: PowerSupplyWhereUniqueInput
  }

  export type CircuitUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput> | CircuitCreateWithoutProjectInput[] | CircuitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutProjectInput | CircuitCreateOrConnectWithoutProjectInput[]
    createMany?: CircuitCreateManyProjectInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type CableDataUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<CableDataCreateWithoutProjectInput, CableDataUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CableDataCreateOrConnectWithoutProjectInput
    connect?: CableDataWhereUniqueInput
  }

  export type ProtectionUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput
    connect?: ProtectionWhereUniqueInput
  }

  export type ResultUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ResultCreateWithoutProjectInput, ResultUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ResultCreateOrConnectWithoutProjectInput
    connect?: ResultWhereUniqueInput
  }

  export type FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<FurthestLoadDistanceCreateWithoutProjectInput, FurthestLoadDistanceUncheckedCreateWithoutProjectInput>
    connectOrCreate?: FurthestLoadDistanceCreateOrConnectWithoutProjectInput
    connect?: FurthestLoadDistanceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type PowerSupplyUpdateOneWithoutProjectNestedInput = {
    create?: XOR<PowerSupplyCreateWithoutProjectInput, PowerSupplyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PowerSupplyCreateOrConnectWithoutProjectInput
    upsert?: PowerSupplyUpsertWithoutProjectInput
    disconnect?: PowerSupplyWhereInput | boolean
    delete?: PowerSupplyWhereInput | boolean
    connect?: PowerSupplyWhereUniqueInput
    update?: XOR<XOR<PowerSupplyUpdateToOneWithWhereWithoutProjectInput, PowerSupplyUpdateWithoutProjectInput>, PowerSupplyUncheckedUpdateWithoutProjectInput>
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

  export type CableDataUpdateOneWithoutProjectNestedInput = {
    create?: XOR<CableDataCreateWithoutProjectInput, CableDataUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CableDataCreateOrConnectWithoutProjectInput
    upsert?: CableDataUpsertWithoutProjectInput
    disconnect?: CableDataWhereInput | boolean
    delete?: CableDataWhereInput | boolean
    connect?: CableDataWhereUniqueInput
    update?: XOR<XOR<CableDataUpdateToOneWithWhereWithoutProjectInput, CableDataUpdateWithoutProjectInput>, CableDataUncheckedUpdateWithoutProjectInput>
  }

  export type ProtectionUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput
    upsert?: ProtectionUpsertWithoutProjectInput
    disconnect?: ProtectionWhereInput | boolean
    delete?: ProtectionWhereInput | boolean
    connect?: ProtectionWhereUniqueInput
    update?: XOR<XOR<ProtectionUpdateToOneWithWhereWithoutProjectInput, ProtectionUpdateWithoutProjectInput>, ProtectionUncheckedUpdateWithoutProjectInput>
  }

  export type ResultUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ResultCreateWithoutProjectInput, ResultUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ResultCreateOrConnectWithoutProjectInput
    upsert?: ResultUpsertWithoutProjectInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutProjectInput, ResultUpdateWithoutProjectInput>, ResultUncheckedUpdateWithoutProjectInput>
  }

  export type FurthestLoadDistanceUpdateOneWithoutProjectNestedInput = {
    create?: XOR<FurthestLoadDistanceCreateWithoutProjectInput, FurthestLoadDistanceUncheckedCreateWithoutProjectInput>
    connectOrCreate?: FurthestLoadDistanceCreateOrConnectWithoutProjectInput
    upsert?: FurthestLoadDistanceUpsertWithoutProjectInput
    disconnect?: FurthestLoadDistanceWhereInput | boolean
    delete?: FurthestLoadDistanceWhereInput | boolean
    connect?: FurthestLoadDistanceWhereUniqueInput
    update?: XOR<XOR<FurthestLoadDistanceUpdateToOneWithWhereWithoutProjectInput, FurthestLoadDistanceUpdateWithoutProjectInput>, FurthestLoadDistanceUncheckedUpdateWithoutProjectInput>
  }

  export type PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<PowerSupplyCreateWithoutProjectInput, PowerSupplyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PowerSupplyCreateOrConnectWithoutProjectInput
    upsert?: PowerSupplyUpsertWithoutProjectInput
    disconnect?: PowerSupplyWhereInput | boolean
    delete?: PowerSupplyWhereInput | boolean
    connect?: PowerSupplyWhereUniqueInput
    update?: XOR<XOR<PowerSupplyUpdateToOneWithWhereWithoutProjectInput, PowerSupplyUpdateWithoutProjectInput>, PowerSupplyUncheckedUpdateWithoutProjectInput>
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

  export type CableDataUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<CableDataCreateWithoutProjectInput, CableDataUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CableDataCreateOrConnectWithoutProjectInput
    upsert?: CableDataUpsertWithoutProjectInput
    disconnect?: CableDataWhereInput | boolean
    delete?: CableDataWhereInput | boolean
    connect?: CableDataWhereUniqueInput
    update?: XOR<XOR<CableDataUpdateToOneWithWhereWithoutProjectInput, CableDataUpdateWithoutProjectInput>, CableDataUncheckedUpdateWithoutProjectInput>
  }

  export type ProtectionUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProtectionCreateOrConnectWithoutProjectInput
    upsert?: ProtectionUpsertWithoutProjectInput
    disconnect?: ProtectionWhereInput | boolean
    delete?: ProtectionWhereInput | boolean
    connect?: ProtectionWhereUniqueInput
    update?: XOR<XOR<ProtectionUpdateToOneWithWhereWithoutProjectInput, ProtectionUpdateWithoutProjectInput>, ProtectionUncheckedUpdateWithoutProjectInput>
  }

  export type ResultUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ResultCreateWithoutProjectInput, ResultUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ResultCreateOrConnectWithoutProjectInput
    upsert?: ResultUpsertWithoutProjectInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutProjectInput, ResultUpdateWithoutProjectInput>, ResultUncheckedUpdateWithoutProjectInput>
  }

  export type FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<FurthestLoadDistanceCreateWithoutProjectInput, FurthestLoadDistanceUncheckedCreateWithoutProjectInput>
    connectOrCreate?: FurthestLoadDistanceCreateOrConnectWithoutProjectInput
    upsert?: FurthestLoadDistanceUpsertWithoutProjectInput
    disconnect?: FurthestLoadDistanceWhereInput | boolean
    delete?: FurthestLoadDistanceWhereInput | boolean
    connect?: FurthestLoadDistanceWhereUniqueInput
    update?: XOR<XOR<FurthestLoadDistanceUpdateToOneWithWhereWithoutProjectInput, FurthestLoadDistanceUpdateWithoutProjectInput>, FurthestLoadDistanceUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCreateNestedOneWithoutPowerSupplyInput = {
    create?: XOR<ProjectCreateWithoutPowerSupplyInput, ProjectUncheckedCreateWithoutPowerSupplyInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPowerSupplyInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumAlimentationTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlimentationType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRegimeNeutreFieldUpdateOperationsInput = {
    set?: $Enums.RegimeNeutre
  }

  export type EnumStandardFieldUpdateOperationsInput = {
    set?: $Enums.Standard
  }

  export type ProjectUpdateOneRequiredWithoutPowerSupplyNestedInput = {
    create?: XOR<ProjectCreateWithoutPowerSupplyInput, ProjectUncheckedCreateWithoutPowerSupplyInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPowerSupplyInput
    upsert?: ProjectUpsertWithoutPowerSupplyInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPowerSupplyInput, ProjectUpdateWithoutPowerSupplyInput>, ProjectUncheckedUpdateWithoutPowerSupplyInput>
  }

  export type ProjectCreateNestedOneWithoutCircuitsInput = {
    create?: XOR<ProjectCreateWithoutCircuitsInput, ProjectUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCircuitsInput
    connect?: ProjectWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCircuitTypeFieldUpdateOperationsInput = {
    set?: $Enums.CircuitType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumCableMaterialFieldUpdateOperationsInput = {
    set?: $Enums.CableMaterial | null
  }

  export type NullableEnumCableIsolationFieldUpdateOperationsInput = {
    set?: $Enums.CableIsolation | null
  }

  export type NullableEnumModePoseFieldUpdateOperationsInput = {
    set?: $Enums.ModePose | null
  }

  export type NullableEnumProtectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProtectionType | null
  }

  export type NullableEnumCurveTypeFieldUpdateOperationsInput = {
    set?: $Enums.CurveType | null
  }

  export type ProjectUpdateOneRequiredWithoutCircuitsNestedInput = {
    create?: XOR<ProjectCreateWithoutCircuitsInput, ProjectUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCircuitsInput
    upsert?: ProjectUpsertWithoutCircuitsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCircuitsInput, ProjectUpdateWithoutCircuitsInput>, ProjectUncheckedUpdateWithoutCircuitsInput>
  }

  export type ProjectCreateNestedOneWithoutFurthestLoadDistanceInput = {
    create?: XOR<ProjectCreateWithoutFurthestLoadDistanceInput, ProjectUncheckedCreateWithoutFurthestLoadDistanceInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFurthestLoadDistanceInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFurthestLoadDistanceNestedInput = {
    create?: XOR<ProjectCreateWithoutFurthestLoadDistanceInput, ProjectUncheckedCreateWithoutFurthestLoadDistanceInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFurthestLoadDistanceInput
    upsert?: ProjectUpsertWithoutFurthestLoadDistanceInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFurthestLoadDistanceInput, ProjectUpdateWithoutFurthestLoadDistanceInput>, ProjectUncheckedUpdateWithoutFurthestLoadDistanceInput>
  }

  export type ProjectCreateNestedOneWithoutCableDataInput = {
    create?: XOR<ProjectCreateWithoutCableDataInput, ProjectUncheckedCreateWithoutCableDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCableDataInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumCableMaterialFieldUpdateOperationsInput = {
    set?: $Enums.CableMaterial
  }

  export type EnumCableIsolationFieldUpdateOperationsInput = {
    set?: $Enums.CableIsolation
  }

  export type EnumModePoseFieldUpdateOperationsInput = {
    set?: $Enums.ModePose
  }

  export type ProjectUpdateOneRequiredWithoutCableDataNestedInput = {
    create?: XOR<ProjectCreateWithoutCableDataInput, ProjectUncheckedCreateWithoutCableDataInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCableDataInput
    upsert?: ProjectUpsertWithoutCableDataInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCableDataInput, ProjectUpdateWithoutCableDataInput>, ProjectUncheckedUpdateWithoutCableDataInput>
  }

  export type ProjectCreateNestedOneWithoutProtectionInput = {
    create?: XOR<ProjectCreateWithoutProtectionInput, ProjectUncheckedCreateWithoutProtectionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProtectionInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumProtectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProtectionType
  }

  export type EnumCurveTypeFieldUpdateOperationsInput = {
    set?: $Enums.CurveType
  }

  export type ProjectUpdateOneRequiredWithoutProtectionNestedInput = {
    create?: XOR<ProjectCreateWithoutProtectionInput, ProjectUncheckedCreateWithoutProtectionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProtectionInput
    upsert?: ProjectUpsertWithoutProtectionInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProtectionInput, ProjectUpdateWithoutProtectionInput>, ProjectUncheckedUpdateWithoutProtectionInput>
  }

  export type ProjectCreateNestedOneWithoutResultInput = {
    create?: XOR<ProjectCreateWithoutResultInput, ProjectUncheckedCreateWithoutResultInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutResultInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumCheckStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckStatus
  }

  export type ProjectUpdateOneRequiredWithoutResultNestedInput = {
    create?: XOR<ProjectCreateWithoutResultInput, ProjectUncheckedCreateWithoutResultInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutResultInput
    upsert?: ProjectUpsertWithoutResultInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutResultInput, ProjectUpdateWithoutResultInput>, ProjectUncheckedUpdateWithoutResultInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumAlimentationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlimentationType | EnumAlimentationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlimentationTypeFilter<$PrismaModel> | $Enums.AlimentationType
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

  export type NestedEnumRegimeNeutreFilter<$PrismaModel = never> = {
    equals?: $Enums.RegimeNeutre | EnumRegimeNeutreFieldRefInput<$PrismaModel>
    in?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    not?: NestedEnumRegimeNeutreFilter<$PrismaModel> | $Enums.RegimeNeutre
  }

  export type NestedEnumStandardFilter<$PrismaModel = never> = {
    equals?: $Enums.Standard | EnumStandardFieldRefInput<$PrismaModel>
    in?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    notIn?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    not?: NestedEnumStandardFilter<$PrismaModel> | $Enums.Standard
  }

  export type NestedEnumAlimentationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlimentationType | EnumAlimentationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlimentationType[] | ListEnumAlimentationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlimentationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlimentationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlimentationTypeFilter<$PrismaModel>
    _max?: NestedEnumAlimentationTypeFilter<$PrismaModel>
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

  export type NestedEnumRegimeNeutreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegimeNeutre | EnumRegimeNeutreFieldRefInput<$PrismaModel>
    in?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegimeNeutre[] | ListEnumRegimeNeutreFieldRefInput<$PrismaModel>
    not?: NestedEnumRegimeNeutreWithAggregatesFilter<$PrismaModel> | $Enums.RegimeNeutre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegimeNeutreFilter<$PrismaModel>
    _max?: NestedEnumRegimeNeutreFilter<$PrismaModel>
  }

  export type NestedEnumStandardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Standard | EnumStandardFieldRefInput<$PrismaModel>
    in?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    notIn?: $Enums.Standard[] | ListEnumStandardFieldRefInput<$PrismaModel>
    not?: NestedEnumStandardWithAggregatesFilter<$PrismaModel> | $Enums.Standard
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStandardFilter<$PrismaModel>
    _max?: NestedEnumStandardFilter<$PrismaModel>
  }

  export type NestedEnumCircuitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitType | EnumCircuitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitTypeFilter<$PrismaModel> | $Enums.CircuitType
  }

  export type NestedEnumCableMaterialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableMaterialNullableFilter<$PrismaModel> | $Enums.CableMaterial | null
  }

  export type NestedEnumCableIsolationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableIsolationNullableFilter<$PrismaModel> | $Enums.CableIsolation | null
  }

  export type NestedEnumModePoseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModePoseNullableFilter<$PrismaModel> | $Enums.ModePose | null
  }

  export type NestedEnumProtectionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProtectionTypeNullableFilter<$PrismaModel> | $Enums.ProtectionType | null
  }

  export type NestedEnumCurveTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCurveTypeNullableFilter<$PrismaModel> | $Enums.CurveType | null
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

  export type NestedEnumCircuitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircuitType | EnumCircuitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CircuitType[] | ListEnumCircuitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCircuitTypeWithAggregatesFilter<$PrismaModel> | $Enums.CircuitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircuitTypeFilter<$PrismaModel>
    _max?: NestedEnumCircuitTypeFilter<$PrismaModel>
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

  export type NestedEnumCableMaterialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableMaterialNullableWithAggregatesFilter<$PrismaModel> | $Enums.CableMaterial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCableMaterialNullableFilter<$PrismaModel>
    _max?: NestedEnumCableMaterialNullableFilter<$PrismaModel>
  }

  export type NestedEnumCableIsolationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel> | null
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCableIsolationNullableWithAggregatesFilter<$PrismaModel> | $Enums.CableIsolation | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCableIsolationNullableFilter<$PrismaModel>
    _max?: NestedEnumCableIsolationNullableFilter<$PrismaModel>
  }

  export type NestedEnumModePoseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModePoseNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModePose | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumModePoseNullableFilter<$PrismaModel>
    _max?: NestedEnumModePoseNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumProtectionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProtectionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProtectionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProtectionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumProtectionTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCurveTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCurveTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CurveType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCurveTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCurveTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCableMaterialFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel>
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    not?: NestedEnumCableMaterialFilter<$PrismaModel> | $Enums.CableMaterial
  }

  export type NestedEnumCableIsolationFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel>
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    not?: NestedEnumCableIsolationFilter<$PrismaModel> | $Enums.CableIsolation
  }

  export type NestedEnumModePoseFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel>
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    not?: NestedEnumModePoseFilter<$PrismaModel> | $Enums.ModePose
  }

  export type NestedEnumCableMaterialWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableMaterial | EnumCableMaterialFieldRefInput<$PrismaModel>
    in?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableMaterial[] | ListEnumCableMaterialFieldRefInput<$PrismaModel>
    not?: NestedEnumCableMaterialWithAggregatesFilter<$PrismaModel> | $Enums.CableMaterial
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCableMaterialFilter<$PrismaModel>
    _max?: NestedEnumCableMaterialFilter<$PrismaModel>
  }

  export type NestedEnumCableIsolationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CableIsolation | EnumCableIsolationFieldRefInput<$PrismaModel>
    in?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CableIsolation[] | ListEnumCableIsolationFieldRefInput<$PrismaModel>
    not?: NestedEnumCableIsolationWithAggregatesFilter<$PrismaModel> | $Enums.CableIsolation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCableIsolationFilter<$PrismaModel>
    _max?: NestedEnumCableIsolationFilter<$PrismaModel>
  }

  export type NestedEnumModePoseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePose | EnumModePoseFieldRefInput<$PrismaModel>
    in?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePose[] | ListEnumModePoseFieldRefInput<$PrismaModel>
    not?: NestedEnumModePoseWithAggregatesFilter<$PrismaModel> | $Enums.ModePose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePoseFilter<$PrismaModel>
    _max?: NestedEnumModePoseFilter<$PrismaModel>
  }

  export type NestedEnumProtectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProtectionType | EnumProtectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProtectionType[] | ListEnumProtectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProtectionTypeFilter<$PrismaModel> | $Enums.ProtectionType
  }

  export type NestedEnumCurveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurveTypeFilter<$PrismaModel> | $Enums.CurveType
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

  export type NestedEnumCurveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurveType | EnumCurveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurveType[] | ListEnumCurveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurveTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurveTypeFilter<$PrismaModel>
    _max?: NestedEnumCurveTypeFilter<$PrismaModel>
  }

  export type NestedEnumCheckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusFilter<$PrismaModel> | $Enums.CheckStatus
  }

  export type NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckStatusFilter<$PrismaModel>
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

  export type ProjectCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyCreateNestedOneWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    cableData?: CableDataCreateNestedOneWithoutProjectInput
    protection?: ProtectionCreateNestedOneWithoutProjectInput
    result?: ResultCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyUncheckedCreateNestedOneWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    cableData?: CableDataUncheckedCreateNestedOneWithoutProjectInput
    protection?: ProtectionUncheckedCreateNestedOneWithoutProjectInput
    result?: ResultUncheckedCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
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

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    client?: StringNullableFilter<"Project"> | string | null
    location?: StringNullableFilter<"Project"> | string | null
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
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    isTwoFactorEnabled?: boolean
    twofactorSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
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
    avatarUrl?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
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

  export type PowerSupplyCreateWithoutProjectInput = {
    id?: string
    type: $Enums.AlimentationType
    nominalVoltage: number
    frequency: number
    regimeNeutre: $Enums.RegimeNeutre
    distanceSourceToTGBT: number
    standard: $Enums.Standard
  }

  export type PowerSupplyUncheckedCreateWithoutProjectInput = {
    id?: string
    type: $Enums.AlimentationType
    nominalVoltage: number
    frequency: number
    regimeNeutre: $Enums.RegimeNeutre
    distanceSourceToTGBT: number
    standard: $Enums.Standard
  }

  export type PowerSupplyCreateOrConnectWithoutProjectInput = {
    where: PowerSupplyWhereUniqueInput
    create: XOR<PowerSupplyCreateWithoutProjectInput, PowerSupplyUncheckedCreateWithoutProjectInput>
  }

  export type CircuitCreateWithoutProjectInput = {
    id?: string
    name: string
    circuitCount?: number
    type: $Enums.CircuitType
    totalPower: number
    cosPhi?: number
    utilizationFactor?: number
    simultaneityFactor?: number
    distance?: number | null
    cableMaterial?: $Enums.CableMaterial | null
    cableIsolation?: $Enums.CableIsolation | null
    modePose?: $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: number | null
    millivoltsPerAmpereMeter?: number | null
    protectionType?: $Enums.ProtectionType | null
    ratedCurrent?: number | null
    numberOfPoles?: number | null
    curveType?: $Enums.CurveType | null
    breakingCapacity?: number | null
    selectivityVerified?: boolean
  }

  export type CircuitUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    circuitCount?: number
    type: $Enums.CircuitType
    totalPower: number
    cosPhi?: number
    utilizationFactor?: number
    simultaneityFactor?: number
    distance?: number | null
    cableMaterial?: $Enums.CableMaterial | null
    cableIsolation?: $Enums.CableIsolation | null
    modePose?: $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: number | null
    millivoltsPerAmpereMeter?: number | null
    protectionType?: $Enums.ProtectionType | null
    ratedCurrent?: number | null
    numberOfPoles?: number | null
    curveType?: $Enums.CurveType | null
    breakingCapacity?: number | null
    selectivityVerified?: boolean
  }

  export type CircuitCreateOrConnectWithoutProjectInput = {
    where: CircuitWhereUniqueInput
    create: XOR<CircuitCreateWithoutProjectInput, CircuitUncheckedCreateWithoutProjectInput>
  }

  export type CircuitCreateManyProjectInputEnvelope = {
    data: CircuitCreateManyProjectInput | CircuitCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CableDataCreateWithoutProjectInput = {
    id?: string
    material: $Enums.CableMaterial
    isolation: $Enums.CableIsolation
    modePose: $Enums.ModePose
  }

  export type CableDataUncheckedCreateWithoutProjectInput = {
    id?: string
    material: $Enums.CableMaterial
    isolation: $Enums.CableIsolation
    modePose: $Enums.ModePose
  }

  export type CableDataCreateOrConnectWithoutProjectInput = {
    where: CableDataWhereUniqueInput
    create: XOR<CableDataCreateWithoutProjectInput, CableDataUncheckedCreateWithoutProjectInput>
  }

  export type ProtectionCreateWithoutProjectInput = {
    id?: string
    type: $Enums.ProtectionType
    ratedCurrent: number
    numberOfPoles: number
    curveType: $Enums.CurveType
    breakingCapacity: number
  }

  export type ProtectionUncheckedCreateWithoutProjectInput = {
    id?: string
    type: $Enums.ProtectionType
    ratedCurrent: number
    numberOfPoles: number
    curveType: $Enums.CurveType
    breakingCapacity: number
  }

  export type ProtectionCreateOrConnectWithoutProjectInput = {
    where: ProtectionWhereUniqueInput
    create: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
  }

  export type ResultCreateWithoutProjectInput = {
    id?: string
    currentNominal: number
    currentDesign: number
    recommendedCableSection: number
    correctedCableCapacity: number
    recommendedBreaker: number
    voltageDropVolts: number
    voltageDropPercent: number
    shortCircuitCurrentAtEnd: number
    breakerBreakingCapacity: number
    overloadCheck: $Enums.CheckStatus
    voltageDropCheck: $Enums.CheckStatus
    breakingCapacityCheck: $Enums.CheckStatus
    coordinationCheck: $Enums.CheckStatus
  }

  export type ResultUncheckedCreateWithoutProjectInput = {
    id?: string
    currentNominal: number
    currentDesign: number
    recommendedCableSection: number
    correctedCableCapacity: number
    recommendedBreaker: number
    voltageDropVolts: number
    voltageDropPercent: number
    shortCircuitCurrentAtEnd: number
    breakerBreakingCapacity: number
    overloadCheck: $Enums.CheckStatus
    voltageDropCheck: $Enums.CheckStatus
    breakingCapacityCheck: $Enums.CheckStatus
    coordinationCheck: $Enums.CheckStatus
  }

  export type ResultCreateOrConnectWithoutProjectInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutProjectInput, ResultUncheckedCreateWithoutProjectInput>
  }

  export type FurthestLoadDistanceCreateWithoutProjectInput = {
    id?: string
    circuitName: string
    distance: number
  }

  export type FurthestLoadDistanceUncheckedCreateWithoutProjectInput = {
    id?: string
    circuitName: string
    distance: number
  }

  export type FurthestLoadDistanceCreateOrConnectWithoutProjectInput = {
    where: FurthestLoadDistanceWhereUniqueInput
    create: XOR<FurthestLoadDistanceCreateWithoutProjectInput, FurthestLoadDistanceUncheckedCreateWithoutProjectInput>
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twofactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PowerSupplyUpsertWithoutProjectInput = {
    update: XOR<PowerSupplyUpdateWithoutProjectInput, PowerSupplyUncheckedUpdateWithoutProjectInput>
    create: XOR<PowerSupplyCreateWithoutProjectInput, PowerSupplyUncheckedCreateWithoutProjectInput>
    where?: PowerSupplyWhereInput
  }

  export type PowerSupplyUpdateToOneWithWhereWithoutProjectInput = {
    where?: PowerSupplyWhereInput
    data: XOR<PowerSupplyUpdateWithoutProjectInput, PowerSupplyUncheckedUpdateWithoutProjectInput>
  }

  export type PowerSupplyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlimentationTypeFieldUpdateOperationsInput | $Enums.AlimentationType
    nominalVoltage?: FloatFieldUpdateOperationsInput | number
    frequency?: FloatFieldUpdateOperationsInput | number
    regimeNeutre?: EnumRegimeNeutreFieldUpdateOperationsInput | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFieldUpdateOperationsInput | number
    standard?: EnumStandardFieldUpdateOperationsInput | $Enums.Standard
  }

  export type PowerSupplyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlimentationTypeFieldUpdateOperationsInput | $Enums.AlimentationType
    nominalVoltage?: FloatFieldUpdateOperationsInput | number
    frequency?: FloatFieldUpdateOperationsInput | number
    regimeNeutre?: EnumRegimeNeutreFieldUpdateOperationsInput | $Enums.RegimeNeutre
    distanceSourceToTGBT?: FloatFieldUpdateOperationsInput | number
    standard?: EnumStandardFieldUpdateOperationsInput | $Enums.Standard
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
    name?: StringFilter<"Circuit"> | string
    circuitCount?: IntFilter<"Circuit"> | number
    type?: EnumCircuitTypeFilter<"Circuit"> | $Enums.CircuitType
    totalPower?: FloatFilter<"Circuit"> | number
    cosPhi?: FloatFilter<"Circuit"> | number
    utilizationFactor?: FloatFilter<"Circuit"> | number
    simultaneityFactor?: FloatFilter<"Circuit"> | number
    distance?: FloatNullableFilter<"Circuit"> | number | null
    cableMaterial?: EnumCableMaterialNullableFilter<"Circuit"> | $Enums.CableMaterial | null
    cableIsolation?: EnumCableIsolationNullableFilter<"Circuit"> | $Enums.CableIsolation | null
    modePose?: EnumModePoseNullableFilter<"Circuit"> | $Enums.ModePose | null
    correctionFactors?: JsonNullableFilter<"Circuit">
    izReference?: FloatNullableFilter<"Circuit"> | number | null
    millivoltsPerAmpereMeter?: FloatNullableFilter<"Circuit"> | number | null
    protectionType?: EnumProtectionTypeNullableFilter<"Circuit"> | $Enums.ProtectionType | null
    ratedCurrent?: FloatNullableFilter<"Circuit"> | number | null
    numberOfPoles?: IntNullableFilter<"Circuit"> | number | null
    curveType?: EnumCurveTypeNullableFilter<"Circuit"> | $Enums.CurveType | null
    breakingCapacity?: FloatNullableFilter<"Circuit"> | number | null
    selectivityVerified?: BoolFilter<"Circuit"> | boolean
  }

  export type CableDataUpsertWithoutProjectInput = {
    update: XOR<CableDataUpdateWithoutProjectInput, CableDataUncheckedUpdateWithoutProjectInput>
    create: XOR<CableDataCreateWithoutProjectInput, CableDataUncheckedCreateWithoutProjectInput>
    where?: CableDataWhereInput
  }

  export type CableDataUpdateToOneWithWhereWithoutProjectInput = {
    where?: CableDataWhereInput
    data: XOR<CableDataUpdateWithoutProjectInput, CableDataUncheckedUpdateWithoutProjectInput>
  }

  export type CableDataUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    material?: EnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial
    isolation?: EnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation
    modePose?: EnumModePoseFieldUpdateOperationsInput | $Enums.ModePose
  }

  export type CableDataUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    material?: EnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial
    isolation?: EnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation
    modePose?: EnumModePoseFieldUpdateOperationsInput | $Enums.ModePose
  }

  export type ProtectionUpsertWithoutProjectInput = {
    update: XOR<ProtectionUpdateWithoutProjectInput, ProtectionUncheckedUpdateWithoutProjectInput>
    create: XOR<ProtectionCreateWithoutProjectInput, ProtectionUncheckedCreateWithoutProjectInput>
    where?: ProtectionWhereInput
  }

  export type ProtectionUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProtectionWhereInput
    data: XOR<ProtectionUpdateWithoutProjectInput, ProtectionUncheckedUpdateWithoutProjectInput>
  }

  export type ProtectionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratedCurrent?: FloatFieldUpdateOperationsInput | number
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    curveType?: EnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType
    breakingCapacity?: FloatFieldUpdateOperationsInput | number
  }

  export type ProtectionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType
    ratedCurrent?: FloatFieldUpdateOperationsInput | number
    numberOfPoles?: IntFieldUpdateOperationsInput | number
    curveType?: EnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType
    breakingCapacity?: FloatFieldUpdateOperationsInput | number
  }

  export type ResultUpsertWithoutProjectInput = {
    update: XOR<ResultUpdateWithoutProjectInput, ResultUncheckedUpdateWithoutProjectInput>
    create: XOR<ResultCreateWithoutProjectInput, ResultUncheckedCreateWithoutProjectInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutProjectInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutProjectInput, ResultUncheckedUpdateWithoutProjectInput>
  }

  export type ResultUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNominal?: FloatFieldUpdateOperationsInput | number
    currentDesign?: FloatFieldUpdateOperationsInput | number
    recommendedCableSection?: FloatFieldUpdateOperationsInput | number
    correctedCableCapacity?: FloatFieldUpdateOperationsInput | number
    recommendedBreaker?: FloatFieldUpdateOperationsInput | number
    voltageDropVolts?: FloatFieldUpdateOperationsInput | number
    voltageDropPercent?: FloatFieldUpdateOperationsInput | number
    shortCircuitCurrentAtEnd?: FloatFieldUpdateOperationsInput | number
    breakerBreakingCapacity?: FloatFieldUpdateOperationsInput | number
    overloadCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
  }

  export type ResultUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNominal?: FloatFieldUpdateOperationsInput | number
    currentDesign?: FloatFieldUpdateOperationsInput | number
    recommendedCableSection?: FloatFieldUpdateOperationsInput | number
    correctedCableCapacity?: FloatFieldUpdateOperationsInput | number
    recommendedBreaker?: FloatFieldUpdateOperationsInput | number
    voltageDropVolts?: FloatFieldUpdateOperationsInput | number
    voltageDropPercent?: FloatFieldUpdateOperationsInput | number
    shortCircuitCurrentAtEnd?: FloatFieldUpdateOperationsInput | number
    breakerBreakingCapacity?: FloatFieldUpdateOperationsInput | number
    overloadCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    voltageDropCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    breakingCapacityCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    coordinationCheck?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
  }

  export type FurthestLoadDistanceUpsertWithoutProjectInput = {
    update: XOR<FurthestLoadDistanceUpdateWithoutProjectInput, FurthestLoadDistanceUncheckedUpdateWithoutProjectInput>
    create: XOR<FurthestLoadDistanceCreateWithoutProjectInput, FurthestLoadDistanceUncheckedCreateWithoutProjectInput>
    where?: FurthestLoadDistanceWhereInput
  }

  export type FurthestLoadDistanceUpdateToOneWithWhereWithoutProjectInput = {
    where?: FurthestLoadDistanceWhereInput
    data: XOR<FurthestLoadDistanceUpdateWithoutProjectInput, FurthestLoadDistanceUncheckedUpdateWithoutProjectInput>
  }

  export type FurthestLoadDistanceUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    circuitName?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type FurthestLoadDistanceUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    circuitName?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectCreateWithoutPowerSupplyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    cableData?: CableDataCreateNestedOneWithoutProjectInput
    protection?: ProtectionCreateNestedOneWithoutProjectInput
    result?: ResultCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPowerSupplyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    cableData?: CableDataUncheckedCreateNestedOneWithoutProjectInput
    protection?: ProtectionUncheckedCreateNestedOneWithoutProjectInput
    result?: ResultUncheckedCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPowerSupplyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPowerSupplyInput, ProjectUncheckedCreateWithoutPowerSupplyInput>
  }

  export type ProjectUpsertWithoutPowerSupplyInput = {
    update: XOR<ProjectUpdateWithoutPowerSupplyInput, ProjectUncheckedUpdateWithoutPowerSupplyInput>
    create: XOR<ProjectCreateWithoutPowerSupplyInput, ProjectUncheckedCreateWithoutPowerSupplyInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPowerSupplyInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPowerSupplyInput, ProjectUncheckedUpdateWithoutPowerSupplyInput>
  }

  export type ProjectUpdateWithoutPowerSupplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUpdateOneWithoutProjectNestedInput
    result?: ResultUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPowerSupplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUncheckedUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUncheckedUpdateOneWithoutProjectNestedInput
    result?: ResultUncheckedUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutCircuitsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    powerSupply?: PowerSupplyCreateNestedOneWithoutProjectInput
    cableData?: CableDataCreateNestedOneWithoutProjectInput
    protection?: ProtectionCreateNestedOneWithoutProjectInput
    result?: ResultCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCircuitsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyUncheckedCreateNestedOneWithoutProjectInput
    cableData?: CableDataUncheckedCreateNestedOneWithoutProjectInput
    protection?: ProtectionUncheckedCreateNestedOneWithoutProjectInput
    result?: ResultUncheckedCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCircuitsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCircuitsInput, ProjectUncheckedCreateWithoutCircuitsInput>
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    powerSupply?: PowerSupplyUpdateOneWithoutProjectNestedInput
    cableData?: CableDataUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUpdateOneWithoutProjectNestedInput
    result?: ResultUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCircuitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput
    cableData?: CableDataUncheckedUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUncheckedUpdateOneWithoutProjectNestedInput
    result?: ResultUncheckedUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutFurthestLoadDistanceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    powerSupply?: PowerSupplyCreateNestedOneWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    cableData?: CableDataCreateNestedOneWithoutProjectInput
    protection?: ProtectionCreateNestedOneWithoutProjectInput
    result?: ResultCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFurthestLoadDistanceInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyUncheckedCreateNestedOneWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    cableData?: CableDataUncheckedCreateNestedOneWithoutProjectInput
    protection?: ProtectionUncheckedCreateNestedOneWithoutProjectInput
    result?: ResultUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFurthestLoadDistanceInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFurthestLoadDistanceInput, ProjectUncheckedCreateWithoutFurthestLoadDistanceInput>
  }

  export type ProjectUpsertWithoutFurthestLoadDistanceInput = {
    update: XOR<ProjectUpdateWithoutFurthestLoadDistanceInput, ProjectUncheckedUpdateWithoutFurthestLoadDistanceInput>
    create: XOR<ProjectCreateWithoutFurthestLoadDistanceInput, ProjectUncheckedCreateWithoutFurthestLoadDistanceInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFurthestLoadDistanceInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFurthestLoadDistanceInput, ProjectUncheckedUpdateWithoutFurthestLoadDistanceInput>
  }

  export type ProjectUpdateWithoutFurthestLoadDistanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    powerSupply?: PowerSupplyUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUpdateOneWithoutProjectNestedInput
    result?: ResultUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFurthestLoadDistanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUncheckedUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUncheckedUpdateOneWithoutProjectNestedInput
    result?: ResultUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutCableDataInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    powerSupply?: PowerSupplyCreateNestedOneWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    protection?: ProtectionCreateNestedOneWithoutProjectInput
    result?: ResultCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCableDataInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyUncheckedCreateNestedOneWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    protection?: ProtectionUncheckedCreateNestedOneWithoutProjectInput
    result?: ResultUncheckedCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCableDataInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCableDataInput, ProjectUncheckedCreateWithoutCableDataInput>
  }

  export type ProjectUpsertWithoutCableDataInput = {
    update: XOR<ProjectUpdateWithoutCableDataInput, ProjectUncheckedUpdateWithoutCableDataInput>
    create: XOR<ProjectCreateWithoutCableDataInput, ProjectUncheckedCreateWithoutCableDataInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCableDataInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCableDataInput, ProjectUncheckedUpdateWithoutCableDataInput>
  }

  export type ProjectUpdateWithoutCableDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    powerSupply?: PowerSupplyUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    protection?: ProtectionUpdateOneWithoutProjectNestedInput
    result?: ResultUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCableDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    protection?: ProtectionUncheckedUpdateOneWithoutProjectNestedInput
    result?: ResultUncheckedUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutProtectionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    powerSupply?: PowerSupplyCreateNestedOneWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    cableData?: CableDataCreateNestedOneWithoutProjectInput
    result?: ResultCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProtectionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyUncheckedCreateNestedOneWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    cableData?: CableDataUncheckedCreateNestedOneWithoutProjectInput
    result?: ResultUncheckedCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProtectionInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProtectionInput, ProjectUncheckedCreateWithoutProtectionInput>
  }

  export type ProjectUpsertWithoutProtectionInput = {
    update: XOR<ProjectUpdateWithoutProtectionInput, ProjectUncheckedUpdateWithoutProtectionInput>
    create: XOR<ProjectCreateWithoutProtectionInput, ProjectUncheckedCreateWithoutProtectionInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProtectionInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProtectionInput, ProjectUncheckedUpdateWithoutProtectionInput>
  }

  export type ProjectUpdateWithoutProtectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    powerSupply?: PowerSupplyUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUpdateOneWithoutProjectNestedInput
    result?: ResultUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProtectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUncheckedUpdateOneWithoutProjectNestedInput
    result?: ResultUncheckedUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutResultInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    powerSupply?: PowerSupplyCreateNestedOneWithoutProjectInput
    circuits?: CircuitCreateNestedManyWithoutProjectInput
    cableData?: CableDataCreateNestedOneWithoutProjectInput
    protection?: ProtectionCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutResultInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
    powerSupply?: PowerSupplyUncheckedCreateNestedOneWithoutProjectInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutProjectInput
    cableData?: CableDataUncheckedCreateNestedOneWithoutProjectInput
    protection?: ProtectionUncheckedCreateNestedOneWithoutProjectInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutResultInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutResultInput, ProjectUncheckedCreateWithoutResultInput>
  }

  export type ProjectUpsertWithoutResultInput = {
    update: XOR<ProjectUpdateWithoutResultInput, ProjectUncheckedUpdateWithoutResultInput>
    create: XOR<ProjectCreateWithoutResultInput, ProjectUncheckedCreateWithoutResultInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutResultInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutResultInput, ProjectUncheckedUpdateWithoutResultInput>
  }

  export type ProjectUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    powerSupply?: PowerSupplyUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUncheckedUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUncheckedUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput
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

  export type ProjectCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    client?: string | null
    location?: string | null
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

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUpdateOneWithoutProjectNestedInput
    result?: ResultUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    powerSupply?: PowerSupplyUncheckedUpdateOneWithoutProjectNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutProjectNestedInput
    cableData?: CableDataUncheckedUpdateOneWithoutProjectNestedInput
    protection?: ProtectionUncheckedUpdateOneWithoutProjectNestedInput
    result?: ResultUncheckedUpdateOneWithoutProjectNestedInput
    furthestLoadDistance?: FurthestLoadDistanceUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CircuitCreateManyProjectInput = {
    id?: string
    name: string
    circuitCount?: number
    type: $Enums.CircuitType
    totalPower: number
    cosPhi?: number
    utilizationFactor?: number
    simultaneityFactor?: number
    distance?: number | null
    cableMaterial?: $Enums.CableMaterial | null
    cableIsolation?: $Enums.CableIsolation | null
    modePose?: $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: number | null
    millivoltsPerAmpereMeter?: number | null
    protectionType?: $Enums.ProtectionType | null
    ratedCurrent?: number | null
    numberOfPoles?: number | null
    curveType?: $Enums.CurveType | null
    breakingCapacity?: number | null
    selectivityVerified?: boolean
  }

  export type CircuitUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    circuitCount?: IntFieldUpdateOperationsInput | number
    type?: EnumCircuitTypeFieldUpdateOperationsInput | $Enums.CircuitType
    totalPower?: FloatFieldUpdateOperationsInput | number
    cosPhi?: FloatFieldUpdateOperationsInput | number
    utilizationFactor?: FloatFieldUpdateOperationsInput | number
    simultaneityFactor?: FloatFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    cableMaterial?: NullableEnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial | null
    cableIsolation?: NullableEnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation | null
    modePose?: NullableEnumModePoseFieldUpdateOperationsInput | $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: NullableFloatFieldUpdateOperationsInput | number | null
    millivoltsPerAmpereMeter?: NullableFloatFieldUpdateOperationsInput | number | null
    protectionType?: NullableEnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType | null
    ratedCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: NullableIntFieldUpdateOperationsInput | number | null
    curveType?: NullableEnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType | null
    breakingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    selectivityVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CircuitUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    circuitCount?: IntFieldUpdateOperationsInput | number
    type?: EnumCircuitTypeFieldUpdateOperationsInput | $Enums.CircuitType
    totalPower?: FloatFieldUpdateOperationsInput | number
    cosPhi?: FloatFieldUpdateOperationsInput | number
    utilizationFactor?: FloatFieldUpdateOperationsInput | number
    simultaneityFactor?: FloatFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    cableMaterial?: NullableEnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial | null
    cableIsolation?: NullableEnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation | null
    modePose?: NullableEnumModePoseFieldUpdateOperationsInput | $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: NullableFloatFieldUpdateOperationsInput | number | null
    millivoltsPerAmpereMeter?: NullableFloatFieldUpdateOperationsInput | number | null
    protectionType?: NullableEnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType | null
    ratedCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: NullableIntFieldUpdateOperationsInput | number | null
    curveType?: NullableEnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType | null
    breakingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    selectivityVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CircuitUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    circuitCount?: IntFieldUpdateOperationsInput | number
    type?: EnumCircuitTypeFieldUpdateOperationsInput | $Enums.CircuitType
    totalPower?: FloatFieldUpdateOperationsInput | number
    cosPhi?: FloatFieldUpdateOperationsInput | number
    utilizationFactor?: FloatFieldUpdateOperationsInput | number
    simultaneityFactor?: FloatFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    cableMaterial?: NullableEnumCableMaterialFieldUpdateOperationsInput | $Enums.CableMaterial | null
    cableIsolation?: NullableEnumCableIsolationFieldUpdateOperationsInput | $Enums.CableIsolation | null
    modePose?: NullableEnumModePoseFieldUpdateOperationsInput | $Enums.ModePose | null
    correctionFactors?: NullableJsonNullValueInput | InputJsonValue
    izReference?: NullableFloatFieldUpdateOperationsInput | number | null
    millivoltsPerAmpereMeter?: NullableFloatFieldUpdateOperationsInput | number | null
    protectionType?: NullableEnumProtectionTypeFieldUpdateOperationsInput | $Enums.ProtectionType | null
    ratedCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfPoles?: NullableIntFieldUpdateOperationsInput | number | null
    curveType?: NullableEnumCurveTypeFieldUpdateOperationsInput | $Enums.CurveType | null
    breakingCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    selectivityVerified?: BoolFieldUpdateOperationsInput | boolean
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