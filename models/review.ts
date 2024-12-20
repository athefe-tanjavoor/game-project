import mongoose, { model, Schema, Types } from "mongoose";

interface IReview extends mongoose.Document {
  user: Types.ObjectId;
  content: string;
  rating: string;
}

const reviewSchema = new Schema<IReview>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

export default model<IReview>("Review", reviewSchema);
