import express from "express";
import {
  createRequest,
  createCollection,
  getAllCollections,
  saveRequest,
  deleteRequest,
  deleteCollection,
} from "../controller/proxy.controller.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.route("/collection").post(isAuth, createCollection);
router.route("/collection").get(isAuth, getAllCollections);
router.route("/collection/:id").delete(isAuth, deleteCollection);
router.route("/collection/save/:id").post(isAuth, saveRequest);
router.route("/collection/:collid/request/:rid").delete(isAuth, deleteRequest);
router.route("/proxy").post(isAuth, createRequest);

export default router;
