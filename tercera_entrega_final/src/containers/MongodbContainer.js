// import pino from 'pino';
import { MongoClient } from 'mongodb';

import mongoConectionStr from '../../config.js';

// const logger = pino('pinoLogs/error.log')

class MongodbContainer {
  constructor(uri, db, collection) {
    this.client = new MongoClient(uri)
    this.db = this.client.db(db)
    this.collection = this.db.collection(collection)
    this.options = {projection: { _id: 0, __v: 0}}
  };
  async getAll() {
    try {
      const all = this.collection.find({}, this.options).toArray();
      if(!all) throw new Error('error en base de datos')
      return await this.collection.find({}, this.options).toArray()
    } catch (error) {
      console.log(error)
    }
  };
  async getByField(query){
    try {
      const result = await this.collection.findOne(query, this.options)
      if (!result) throw new Error('No se pudo acceder a la base de datos!')
      return result
    } catch (error) {
      return null
    }
  }
  
  async getbyId(id){
    try {
      const result = await this.collection.findOne({id}, this.options)
      if (!result) throw new Error('NOT_FOUND: Datos incorrectos. Intente nuevamente.')
      return result
    } catch (error) {
      console.log(error)
    }
  }
  async save(obj) {
    try{
      await this.collection.insertOne(obj);
    }catch(error){
      console.log(error)
    }
  };

  async updateById(obj){
    try{
      if (!obj.id) throw new Error('MISSING_ARGS: datos insuficientes. Id necesario para proceder.')
      await this.collection.replaceOne({id: obj.id}, obj)

    } catch{
      console.log(error)
    }
  };
  async deleteById(id){
    try {
      await this.collection.deleteOne({id})
      res.sendStatus(200)
    } catch (error) {
      res.status(500).json(error)
    }
  }
};

const users = new MongodbContainer(mongoConectionStr, 'ecommerce', 'users');
export const products = new MongodbContainer(mongoConectionStr, 'ecommerce', 'products');
export const messages = new MongodbContainer(mongoConectionStr, 'ecommerce', 'messages');
export const orders = new MongodbContainer(mongoConectionStr, 'ecommerce', 'orders');
export const carts = new MongodbContainer(mongoConectionStr, 'ecommerce', 'carts');


export default users;