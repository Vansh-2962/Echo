import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "./prisma.js";
export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: ["http://localhost:8080", "https://echo-18zg.onrender.com"],
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    const existingPlan = await prisma.plan.findUnique({
                        where: { userId: user.id },
                    });
                    if (!existingPlan) {
                        await prisma.plan.create({
                            data: {
                                name: "FREE",
                                credits: 5,
                                collections: 1,
                                requests: 3,
                                historyPeriod: 7,
                                auth: "BASIC",
                                envs: true,
                                requestScripts: true,
                                communitySupport: true,
                                prioritySupport: false,
                                userId: user.id,
                            },
                        });
                    }
                },
            },
        },
    },
});
//# sourceMappingURL=auth.js.map