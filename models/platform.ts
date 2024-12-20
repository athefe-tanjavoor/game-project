import mongoose, { model, Schema, Types } from "mongoose";

interface IPlatform extends mongoose.Document {
  user: Types.ObjectId;
  platform_name: string;
  description: string;
}

const platformSchema = new Schema<IPlatform>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  platform_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default model<IPlatform>("Platform", platformSchema);
