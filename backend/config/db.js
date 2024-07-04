import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1); // Exit process with failure
  }
};
