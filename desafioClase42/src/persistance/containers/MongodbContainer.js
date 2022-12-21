import pino from 'pino';
import mongoDatabase from '../mongoDatabase.js';

const logger = pino('pinoLogs/error.log')

export default class MongodbContainer {
  constructor(collection) {
    this.collection = mongoDatabase.collection(collection)
    this.options = {projection: { _id: 0, __v: 0}}
  };
  async getAll() {
    try {
      return await this.collection.find({}, this.options).toArray()
    } catch (error) {
      logger.error(error)
      throw new Error('error en base de datos')
    }
  };
  async getUserByUsername(username){
    try {
      const user = await this.collection.findOne({username}, this.options)
      return user
    } catch (error) {
      logger.error(error)
      throw new Error('error en base de datos')
    }
  }
  
  async getById(id){
    try {
      const user = await this.collection.findOne({id}, this.options)
      if (!user) throw new Error('NOT_FOUND: Datos incorrectos. Intente nuevamente.')
      return user
    } catch (error) {
      logger.error(error)
    }
  }
  async save(obj) {
    try{
     await this.collection.insertOne({...obj});
    }catch(error){
      logger.error(error)
    }
  };
};

// const users = new MongodbContainer(mongoConectionStr, 'ecommerce', 'users')

// export const products = new MongodbContainer(mongoConectionStr, 'ecommerce', 'productos')
// export const messages = new MongodbContainer(mongoConectionStr, 'ecommerce', 'messages')


