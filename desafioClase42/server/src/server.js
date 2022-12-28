import http from 'http';
import {Server} from 'socket.io' 

import app from './app.js';
import messagesService from './business/messagesServiceFactory.js'

export default function createServer(PORT) {
  return new Promise((resolve, reject)=>{
    const httpServer = http.createServer(app);
    const server = httpServer.listen(PORT);
    const io = new Server(httpServer);
  
    io.on('connection', async (socket) => {
      socket.emit('messages', await messagesService.getMessages());

      socket.on('newMessage', async (newMessage) => {
        try {
          await messagesService.storeMessage(newMessage)
          const messages = await messagesService.getMessages()
          io.sockets.emit('messages', messages);
        } catch (error) {
          console.log(error)
        }
      });

    });
    server.on('listening', () => resolve(server))
    server.on('error', error => reject(error));
  })
}


