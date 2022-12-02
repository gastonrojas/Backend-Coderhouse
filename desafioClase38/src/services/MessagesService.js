import { messages } from '../containers/MongodbContainer.js'

class MessagesService {
    constructor() {}
    async storeNewMessage(newMessage) {
      await messages.save(newMessage);
    }
    async getMessages() {
      return await messages.getAll()
    }
  }

export default new MessagesService()
  