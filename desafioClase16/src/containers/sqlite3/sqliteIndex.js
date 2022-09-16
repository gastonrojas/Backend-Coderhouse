const options = require('./options/index.js');

const clienteMysql = require('knex')(options);

class Contenedor {
  constructor(client) {
    this.client = client;
    this.createTable()
  }

  createTable = async () => {
    try {
        const isMessages = await this.client.schema.hasTable('messages')

        if (isMessages){
            console.log('tabla de mensajes existe')
        } else{
            await  this.client.schema
            .createTable('messages', (tabla) => {
              tabla.string('email');
              tabla.string('text')
              tabla.string('date');
            })
            console.log('tabla de mensajes creada')
        }
   
    } catch (error) {
        console.log(error)
    }
  };

  getAll = async () => {
    try {
      const messages = await this.client.select('*').from('messages')
      return messages
      return 
    } catch (error) {
      console.log(error)
    }
  }
  save = async (obj) => {
    await this.client.insert({email: obj.email, text: obj.text, date: obj.date}).into('messages')
   }


}
const messages = new Contenedor(clienteMysql);

module.exports = messages
