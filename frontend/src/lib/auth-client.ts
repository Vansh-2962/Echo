import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://echo-production-0d01.up.railway.app",
});
