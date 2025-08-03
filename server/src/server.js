import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.connect.js";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import cors from "cors";
import userRoutes from "./routes/user.routes.js"
import postRoutes from "./routes/post.routes.js"
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(cookieParser());




//Apis
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);


app.listen(PORT, () => {
  console.log(`server started at port:${PORT}`);
});
