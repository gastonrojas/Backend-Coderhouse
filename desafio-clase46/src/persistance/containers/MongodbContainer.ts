import mongoDatabase from './mongoDatabase'
import { Product } from 'src/interface/products/product.interface'
import { CreateProductDto } from 'src/dto/product-repo.dto'
export default class MongodbContainer {
  collection: any
  options: any
  constructor(col: string){
    this.collection = mongoDatabase.collection(col)
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
     await this.collection.insertOne(obj);
    }catch(error){
      throw new Error('error en base de datos')
    }
  };
  async updateOneById(id: string, obj: CreateProductDto){
    await this.collection.replaceOne({id}, {id, ...obj})
  };
  async deleteOneById(id){
    const deleted = await this.collection.findOneAndDelete({id}, this.options)
    return deleted.value
  };
};