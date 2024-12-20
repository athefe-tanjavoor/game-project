import mongoose from "mongoose";
import { Env } from "../strategies";

export default async function dbConnect() {
  try {
    const uri = Env.MONGO_URI;
    console.log(uri);
    mongoose.set("strictQuery", true);
    await mongoose.connect(Env.MONGO_URI);

    console.log("🚀 Database connected");
  } catch (err) {
    console.log(err);
  }
}
