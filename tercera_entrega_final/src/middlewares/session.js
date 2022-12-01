import session from 'express-session'
import { sessionConfig } from '../config.js'

const sessionHandler = session(sessionConfig);

export default sessionHandler;