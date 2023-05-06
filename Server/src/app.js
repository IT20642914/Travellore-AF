import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {connect} from "./utils/database.connection"
import logger from './utils/logger';
import authRoutes from "./routes/auth.route"
const app= express();
const PORT= process.env.prot||"9090";
const corsConfig = {
    credentials: true,
    origin: true,
};
dotenv.config();
app.use(cors(corsConfig));
app.use(express.json({ limit: "20mb" }));
app.use(cookieParser());

app.listen(PORT, ()=>{
    logger.info(`🚀 Server is up and running on PORT ${PORT}`);
    connect();
})

app.use("/api", authRoutes);