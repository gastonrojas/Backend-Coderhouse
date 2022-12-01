import { orders, carts } from '../containers/MongodbContainer.js'
import createOrder from '../api/createOrder.js'

import { sendNewOrderMail } from '../api/createMail.js'
import { ADMIN_MAIL } from '../config.js'
import {logger, fileLogger} from '../utils/loggers.js';

const ordersController ={
    async getAllORders(req, res, next){
        try {
            const allOrders = await orders.getAll()
            res.status(200).json(allOrders)
        } catch (error) {
            logger.error(error)
            fileLogger.error(error)
            res.status(500).json(error)
        }
    },
    async generateNewOrder(req, res) {
        const cartId = req.user.id;
        try {
            const cart = await carts.getbyId(cartId);
            const order = createOrder(cartId, cart.products);
            await orders.save(order);
            await carts.removeFromArray(cartId, 'products');
            await sendNewOrderMail(req.user, cart, ADMIN_MAIL);
            res.sendStatus(201)
        } catch (error) {
            logger.error(error)
            fileLogger.error(error)
            res.status(500).json(error)
        }
    },
}


export default ordersController;