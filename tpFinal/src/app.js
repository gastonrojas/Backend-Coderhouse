import express from 'express';

import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';
import ordersRouter from './routes/orders.js';
import imageRouter from './routes/images.js';
import usersRouter from './routes/users.js';

const app = express();


// middlewares
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas

app.use(imageRouter);
app.use(usersRouter);
app.use(productsRouter);
app.use(cartsRouter);
app.use(ordersRouter);


app.all('*', (req, res) => {
  res.json({ error: `404 Not Found`, desc: `Ups! No encontamos la pagina que buscas ='(` });
});


export default app;