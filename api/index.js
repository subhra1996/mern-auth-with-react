import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to mongoDb");
}).catch((err)=>{
    console.log(err);
})

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client' , 'dist' , 'index.html'));
});

app.use(express.json());

app.use(cookieParser());

app.listen(3000, ( )=>{
    console.log('Linstening on port 3000');
});

app.use('/api/user', userRoutes);

app.use('/api/auth', authRoutes);


app.use((error, req, res, next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || 'something went wrong';

    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});