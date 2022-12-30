export default class ProductsController {
    constructor(api){
        this.api = api
    }
    async getAll(req, res, next){
        try {
            const products = await this.api.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(`ERROR: ${error}`)
        }
    }
    async getById(req, res){
        try {
            const product = await this.api.getProductById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(`ERROR: ${error}`)
        }

    }
    async store(req, res, next){
        try {
            await this.api.storeProduct(req.body);
            res.sendStatus(200)
        } catch (error) {
            res.status(400).send(`MISSING_ARGS: ${error}`)
        }
    }
    async update(req,res,next){
        try {
            const product = await this.api.updateProduct(req.params.id, req.body)
            res.json(product)
        } catch (error) {
            res.status(`ERROR: ${error}`)
        }
    }
    async delete(req,res, next){
        try{
            await this.api.deleteProduct(req.params.id)
            res.status(200).json('Producto eliminado!')
        } catch(error){
            res.send(error)
        }
    }
}