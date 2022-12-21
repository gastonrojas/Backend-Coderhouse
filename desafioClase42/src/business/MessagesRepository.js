import Message from "./Message.js";

export default class MessagesRepository{
    constructor(dao){
        this.dao = dao;
    }

    async saveMessage(message){
        await this.dao.save(message)
    }
    async getMessages(){
        const allMessagesArray = await this.dao.getAll();
        if (allMessagesArray.length > 0){
            return allMessagesArray.map(message=> new Message(message))
        }
        return allMessagesArray
    }   
}