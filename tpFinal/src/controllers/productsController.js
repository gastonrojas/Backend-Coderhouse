import productsService from '../services/productsService/productsServiceFactory.js'

const productsController = {
    async products(req, res){
        try {
            const result = await productsService.getProducts()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(`ERROR: No se pudo recuperar la informacion: ${error.message}`)
        }
    },
    async detail(req, res){
        try {
            const product = await productsService.getProductById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(400).json(`ERROR: No se pudo recuperar la informacion: ${error.message}`)
        }
    },
    async store(req, res){
        try {
            const {name, description, price, image} = req.body;
            const storedProduct = await productsService.storeProduct({name, description, price, image});
            res.status(201).json({product_stored: storedProduct})
        } catch (error) {
            const errorSplit = error.message.split(':');
            if (errorSplit[0] == 'STORE_ERROR') return res.status(400).json(`product creation failed: ${errorSplit[1]}`)
            res.status(500).json(`product creation failed: ${error}`)
        }
    },
    async update(req, res){
        try {
            const id = req.params.id;
            const {name, description, price, image} = req.body;
            const updatedProduct = await productsService.updateProduct(id, {name, description, price, image})
            res.status(200).json({product_updated: updatedProduct})
        } catch (error) {
            res.status(500).json(`ERROR: could not update. ${error.message}`)
        }
    },
    async delete(req, res){
        try {
            const deleted = await productsService.deleteProduct(req.params.id);
            res.status(200).json({deleted_product: deleted});
        } catch (error) {
            res.status(400).json(`ERROR: could not delete. ${error.message}`);
        }
    }
}

export default productsController;