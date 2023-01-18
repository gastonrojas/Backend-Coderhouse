import { config } from 'dotenv';

config();

export const mongoUrl = process.env.MONGODB_STRING;