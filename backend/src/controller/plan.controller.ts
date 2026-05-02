import type { Request, Response } from "express";

export async function getPlan(req: Request, res: Response) {
  try {
    
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
