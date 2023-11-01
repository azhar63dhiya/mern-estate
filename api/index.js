import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
import express, { Router } from "express";
import mongoose from "mongoose";
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
    console.log('connected to mongodbs');
    })
    .catch((err) => {
    console.log(err);
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('this server running on port 3000!');
    }
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);