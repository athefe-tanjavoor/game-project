import { Request, Response } from "express";

import Category from "../models/category";

export async function createCategory(req: Request, res: Response) {
  try {
    const newCategory = await Category.create({
      user: req.user._id,
      ...req.body,
    });
    return res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating Category:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
