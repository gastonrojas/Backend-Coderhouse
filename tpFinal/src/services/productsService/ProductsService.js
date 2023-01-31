import {randomUUID} from 'crypto'
import Product from '../../entities/Product.js'

export default class ProductsService {
  constructor(repo) {
    this.productRepo = repo
  }

  async storeProduct(newProduct) {
    const product= new Product({id: randomUUID(), ...newProduct});
    await this.productRepo.storeProduct(product.asDto());
    return product.asDto();
  };

  async getProducts() {
    const products = await this.productRepo.getProducts();
    if (products.length > 0){
      return products.map(m=>m.asDto())
    }
    return products
  };

  async getProductById(id){
    const product = await this.productRepo.getProductById(id);
    if (!product) throw new Error('product not found');
    return product.asDto();
  };

  async updateProduct(id, updated){
      const productToUpdate = new Product({id, ...updated});
      const updatedProduct = await this.productRepo.updateProduct(id, productToUpdate.asDto());
      return {before:updatedProduct.asDto(), after: productToUpdate.asDto()};
  };
  async deleteProduct(id){
    const deletedProduct= await this.productRepo.deleteProduct(id);
    return deletedProduct.asDto()
  }
}
