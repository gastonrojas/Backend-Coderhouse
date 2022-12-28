import {randomUUID} from 'crypto'
import Product from "./Product.js";

export default class ProductsService {
  constructor(repo) {
    this.productRepo = repo
  }
  async storeProduct(newProduct) {
    const product= new Product({id: randomUUID(), ...newProduct});
    await this.productRepo.saveProduct(product);
    return product.asDto();
  }
  async getProducts() {
    const products = await this.productRepo.getProducts();
    if (products.length > 0){
      return products.map(m=>m.asDto())
    }
    return products
  }
}
