import express from "express";
import { createUser, fetchUserById, getUser } from "../controllers/user";
const router = express.Router();

router.get("/get", getUser);
router.get("/get/:id", fetchUserById);
router.post("/register", createUser);
router.put("/:id");

export default router;
