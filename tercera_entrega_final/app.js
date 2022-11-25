import express from 'express';

import usersRouter from './src/routes/users.js';
import productsRoute from './src/routes/products.js';
import sessionHandler from './src/middlewares/session.js'
import { passportMiddleware, passportSessionHandler } from './src/middlewares/passport.js';

const app = express();


// middlewares
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessionHandler)
app.use(passportMiddleware)
app.use(passportSessionHandler)
// rutas

app.use('/api/products', productsRoute);
app.use('/auth', usersRouter)
// app.use('api/carritos', cartsApi);


// app.all('*', (req, res) => {
//   res.json({ error: `404 Not Found`, desc: `Ups! No encontamos la pagina que buscas ='(` });
// });


export default app;