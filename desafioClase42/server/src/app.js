import express from 'express';

import { root } from './routes/root.js';
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js';
import {sessionHandler } from './middlewares/session.js';
import { authRouter } from './routes/authRoute.js';
import infoRoute from './routes/infoRoute.js';
import randomsRoute from './routes/randomsRoute.js';
// import infoLogger from './src/middlewares/infoLogger.js';
import productsRoute from './routes/productsRouteFactory.js'
import notFound from './middlewares/404.js';

const app = express();


// middlewares

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sessionHandler)
app.use(passportMiddleware)
app.use(passportSessionHandler)
app.set('views', 'public/views');
app.set('view engine', 'ejs');

// rutas

app.use('/', root);
app.use('/auth', authRouter);
app.use('/info', infoRoute);
app.use('/api/randoms', randomsRoute);
app.use('/api/products', productsRoute)
app.use(notFound)


// function errorHandler(error, req, res, next) {
//     switch(error.tipo) {
//         case 'error interno': 
//         res.status(500)
//         break
//     }
// }
export default app