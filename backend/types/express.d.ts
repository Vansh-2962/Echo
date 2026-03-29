import { Session, User } from "better-auth"; // adjust if needed

declare global {
  namespace Express {
    interface Request {
      user?: User;
      session?: Session;
    }
  }
}
