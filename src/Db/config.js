import dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
    HOST:process.env.HOST,
    PORT:process.env.DBPORT,
    DB:process.env.DB,
    SECRET:process.env.SECRET
};

