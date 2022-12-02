import http from 'http';
import {Server} from 'socket.io' 

import app from './app.js';
import productsService from './src/services/ProductsService.js';
import messagesService from './src/services/MessagesService.js'


export default function createServer(PORT) {
  return new Promise((resolve, reject)=>{
    const httpServer = http.createServer(app);
    const server = httpServer.listen(PORT);
    const io = new Server(httpServer);
  
    io.on('connection', async (socket) => {
      socket.emit('products', await productsService.getProducts());
      socket.emit('messages', await messagesService.getMessages());

      socket.on('newProduct', async (newProduct) => {
        await productsService.storeProduct(newProduct)
        const products = await productsService.getProducts()
        io.sockets.emit('products', products)
      });
      
      socket.on('newMessage', async (newMessage) => {
        await messagesService.storeNewMessage(newMessage)
        const mensajes = await mensajesService.getMessages()
        io.sockets.emit('messages', mensajes);
      });

    });
    server.on('listening', () => resolve(server))
    server.on('error', error => reject(error));
  })
}


