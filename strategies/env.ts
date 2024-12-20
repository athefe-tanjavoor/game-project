import { config } from "dotenv";
config();
console.log(`\u001b[35m\u{1F4E6} \u001b[0m\u001b[1mEnv loaded\u001b[0m`);

export default {
  allowedorigin: ["http://localhost:3000"],
  PORT: Number(process.env.PORT),
  MONGO_URI: process.env.MONGO_URI as string,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY as string,
  PREFIX: "/api",
};
