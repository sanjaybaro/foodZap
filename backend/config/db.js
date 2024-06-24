import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectionDB = async () =>{
 await mongoose.connect(process.env.mongoURL).
 then(()=>{
    console.log("DB Connected");
 })
}
