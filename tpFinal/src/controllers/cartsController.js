import cartsService from '../services/cartsService/cartsServiceFactory.js'

const cartsController = {
    async cartProducts(req, res){
        let cartId = req.user.id;
        try {
            const cart = await cartsService.getCartById(cartId)
            res.status(200).json(cart.products);
        } catch (error) {
            res.status(500).json(error.message)
        }
    },

    async addProductToCart(req, res){
        let cartId = req.user.id;
        let productId = req.body.productId
        try {
            await cartsService.addProductToCart(cartId, productId)
            res.sendStatus(200)
        } catch (error) {
            res.status(500).json(`${error}`)
        }
    },

    async removeProductFromCart(req, res){
        let cartId = req.user.id;
        let productId = req.params.id

        try {
            await cartsService.removeProductFromCart(cartId, productId)
            res.sendStatus(200)
        } catch (error) {
            res.status(406).send(`${error}`)
        }

    },
}

export default cartsController;