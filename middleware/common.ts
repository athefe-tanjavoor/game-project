/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextFunction, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { Env } from "../strategies";
import passport from "passport";

function getToken(user: TokenPayload): string {
  return jwt.sign(user, Env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
}

function verifyJWTstrict(req: Request, res: Response, next: NextFunction) {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: any, user: TokenPayload) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      console.log("err", err);

      if (!user) {
        console.log(err);
        return res.status(403).json({ message: "Invalid Credentials" });
      }

      req.user = user ?? null;
      next();
    }
  )(req, res, next);
}

export { getToken, verifyJWTstrict };
