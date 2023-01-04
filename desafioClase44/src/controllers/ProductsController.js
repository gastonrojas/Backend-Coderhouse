import productsApi from "../business/productsServiceFactory.js";

export default {
    async getAll(){
        try {
            const products = await productsApi.getProducts();
            return products
        } catch (error) {

            return error
        }
    },
    async getById({id}){
        try {
            const product = await productsApi.getProductById(id)
            return product
        } catch (error) {
            return undefined
        }

    },
    async store({input}){
        try {
            const newProduct = await productsApi.storeProduct(input);
            return newProduct
        } catch (error) {
            return error
        }
    },
    async update({id, input}){
        try {
            const product = await productsApi.updateProduct(id, input)
            return product
        } catch (error) {
            return error
        }
    },
    async delete({id}){
        try{
            const deletedProduct = await productsApi.deleteProduct(id)
            return deletedProduct
        } catch(error){
            return error
        }
    }
}