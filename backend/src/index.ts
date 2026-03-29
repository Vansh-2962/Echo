import type { Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import dotenv from "dotenv";
import express from "express";
import proxyRoutes from "./routes/proxyRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  }),
);
const PORT = 3000;

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());
app.use("/api/v1", proxyRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json("Hello from TypeScript Node backend 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
