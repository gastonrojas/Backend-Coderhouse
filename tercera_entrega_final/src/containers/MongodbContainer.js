import { MongoClient } from 'mongodb';

import mongoConectionStr from '../config.js';

import {logger, fileLogger} from '../utils/loggers.js';

class MongodbContainer {
  constructor(uri, db, collection) {
    this.client = new MongoClient(uri)
    this.db = this.client.db(db)
    this.collection = this.db.collection(collection)
    this.options = {projection: { _id: 0, __v: 0}}
  };
  async getAll() {
    try {
      const allObjects = await this.collection.find({}, this.options).toArray();
      return allObjects
    } catch (error) {
      logger.error(error)
      fileLogger.error(error)
      throw new Error('error en base de datos')
    }
  };
  async getByField(query){
    try {
      const result = await this.collection.findOne(query, this.options)
      if (!result) throw new Error('No encontramos ninguna coincidencia')
      return result
    } catch (error) {
      logger.warn(error)
      fileLogger.warn(error)
      return null
    }
  }

  
  async getbyId(id){
    try {
      const result = await this.collection.findOne({id}, this.options)
      if (!result) throw new Error('NOT_FOUND: Datos incorrectos. Intente nuevamente.')
      return result
    } catch (error) {
      logger.error(error)
      fileLogger.error(error)
      throw error
    }
  }
  async save(obj) {
    try{
      await this.collection.insertOne(obj);
    }catch(error){
      logger.error(error)
      fileLogger.error(error)
    }
  };

  async updateById(obj){
    try{
      if (!obj.id) throw new Error('MISSING_ARGS: datos insuficientes. Id necesario para proceder.')
      await this.collection.replaceOne({id: obj.id}, obj)

    } catch{
      logger.error(error)
      fileLogger.error(error)
    }
  };
  async deleteById(id){
      try {
        await this.collection.deleteOne({id})
      } catch (error) {
        logger.error(error)
        fileLogger.error(error)
        throw new Error('Error en base de datos')
      }
  }

  async pushToArray(id, array, element){
    try {
      await this.collection.updateOne( { id }, { $push: {[array]: element} });
    } catch (error) {
      logger.error(error)
      fileLogger.error(error)
      throw new Error('Error en base de datos')
    }
  }

  async removeFromArray(id, array, idObject){
    try {
      if(idObject) {
        const cart =  await this.collection.findOne({id}, this.options);
        const cartProducts = cart.products;
        const indexOfElementToRemove = cartProducts.findIndex(prod=> prod.id == idObject)
        if (indexOfElementToRemove == -1) throw new Error('ERROR: ingrese un producto a eliminar')
        cartProducts.splice(indexOfElementToRemove, 1)
        await this.collection.updateOne({ id }, { $set: { [array]: cartProducts }})
      }else{
        this.collection.updateOne({ id }, { $set: { [array]: [] } })
        }
    } catch (error) {
      logger.error(error)
      fileLogger.error(error)
      throw new Error('Error en base de datos')
    }
  }
};

const users = new MongodbContainer(mongoConectionStr, 'ecommerce', 'users');
export const products = new MongodbContainer(mongoConectionStr, 'ecommerce', 'products');
export const messages = new MongodbContainer(mongoConectionStr, 'ecommerce', 'messages');
export const orders = new MongodbContainer(mongoConectionStr, 'ecommerce', 'orders');
export const carts = new MongodbContainer(mongoConectionStr, 'ecommerce', 'carts');


export default users;
