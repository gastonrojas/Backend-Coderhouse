import { products } from '../containers/MongodbContainer.js'

class ProductosService {
    constructor() {}
    async storeProduct(newProduct) {
      await products.save(newProduct);
    }
    async getProducts() {
      return await products.getAll()
    }
  }

  export default new ProductosService()