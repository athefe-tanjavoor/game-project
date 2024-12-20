import express from "express";
import { verifyJWTstrict } from "../middleware/common";

import { createPlatform, getPlatformById } from "../controllers/index";

const router = express.Router();

router.get("/platform/:id/", verifyJWTstrict, getPlatformById);
router.post("/platform", verifyJWTstrict, createPlatform);

export default router;
