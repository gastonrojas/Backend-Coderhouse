import express from 'express';

import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';
import ordersRouter from './routes/orders.js';
import imageRouter from './routes/images.js';

import sessionHandler from './middlewares/session.js'
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js';

const app = express();


// middlewares
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessionHandler)
app.use(passportMiddleware)
app.use(passportSessionHandler)
// rutas

app.use('/api/images', imageRouter)
app.use('/auth', usersRouter)
app.use('/api/products', productsRouter);
app.use('/api/shoppingcartproducts', cartsRouter);
app.use('/api/orders', ordersRouter)


app.all('*', (req, res) => {
  res.json({ error: `404 Not Found`, desc: `Ups! No encontamos la pagina que buscas ='(` });
});


export default app;