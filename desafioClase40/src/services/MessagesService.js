import { messages } from '../containers/MongodbContainer.js'


class Mensaje {
  #id
  #nombre
  #apellido
  #edad
  #alias
  #avatar
  #date

  constructor({
    id,
    nombre,
    apellido,
    edad,
    alias, 
    avatar, 
    date
  }){
    this.#id = id,
    this.#nombre = nombre,
    this.#apellido = apellido,
    this.#edad = edad,
    this.#alias = alias,
    this.#avatar = avatar,
    this.#date = date
  }

  set id (id) {
    if(!id) throw new Error('id es requerido');
    if(typeof(id) != 'numbrer') throw new Error('id debe ser un numero valido')
    else return id
  }
  get id(){
    return this.#id
  }
  set nombre(nombre){

  }
}

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
  