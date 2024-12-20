import express from "express";
import {
  createGame,
  updateGame,
  deleteGame,
  fetchAllGame,
  getGameById,
} from "../controllers/game";
import { verifyJWTstrict } from "../middleware/common";
const router = express.Router();

router.get("/get", verifyJWTstrict, fetchAllGame);

router.get("/game/get/:id", verifyJWTstrict, getGameById);

router.post("/game/create", verifyJWTstrict, createGame);

router.put("/game/:id", verifyJWTstrict, updateGame);

router.delete("/game/:id", verifyJWTstrict, deleteGame);

export default router;
