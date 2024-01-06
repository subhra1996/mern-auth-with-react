import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to mongoDb");
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(3000, ( )=>{
    console.log('Linstening on port 3000');
});