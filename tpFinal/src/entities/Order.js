import { validateId } from "../utils/validations.js";
import { validateCartProducts } from "../utils/cartProductsValidation.js";

export default class Order{
    #setId(id) {
        const validated= validateId(id);
        if (!validated) throw new TypeError('id must be type UUID');
        this.#id = validated;
    };
    #setClientId(id) {
        const validated= validateId(id);
        if (!validated) throw new TypeError('id must be type UUID');
        this.#clientId = validated;
    };
    #id
    #clientId
    #date
    #products
    constructor({id, clientId, date, products}){
        this.#setId(id)
        this.#setClientId(clientId)
        this.setDate(date)
        this.setProducts(products)
    }

    setDate(date){
        if (typeof date != 'number') throw new Error('invalid date')
        this.#date = date
    }

    setProducts(prods){
        if (!prods) throw new Error ('cart is empty!');
        const validated = validateCartProducts(prods);
        this.#products = validated;
    }

    getId(){
        return this.#id
    }
    getClientId(){
        return this.#clientId
    }
    getDate(){
        return this.#date
    }
    getProducts(){
        return this.#products
    }

    asDto(){
        return Object.freeze({
            id: this.#id,
            clientId: this.#clientId,
            date: this.#date,
            products: this.#products,
        })
    }
}