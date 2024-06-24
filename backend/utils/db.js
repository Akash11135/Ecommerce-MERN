import mongoose from "mongoose";
import env from "dotenv";
env.config();

export const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI).then(() => {
      console.log("successfully connected to mongoose.");
    });
  } catch (error) {
    throw new Error("Error in connection with mongoose.");
  }
};
