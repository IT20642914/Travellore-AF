import dotenv from 'dotenv';
dotenv.config();
module.exports = {
    DB_CONNECTION_STRING: process.env.MONGODB_URL,  
   };