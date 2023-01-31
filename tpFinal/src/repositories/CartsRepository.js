import Cart from "../entities/Cart.js";

export default class CartsRepository{
    constructor(dao){
        this.dao = dao;
    };

    createCart(cart){
        this.dao.save(cart);
    };

    async getCartById(id){
        const cart  = await this.dao.getById(id);
        if(!cart) return null
        return new Cart(cart)
    }

    async updateCartById(cart){
        await this.dao.updateById(cart)
    }

    async pushProductToCart(cart, product){
        await this.dao.pushProductToCart(cart.id, product)
    }

    pullProductFromCart(cartId, productId){
        this.dao.pullProductFromCart(cartId, productId)
    }
};