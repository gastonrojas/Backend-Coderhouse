import Product from "../entities/Product.js";

export default class ProductsRepository{
    constructor(dao){
        this.dao = dao;
    }

    storeProduct(product){
        this.dao.save(product);
    };

    async getProducts(){
        const products = await this.dao.getAll();
        if (products.length){
            return products.map(p=> new Product(p));
        };
        return products;
    }

    async getProductById(id){
        const product  = await this.dao.getById(id);
        if(!product) return null
        return new Product(product)
    };

    async updateProduct(id, prod){
       const updated = await this.dao.updateById({id, ...prod})
       return new Product(updated)
    }

    async deleteProduct(id){
        const deleted = await this.dao.deleteById(id)
        return new Product(deleted)
    }
}