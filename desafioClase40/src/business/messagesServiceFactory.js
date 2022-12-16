import messagesDao from '../persistance/messagesDAO.js';
import MessagesRepository from './MessagesRepository.js';
import MessagesService from './MessagesService.js'

const repo = new MessagesRepository(messagesDao)

export default new MessagesService(repo);