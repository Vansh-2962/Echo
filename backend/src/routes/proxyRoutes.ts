import express from "express";
import {
  createRequest,
  createCollection,
  getAllCollections,
  saveRequest,
  deleteRequest,
  deleteCollection,
  renameRequest,
  getHistory,
  deleteHistory,
} from "../controller/proxy.controller.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.route("/collection").post(isAuth, createCollection);
router.route("/collection").get(isAuth, getAllCollections);
router.route("/collection/history").get(isAuth, getHistory);
router.route("/collection/history").delete(isAuth, deleteHistory);
router.route("/collection/:id").delete(isAuth, deleteCollection);
router.route("/collection/save/:id").post(isAuth, saveRequest);
router.route("/collection/request/:id").put(isAuth, renameRequest);
router.route("/collection/:collid/request/:rid").delete(isAuth, deleteRequest);
router.route("/proxy").post(isAuth, createRequest);

export default router;
