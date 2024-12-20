import express from "express";

const router = express.Router();

import { createCategory } from "../controllers/category";
import { verifyJWTstrict } from "../middleware/common";

router.get("/get/category");
router.post("/category", verifyJWTstrict, createCategory);

export default router;
