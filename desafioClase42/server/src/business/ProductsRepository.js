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
    async getProductById(id){
        const product = await this.dao.getById(id)
        return new Product(product)
    }
    async updateProduct(id, productUpdated){
        await this.dao.updateOneById(id, productUpdated.asDto());
    }
    async deleteProduct(id){
        await this.dao.deleteOneById(id);
    }
}