import {randomUUID} from 'crypto'
import Product from "./Product.js";

export default class ProductsService {
  constructor(repo) {
    this.productRepo = repo
  };

  async storeProduct(newProduct) {
    const product= new Product({id: randomUUID(), ...newProduct});
    await this.productRepo.saveProduct(product);
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
    if (!product) throw new Error('No encontramos el prodcuto');
    else return product.asDto();
  };

  async updateProduct(id, updated){
      const productUpdated = new Product({id, ...updated});
      await this.productRepo.updateProduct(id, productUpdated);
      return productUpdated.asDto();
  };
  async deleteProduct(id){
    await this.productRepo.deleteProduct(id);
  }
};
