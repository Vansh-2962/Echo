export declare const BodyType: {
    readonly NONE: "NONE";
    readonly JSON: "JSON";
    readonly FORMDATA: "FORMDATA";
    readonly URLENCODED: "URLENCODED";
    readonly RAW: "RAW";
};
export type BodyType = (typeof BodyType)[keyof typeof BodyType];
export declare const AuthType: {
    readonly NONE: "NONE";
    readonly BEARER: "BEARER";
    readonly BASIC: "BASIC";
    readonly API_KEY: "API_KEY";
    readonly OAUTH2: "OAUTH2";
};
export type AuthType = (typeof AuthType)[keyof typeof AuthType];
//# sourceMappingURL=enums.d.ts.map