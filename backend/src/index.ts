import type { Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import dotenv from "dotenv";
import express from "express";
import proxyRoutes from "./routes/proxyRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.set("trust proxy", 1);

const corsOptions = {
  origin: ["http://localhost:8080", "https://echo-fwq4.onrender.com"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.get("/api/health", (_: any, res: Response) => {
  res.status(200).json("OK");
});

app.use("/api/v1", proxyRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json("Hello from TypeScript Node backend 🚀");
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
