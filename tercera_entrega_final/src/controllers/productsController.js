import { products } from "../containers/MongodbContainer.js";
import createProduct from "../api/createProduct.js";
import createUpdatedProduct from "../api/createUpdatedProduct.js";
import {logger, fileLogger} from '../utils/loggers.js';

const productsController = {
    async products(req, res){
        try {
            const result = await products.getAll()
            res.json(result)
        } catch (error) {
            res.json(`ERROR: No se pudo recuperar la informacion: ${error}`)
        }
    },
    async detail(req, res){
        try {
            const product = await products.getbyId(req.params.id)
            res.json(product)
        } catch (error) {
            res.json(`ERROR: No se pudo recuperar la informacion: ${error}`)
        }
    },
    async store(req, res){
        const newProduct = createProduct(req.body);
        try {
            await products.save(newProduct);
            res.sendStatus(201);
        } catch (error) {
            res.json('ERROR: No se pugo guardar el producto');
        };
    },
    async update(req, res){
        try {
            const updatedProduct = createUpdatedProduct(req.params.id, req.body)
            await products.updateById(updatedProduct)
            res.sendStatus(210)
        } catch (error) {
            req.status(500).json(error)
        }
    },
    delete(req, res){
        
    }
}

export default productsController;