import express from "express";
import env from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./utils/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
env.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(cookieParser);
// app.use(
//   cors({
//     origin: "http:/localhost:3000",
//     methods: ["POST", "GET", "DELETE", "PUT", "PATCH"],
//   })
// );

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("server up on port : ", PORT);
});
