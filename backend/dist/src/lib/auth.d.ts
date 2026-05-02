export declare const auth: import("better-auth").Auth<{
    baseURL: string | undefined;
    trustedOrigins: string[];
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