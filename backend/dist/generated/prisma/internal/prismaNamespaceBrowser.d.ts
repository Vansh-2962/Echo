import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
    readonly Collections: "Collections";
    readonly Requests: "Requests";
    readonly Auth: "Auth";
    readonly BodyField: "BodyField";
    readonly KeyValue: "KeyValue";
    readonly Response: "Response";
    readonly History: "History";
    readonly Plan: "Plan";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const CollectionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CollectionsScalarFieldEnum = (typeof CollectionsScalarFieldEnum)[keyof typeof CollectionsScalarFieldEnum];
export declare const RequestsScalarFieldEnum: {
    readonly id: "id";
    readonly method: "method";
    readonly url: "url";
    readonly name: "name";
    readonly bodyType: "bodyType";
    readonly rawBody: "rawBody";
    readonly authType: "authType";
    readonly scripts: "scripts";
    readonly userId: "userId";
    readonly collectionId: "collectionId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RequestsScalarFieldEnum = (typeof RequestsScalarFieldEnum)[keyof typeof RequestsScalarFieldEnum];
export declare const AuthScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly token: "token";
    readonly username: "username";
    readonly password: "password";
    readonly key: "key";
    readonly value: "value";
    readonly addTo: "addTo";
    readonly requestId: "requestId";
};
export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum];
export declare const BodyFieldScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly value: "value";
    readonly type: "type";
    readonly description: "description";
    readonly enabled: "enabled";
    readonly requestId: "requestId";
};
export type BodyFieldScalarFieldEnum = (typeof BodyFieldScalarFieldEnum)[keyof typeof BodyFieldScalarFieldEnum];
export declare const KeyValueScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly value: "value";
    readonly description: "description";
    readonly enabled: "enabled";
    readonly paramsRequestId: "paramsRequestId";
    readonly headersRequestId: "headersRequestId";
    readonly type: "type";
};
export type KeyValueScalarFieldEnum = (typeof KeyValueScalarFieldEnum)[keyof typeof KeyValueScalarFieldEnum];
export declare const ResponseScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly statusCode: "statusCode";
    readonly statusText: "statusText";
    readonly responseTime: "responseTime";
    readonly size: "size";
    readonly timeline: "timeline";
    readonly breakdown: "breakdown";
    readonly headers: "headers";
    readonly body: "body";
    readonly cookies: "cookies";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum];
export declare const HistoryScalarFieldEnum: {
    readonly id: "id";
    readonly method: "method";
    readonly url: "url";
    readonly time: "time";
    readonly userId: "userId";
};
export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum];
export declare const PlanScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly credits: "credits";
    readonly collections: "collections";
    readonly requests: "requests";
    readonly historyPeriod: "historyPeriod";
    readonly auth: "auth";
    readonly envs: "envs";
    readonly requestScripts: "requestScripts";
    readonly communitySupport: "communitySupport";
    readonly prioritySupport: "prioritySupport";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map