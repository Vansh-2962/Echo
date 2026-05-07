import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export async function getPlan(req: Request, res: Response) {
  try {
    const planId = req.user?.planId;
    const plan = await prisma.plan.findFirst({
      where: {
        id: planId as number,
      },
    });
    return res.status(200).json(plan);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
