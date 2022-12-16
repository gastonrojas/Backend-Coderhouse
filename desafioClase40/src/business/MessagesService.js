import Message from './Message.js';
import { randomUUID } from 'crypto';

export default class MessagesService {
    constructor(repo) {
      this.messageRepo = repo
    }
    async storeMessage(newMessage) {
      const message= new Message({id: randomUUID(), ...newMessage});
      await this.messageRepo.saveMessage(message.asDto());
      return message.asDto();
    }
    async getMessages() {
      const messages = await this.messageRepo.getMessages();
      if (messages.length > 0){
        return messages.map(m=>m.asDto()) 
      }
      return messages
    }
  }
