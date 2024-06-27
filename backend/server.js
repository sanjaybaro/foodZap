import express from "express";
import cors from "cors";
import { connectionDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'

//app config
const app = express();
const port = 4001;

//middleware
app.use(express.json());
app.use(cors());

//get method
app.get("/", (req, res) => {
  res.send("API Working");
});

//db connection
connectionDB();

//api endpoints
app.use("/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/user",userRouter)

//run express server on port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
