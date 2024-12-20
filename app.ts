import express from "express";
import passport from "passport";
import "./middleware/index";
const app = express();
import Env from "./strategies/env";
import dbConnect from "./config/db";
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

import UserRoutes from "./routes/userRoutes";

import gameRoutes from "./routes/gameRoutes";

import categoryRoutes from "./routes/category";

import platformRoutes from "./routes/platform";

import reviewRoutes from "./routes/review";

app.use(Env.PREFIX, UserRoutes);
app.use(Env.PREFIX, gameRoutes);
app.use(Env.PREFIX, categoryRoutes);
app.use(Env.PREFIX, platformRoutes);
app.use(Env.PREFIX, reviewRoutes);

app.get("/", (req, res) => {
  res.send("project is Successfully working");
});

app.listen(Env.PORT, () => {
  console.log(`app is running on ${Env.PORT}`);
});
;