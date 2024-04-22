import mongoose from "mongoose";
import cors from "cors";
import express, { Request, Response } from "express";
import "dotenv/config";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connect to database"));
const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});
app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
