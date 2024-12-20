import mongoose, { model, Schema, Types } from "mongoose";

interface IGame extends mongoose.Document {
  user: Types.ObjectId;
  title: string;
  description: string;
  price: string;
  year: number;
}

const gameSchema = new Schema<IGame>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IGame>("Game", gameSchema);
