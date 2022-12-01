import { carts, products } from "../containers/MongodbContainer.js";
import {logger, fileLogger} from '../utils/loggers.js';

const cartsController = {
    async cartProducts(req, res){
        let cartId = req.user.id;
        try {
            const cart = await carts.getbyId(cartId)
            res.status(200).json(cart.products);
        } catch (error) {
            logger.error(error)
            fileLogger.error(error)
            res.status(500).json(error)
        }
    },

    async addProductToCart(req, res){
        let cartId = req.user.id;
        let productId = req.body.productId
        
        try {
            const productToAdd = await products.getbyId(productId)
            if(!productToAdd) throw new Error('ERROR: El producto que intengta agregar a su carrito no existe.')
            await carts.pushToArray(cartId, 'products', productToAdd)
            res.sendStatus(200)
        } catch (error) {
            logger.error(error)
            fileLogger.error(error)
            res.status(500).json(`${error}`)
        }
    },

    async removeProductFromCart(req, res){
        let cartId = req.user.id;
        let productId = req.params.id

        try {
            await carts.removeFromArray(cartId, 'products', productId);
            res.sendStatus(200)
        } catch (error) {
            logger.error(error)
            fileLogger.error(error)
            res.status(406).send(`${error}`)
        }

    },
}

export default cartsController;