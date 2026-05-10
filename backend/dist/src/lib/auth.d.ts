export declare const auth: import("better-auth").Auth<{
    baseURL: string;
    trustedOrigins: string[];
    advanced: {
        defaultCookieAttributes: {
            secure: true;
            httpOnly: true;
            sameSite: "none";
        };
    };
    useSecureCookies: boolean;
    crossSubdomainCookies: {
        enabled: boolean;
    };
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    socialProviders: {
        google: {
            clientId: string;
            clientSecret: string;
        };
    };
    databaseHooks: {
        user: {
            create: {
                after: (user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                } & Record<string, unknown>) => Promise<void>;
            };
        };
    };
}>;
//# sourceMappingURL=auth.d.ts.map