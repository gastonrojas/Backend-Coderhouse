import Message from './Message.js';
import { randomUUID } from 'crypto';

export default class MessagesService {
    constructor(repo) {
      this.messageRepo = repo
    }
    async storeMessage(newMessage) {
      try {
        const message= new Message({id: randomUUID(), ...newMessage});
        await this.messageRepo.saveMessage(message.asDto());
        return message.asDto();
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    }
    async getMessages() {
      const messages = await this.messageRepo.getMessages();
      if (messages.length > 0){
        return messages.map(m=>m.asDto()) 
      }
      return messages
    }
  }
