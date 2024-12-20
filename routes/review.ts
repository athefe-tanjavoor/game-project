import express from "express";
import { verifyJWTstrict } from "../middleware/common";

import { createReview, getReviewById } from "../controllers/index";

const router = express.Router();

router.get("/game/:id/review", getReviewById);
router.post("/review", verifyJWTstrict, createReview);

export default router;
