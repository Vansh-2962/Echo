import express from "express";
import {
  createRequest,
  createCollection,
  getAllCollections,
  saveRequest,
} from "../controller/proxy.controller.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.route("/collection").post(isAuth, createCollection);
router.route("/collection").get(isAuth, getAllCollections);
router.route("/collection/save/:id").post(isAuth, saveRequest);
router.route("/proxy").post(isAuth, createRequest);

export default router;
