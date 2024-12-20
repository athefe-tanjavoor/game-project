import { model, Schema } from "mongoose";
import type {
  PassportLocalModel,
  PassportLocalSchema,
  PassportLocalDocument,
  Types,
  Model,
} from "mongoose";
import PassportLocalMongoose from "passport-local-mongoose";

export interface IUser extends PassportLocalDocument {

  username: string;
  email: string;
  role: Roles;
  profile_Pic_Url: string;
  game: Types.ObjectId;
}

interface IUserModel extends PassportLocalModel<IUser> {
  isUsernameExists: (username: string) => Promise<boolean>;
  isEmailExists: (email: string) => Promise<boolean>;
}

const userSchema = new Schema(
  {
    //   userid: {
    //     type: String,
    //     required: true,
    //   },

    username: {
      type: String,
      required: true,
      // match: /^(?=.{4,17}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/,
    },
    email: {
      type: String,
      required: true,
      // match:
      //   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },

    userType: {
      type: String,
      enum: ["Customer", "Owner"],
      default: "Customer",
    },
    profile_Pic_Url: {
      type: String,
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
  },
  { timestamps: true }
) as PassportLocalSchema<IUserModel, Model<IUser>>;

userSchema.plugin(PassportLocalMongoose, {
  usernameQueryFields: ["email", "username"],
  maxAttempts: 5,
  unlockInterval: 1000 * 60 * 10,
});

export default model<IUser, IUserModel>("User", userSchema);
