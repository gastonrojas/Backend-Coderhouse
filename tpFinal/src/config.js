import os from 'os';
import path from 'path';
import { config } from 'dotenv';


export const NODE_ENV = process.env.NODE_ENV || 'development'

const configToLoad = NODE_ENV === 'production'
  ? { path: path.resolve(process.cwd(), 'production.env') }
  : { path: path.resolve(process.cwd(), 'development.env') }

config(configToLoad);

export const PORT = process.env.PORT || 8080;
export const MODE = process.env.MODE;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ;
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const PERS = process.env.PERS || 'mongodb';
const mongoUrl = process.env.MONGODB_STRING;
export default mongoUrl;

export const  googleAuth = {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.GOOGLE_PASSWORD
};

export const numCpus = os.cpus().length;