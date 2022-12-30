import mongoDatabase from '../mongoDatabase.js';

export default class MongodbContainer {
  constructor(collection) {
    this.collection = mongoDatabase.collection(collection)
    this.options = {projection: { _id: 0, __v: 0}}
  };
  async getAll() {
    try {
      return await this.collection.find({}, this.options).toArray()
    } catch (error) {
      throw new Error('error en base de datos')
    }
  };
  async getUserByUsername(username){
    try {
      const user = await this.collection.findOne({username}, this.options)
      return user
    } catch (error) {
      throw new Error('error en base de datos')
    }
  }
  
  async getById(id){
    try {
      const user = await this.collection.findOne({id}, this.options)
      if (!user) throw new Error('NOT_FOUND: Datos incorrectos. Intente nuevamente.')
      return user
    } catch (error) {
      throw new Error('error en base de datos')
    }
  }
  async save(obj) {
    try{
     await this.collection.insertOne({...obj});
    }catch(error){
      throw new Error('error en base de datos')
    }
  };
  async updateOneById(id, obj){
    await this.collection.replaceOne({id}, obj)
  };
  async deleteOneById(id){
    await this.collection.deleteOne({id})
  };
};