const { Server: HttpServer } = require('http');
const { Server: Socket } = require('socket.io');

const app = require('./app.js')
const { getAll, save } = require('./src/utils/fsPromises.js');

const { MESSAGES_ROUTE, PRODUCTS_ROUTE } = require('./src/utils/fsRoutes.js');
const PORT = process.env.PORT || 8080;

const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.error(`Error en Servidor ${error}`));

io.on('connection', async (socket) => {
  socket.emit('products', await getAll(PRODUCTS_ROUTE));
  socket.emit('messages', await getAll(MESSAGES_ROUTE));

  socket.on('newProduct', async (newProduct) => {
    await save(PRODUCTS_ROUTE, newProduct);
    io.sockets.emit('products', await getAll(PRODUCTS_ROUTE));
  });

  socket.on('newMessage', async (newMessage) => {
    await save(MESSAGES_ROUTE, newMessage);
    io.sockets.emit('messages', await getAll(MESSAGES_ROUTE));
  });
});