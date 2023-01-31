import { validateId } from "../utils/validations.js";
import { validateCartProducts } from "../utils/cartProductsValidation.js";

export default class Cart{
    #setId(id) {
        const validated= validateId(id);
        if (!validated) throw new TypeError('id must be type UUID');
        this.#id = validated;
    };
    #id
    #products

    constructor({id, products}){
        this.#setId(id);
        this.setProducts(products);
    }

    setProducts(prods){
        if (!prods) throw new Error ('must conatin field products');
        const validated = validateCartProducts(prods);
        this.#products = validated;
    }

    getId(){
        return this.#id;
    };

    getProducts(){
        return this.#products;
    };

    asDto(){
        return Object.freeze({
            id: this.#id,
            products: this.#products
        })
    }
}