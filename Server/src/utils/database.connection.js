import mongoose, { connection } from "mongoose";
import { DB_CONNECTION_STRING } from "../configs/index";
import logger from "../utils/logger";
import dotenv from 'dotenv';


let database;
const connect = async() => {
    const MONGODB_URL=DB_CONNECTION_STRING ;

    if (database) return;
    mongoose.connect(MONGODB_URL)
        .then((connection) => {
            database = connection;
            logger.info("Database synced");

        }).catch((err) => {
            logger.error(err);

        })
}
export { connect };