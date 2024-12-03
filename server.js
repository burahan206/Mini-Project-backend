import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./Config/mongodb.js";
import memberRouter from "./Routes/memberRoute.js";

const app = express();
const port = process.env.PORT || 4000;



// API Endpoints
app.use("/api/team-members", memberRouter);


app.get("/", (req, res) => {
    res.send("API Working");
  });
  
app.listen(port, () => {
    console.log(`Server started on PORT : ${port} 🌐`);
  });

connectDB();