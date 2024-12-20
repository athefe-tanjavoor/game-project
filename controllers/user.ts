import type { Request, Response } from "express";

import User from "../models/user";
import { getToken } from "../middleware/common";

export async function getUser(req: Request, res: Response) {
  try {
    const user = await User.find();
    if (!user) return res.status(400).json({ message: "User mot Found", user });
    return res.status(200).json({ message: "User fetched Successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "User not Created Successfully", error });
  }
}

export async function createUser(req: Request, res: Response) {
  console.log("requests", req.body);
  const { username, email, password } = req.body;
  try {
    const user = await User.register(new User({ email, username }), password);
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    if (!user) return res.status(400).json({ message: "User mot Found", user });

    const token = getToken({
      _id: user._id as string,
      username: user.username,
      email: user.email,
      role: user.role,
    });
    return res
      .status(200)
      .json({ message: "User Created Successfully", user, token });
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUserById(req: Request, res: Response) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      return res.status(400).json({ message: "User Found", user });
    } else {
      return res.status(400).json({ message: "User mot Found", user });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "User not fetched Successfully", error });
  }
}

// export async function updateUser(req: Request, res: Response) {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(400).json({ message: "User Not Founf" });

//     if (user._id.toString() === req.user._id) {
//       await User.updateOne({ _id: user._id }, { $set: req.body });
//     } else {
//       return res
//         .status(403)
//         .json({ message: "You are not authorized to update this user" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function deleteUser(req: Request, res: Response) {}
