import mongoDatabase from "./mongoDatabase.js";

export default class MongodbContainer {
  constructor(collection) {
    this.collection = mongoDatabase.collection(collection)
    this.options = {projection: { _id: 0, __v: 0}}
  };
  async getAll(query) {
    try {
      if (query){
        const allObjects = await this.collection.find(query, this.options).toArray();
        return allObjects
      } else{
        const allObjects = await this.collection.find({}, this.options).toArray();
        return allObjects
      }
    } catch (error) {
      throw new Error('error en base de datos')
    }
  };
  async getByField(query){
    try {
      return await this.collection.findOne(query, this.options);
    } catch (error) {
      return null
    }
  }
  
  async getById(id){
    try {
      return await this.collection.findOne({id}, this.options)
    } catch (error) {
      return null
    }
  }
  async save(obj) {
    try{
      await this.collection.insertOne({...obj});
    }catch(error){
      throw new Error(`DB_ERROR: ${error}`)
    }
  };

  async updateById(obj){
    try{
      if (!obj.id) throw new Error('MISSING_ARGS: id required')
      const updated = await this.collection.findOneAndReplace({id: obj.id}, obj)
      return updated.value
    } catch(error){
      throw new Error(error.message)
    }
  };
  async deleteById(id){
      try {
        const deleted = await this.collection.findOneAndDelete({id})
        if(!deleted.value) throw new Error('invalid id')
        return deleted.value
      } catch (error) {
        throw new Error(error.message)
      }
  }
  
  pushProductToCart(cartId, product){
    try {
      this.collection.findOneAndUpdate( { id: cartId }, { $push: { products: { product, quantity: 1 } } })
    } catch (error) {
      throw new Error(error.message)
    }
  }


  pullProductFromCart(cartId, productId){
    try {
      this.collection.findOneAndUpdate({ id: cartId }, { $pull: { products: { 'product.id': productId } } })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async pushToArray(id, array, element){
    try {
      await this.collection.updateOne( { id }, { $push: {[array]: element} });
    } catch (error) {
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
      throw new Error('Error en base de datos')
    }
  }
};