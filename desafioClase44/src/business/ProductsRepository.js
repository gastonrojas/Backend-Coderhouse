import Product from "./Product.js";
export default class ProductsRepository{
    constructor(dao){
        this.dao = dao;
    }
    async saveProduct(product){
        await this.dao.save(product.asDto())
    }
    async getProducts(){
        const allProductsArray = await this.dao.getAll();
        if (allProductsArray.length > 0){
            return allProductsArray.map(product=> {
                return new Product(product)})
        }
        return allProductsArray
    }
}