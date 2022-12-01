import MongoStore from 'connect-mongo'
import os from 'os';

import { config } from 'dotenv';

config()

export const numCpus = os.cpus().length

const mongoUrl = process.env.MONGODB_STRING

export const sessionConfig = {
    store: MongoStore.create({mongoUrl, ttl: 600}),
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false,
}

export const  googleAuth = {
    user: process.env.GOOGLE_MAIL,
    pass: process.env.GOOGLE_PASSWORD
}

export const ADMIN_MAIL = process.env.ADMIN_MAIL

export default mongoUrl