import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDb from "./db/connectMongoDb.js";

dotenv.config();

const app = express();

console.log(process.env.MONGO_URI);
const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectMongoDb();
});
