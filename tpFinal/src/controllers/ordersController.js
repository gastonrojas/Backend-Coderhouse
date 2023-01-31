import ordersService from '../services/ordersService/ordersServiceFactory.js'

const ordersController ={
    async getAllORders(req, res, next){
        try {
            const allOrders = await ordersService.getAllOrders(req.user.id)
            res.status(200).json(allOrders)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },
    async generateNewOrder(req, res) {
        const cartId = req.user.id;
        try {
            await ordersService.createNewOrder(cartId, req.user)
            res.sendStatus(201)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },
}


export default ordersController;