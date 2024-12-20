import mongoose, { model, Schema, Types } from "mongoose";

interface ICategory extends mongoose.Document {
  user: Types.ObjectId;
  category_name: string;
  description: string;
}

const categorySchema = new Schema<ICategory>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default model<ICategory>("Category", categorySchema);
