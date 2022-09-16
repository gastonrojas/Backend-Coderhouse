const { Server: HttpServer } = require('http');
const { Server: Socket } = require('socket.io');

const app = require('./app.js')
const products = require('./src/containers/mysql/mysqlIndex.js')
const messages = require('./src/containers/sqlite3/sqliteIndex.js')

const PORT = process.env.PORT || 8080;

const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.error(`Error en Servidor ${error}`));

io.on('connection', async (socket) => {
  socket.emit('products', await products.getAll());
  socket.emit('messages', await messages.getAll());

  socket.on('newProduct', async (newProduct) => {
    await products.save(newProduct);
    io.sockets.emit('products', await products.getAll());
  });

  socket.on('newMessage', async (newMessage) => {
    await messages.save(newMessage);
    io.sockets.emit('messages', await messages.getAll());
  });
});