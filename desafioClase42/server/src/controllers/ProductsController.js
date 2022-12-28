export default class ProductsController {
    constructor(api){
        this.api = api
        this.hola = 'hola'
    }
    async getAll(req, res, next){
        try {
            const products = await this.api.getProducts();
            res.status(200).json(products);
        } catch (error) {
            console.log(error)
            res.send(error);
        }
    }

    async store(req, res, next){
        try {
            await this.api.storeProduct(req.body);
            res.redirect('/api/products');
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

