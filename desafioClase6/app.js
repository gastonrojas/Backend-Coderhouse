const express = require('express');
const app = express();
const PORT = 8080;
const products = require('./src/contenedor.js')

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
  });
  

server.on('error', (error) => console.error(`Error en Servidor ${error}`));

app.get('/productos', async (req, res) => {
  try {
    const getAllProducts = await products.getAll();
    res.send(getAllProducts);
  } catch (err) {
    console.log(err);
  }
});

app.get('/productoRandom', async (req, res) => {
  try {
    const randomProduct = await products.getRandomProduct();
    res.send(randomProduct);
  } catch (err) {
    console.log(err);
}
});
