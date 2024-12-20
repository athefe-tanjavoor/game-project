import { Request, Response } from "express";

import Platform from "../models/platform";

export async function getPlatformById(req: Request, res: Response) {
  try {
    const platform = await Platform.findById(req.params.id);
      if (platform) {
        return res.status(400).json({ message: "platform Found", platform });
      } else {
        return res
          .status(400)
          .json({ message: "platform not Found", platform });
      }
  } catch (error) {
    console.error("Error Creating Platform:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function createPlatform(req: Request, res: Response) {
  try {
    const createPlatform = await Platform.create({
      user: req.user._id,
      ...req.body,
    });
    return res.status(201).json(createPlatform);
  } catch (error) {
    console.error("Error Creating Platform:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
