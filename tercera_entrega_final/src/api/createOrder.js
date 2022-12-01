import { randomUUID } from 'crypto';

const createOrder = (userId, orderProducts) =>{
    if(!userId) throw new Error('ERROR: autenticacion requerida');
    if(!orderProducts.length) throw new Error('ERROR: el carrito esta vacio, por favor agregue productos al carrito para generar la orden.');

    return {
        id: randomUUID(),
        userId,
        orderProducts
    }
}

export default createOrder