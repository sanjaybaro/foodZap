import express from "express";
import cors from "cors";

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

//run express server on port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});