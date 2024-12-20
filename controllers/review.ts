import { Request, Response } from "express";
import { Review } from "../models";

export async function getReviewById(req: Request, res: Response) {
  try {
    const review = await Review.findById(req.params.id);
    if (review) {
      return res.status(400).json({ message: "User Found", review });
    } else {
      return res.status(400).json({ message: "User hii Found", review });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "User not fetched Successfully", error });
  }
}

export async function createReview(req: Request, res: Response) {
  try {
    if (!req.user || !req.user._id) {
      return res.status(400).json({ message: "User information is missing" });
    }

    const review = await Review.create({
      user: req.user._id,
      ...req.body,
    });

    return res.status(201).json(review);
  } catch (error) {
    console.error("Error creating game:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
