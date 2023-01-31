import Cart from "../../entities/Cart.js";
import productsService from "../productsService/productsServiceFactory.js";

export default class CartsService{
    constructor(repo){
        this.cartsRepo = repo;
    };

    async createCart(id){
        const cart = new Cart({id, products:[]})
        this.cartsRepo.createCart(cart.asDto())
    }

    async getCartById(id){
        const cart = await this.cartsRepo.getCartById(id);
        return cart.asDto();
    }

    async addProductToCart(cartId, productId){
        const cart = await this.getCartById(cartId)
        const product = await productsService.getProductById(productId);
        
        const index = cart.products.findIndex(p=> p.product.id == productId)
        if (index === -1){
            this.cartsRepo.pushProductToCart(cart, product)
        } else {
            cart.products[index].quantity ++
            this.cartsRepo.updateCartById(cart)
        }
    }
    async removeProductFromCart(cartId, productId){
        const cart = await this.getCartById(cartId)
        const product = await productsService.getProductById(productId);
        const index = cart.products.findIndex(p=> p.product.id == productId)
        if (index === -1) {
            throw new Error('product not found in cart')
        } 
        if(cart.products[index].quantity === 1){
            await this.cartsRepo.pullProductFromCart(cartId, productId)
        } else {
            cart.products[index].quantity --
            await this.cartsRepo.updateCartById(cart)
        }
    }
    async emptyCart(cartId){
        const cart = await this.getCartById(cartId);
        const updatedCart =  new Cart({id: cartId, products:[]})
        await this.cartsRepo.updateCartById(updatedCart.asDto());
    }
};