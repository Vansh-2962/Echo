import type { NextFunction, Request, Response } from "express";
import { auth } from "../lib/auth.js";
import { prisma } from "../lib/prisma.js";

export async function isAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const session = await auth.api.getSession({
      headers: new Headers(req.headers as Record<string, string>),
    });

    if (!session) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    // fetch the current plan of the user and add it to the req.user object
    const plan = await prisma.plan.findFirst({
      where: {
        userId: session.user.id,
      },
    });

    const planObject = {
      plan: plan?.name,
      planId: plan?.id,
    };

    req.user = { ...session.user, ...planObject };
    next();
    
  } catch (error) {
    return res.status(500).json({ msg: "Error, Failed to check auth" });
  }
}
