import MongoStore from 'connect-mongo'
import os from 'os';

import { config } from 'dotenv';

config()

const mongoUrl = process.env.MONGODB_STRING

export const numCpus = os.cpus().length

export const sessionConfig = {
    store: MongoStore.create({mongoUrl, ttl: 600}),
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false,
}

export const PERS = process.env.PERS || "mongoAtlas"

export default mongoUrl