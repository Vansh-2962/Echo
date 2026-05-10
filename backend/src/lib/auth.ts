import { betterAuth } from "better-auth";
import type { User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path

import { prisma } from "./prisma.js";

export const auth = betterAuth({
  // baseURL: `${process.env.BETTER_AUTH_URL}/api/auth`,
  baseURL: `http://localhost:3000/api/auth`,

  trustedOrigins: ["http://localhost:8080", "https://echo-fwq4.onrender.com"],

  advanced: {
    defaultCookieAttributes: {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
  },

  useSecureCookies: true,
  crossSubdomainCookies: {
    enabled: false,
  },

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
