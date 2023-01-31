import Order from '../entities/Order.js';

export default class OrdersRepository{
    constructor(dao){
        this.dao = dao;
    };
    async storeOrder(order){
        await this.dao.save(order)
    }
    async getAllOrders(id){
        const orders = await this.dao.getAll({clientId: id});
        if (orders.length){
            return orders.map(p=> new Order(p));
        };
        return orders;
    }
};