import { randomUUID } from 'crypto';
import Order from '../../entities/Order.js';
import cartsService from "../cartsService/cartsServiceFactory.js";
import { sendNewOrderMailToAdmin, sendNewOrderMailToUser } from '../../utils/sendMails.js';

export default class OrdersService {
    constructor(repo) {
        this.ordersRepo = repo
      }

    async createNewOrder(cartId, user){
      try {
        const cart = await cartsService.getCartById(cartId);
        const order = new Order({
          id: randomUUID(),
          clientId: cartId,
          date: Date.now(),
          products: cart.products
        });
        await this.ordersRepo.storeOrder(order.asDto());
        await cartsService.emptyCart(cartId);
        await sendNewOrderMailToAdmin(user, order.asDto());
        await sendNewOrderMailToUser(user, order.asDto())
      } catch (error) {
        console.log(error)
        throw new Error(error.message)
      }
    }
    async getAllOrders(id) {
      const orders = await this.ordersRepo.getAllOrders(id);
      if (orders.length > 0){
        return orders.map(m=>m.asDto())
      }
      return orders
    };

}