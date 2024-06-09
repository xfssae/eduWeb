import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import myUserRoute from "./routes/myUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connect to database"));
const app = express();

//**middleware */
app.use(express.json());
app.use(cors());

//**HTTP GET Request */
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

// request from frontend(client) "api/my/user" it call myUserRoute -> myUserController and it will get pass to createCurrentUser
app.use("/api/my/user", myUserRoute);
app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
