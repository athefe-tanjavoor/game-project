import { Request, Response } from "express";
import { Game } from "../models";

export async function fetchAllGame(req: Request, res: Response) {
  try {
    const game = await Game.find();
    if (!game) {
      return res.status(400).json({ message: "Game information is missing" });
    } else {
      return res.status(201).json(game);
    }
  } catch (error) {
    console.error("Error creating game:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// export async function getGameById(req: Request, res: Response) {
//   try {
//     const game = await Game.findById(req.params.id);
//     if (!game) {
//       return res.status(400).json({ message: "Game information is missing" });
//     } else {
//       return res.status(201).json(game);
//     }
//   } catch (error) {
//     console.error("Error creating game:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }
export async function getGameById(req: Request, res: Response) {
  try {
    const user = await Game.findById(req.params.id);
    if (user) {
      return res.status(400).json({ message: "User Found", user });
    } else {
      return res.status(400).json({ message: "User hii Found", user });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "User not fetched Successfully", error });
  }
}
export async function createGame(req: Request, res: Response) {
  try {
    if (!req.user || !req.user._id) {
      return res.status(400).json({ message: "User information is missing" });
    }

    const game = await Game.create({
      user: req.user._id,
      ...req.body,
    });

    return res.status(201).json(game);
  } catch (error) {
    console.error("Error creating game:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// export async function updateGame(req: Request, res: Response) {
//   try {
//     const newUpdate = await Game.findById(req.params.id);
//     if (!newUpdate) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     if (newUpdate?.user.toString() === req.user._id) {
//       await Game.updateOne({ _id: Game?._id }, { $set: req.body });
//     }
//   } catch (error) {
//     console.error("Error creating game:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }

export async function updateGame(req: Request, res: Response) {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    if (game.user.toString() === req.user._id) {
      await Game.updateOne({ _id: game._id }, { $set: req.body });
      return res.status(200).json({ message: "Game updated successfully" });
    } else {
      return res.status(403).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error updating game:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteGame(req: Request, res: Response) {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    if (game.user.toString() === req.user._id) {
      await Game.deleteOne({ _id: game._id });
      return res.status(200).json({ message: "Game deleted successfully" });
    } else {
      return res.status(403).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error updating game:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
