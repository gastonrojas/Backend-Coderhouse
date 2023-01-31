import {  validateId, validateName, validateImage, validateDescription, validatePrice } from "../utils/validations.js";

export default class Product{
    #setId(id){
        const validated= validateId(id);
        if (!validated) throw new TypeError('id must be type UUID');
        this.#id = validated;
    }
    #id
    #name
    #price
    #description
    #image

    constructor({id, name, price, description, image}){
        this.#setId(id);
        this.setName(name)
        this.setPrice(price);
        this.setDescription(description);
        this.setImage(image);
    };

    setName(name){
        if (!name) throw new Error('STORE_ERROR:name is required')
        const validated = validateName(name);
        if (!validated) throw new Error('STORE_ERRROR:inavalid name')
        this.#name = validated;
    };

    setPrice(price){
        if (!price) throw new Error('STORE_ERROR:price is required');
        const validated = validatePrice(price);
        if (!validated) throw new Error('STORE_ERRROR:inavalid price')
        this.#price = validated;
    };

    setDescription(description){
        if (!description) throw new Error('STORE_ERROR:description is required');
        const validated = validateDescription(description);
        if (!validated) throw new Error('STORE_ERRROR:inavalid description')
        this.#description = validated;
    };

    setImage(image){
        if (!image) throw new Error('REGISTER_ERROR:image is required');
        const validated = validateImage(image);
        if(!validated) throw new Error('REGISTER_ERROR:invalid image');
        this.#image = validated;
    };

    getId(){
        return this.#id;
    }

    getName(){
        return this.#name;
    };

    getDescription(){
        return this.#description;
    };

    getPrice(){
        return this.#price;
    };

    getImage(){
        return this.#image;
    };

    asDto(){
        return Object.freeze({
            id: this.#id,
            name: this.#name,
            description: this.#description,
            price: this.#price,
            image: this.#image,
        });
    };
};