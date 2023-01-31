import { validateEmail, validateId, validatePassword, validateName, validateImage } from "../utils/validations.js"

export default class User{
    #setId(id) {
        const validated= validateId(id);
        if (!validated) throw new TypeError('id must be type UUID');
        this.#id = validated;
    };
    #id
    #email
    #password
    #name
    #lastname
    #image

    constructor({id, email, password, name, lastname, image}){
        this.#setId(id);
        this.setEmail(email)
        this.setPassword(password)
        this.setName(name)
        this.setLastname(lastname);
        this.setImage(image);
    };
   
    setEmail(email){
        if (!email) throw new Error('REGISTER_ERROR:email is required');
        const validated = validateEmail(email);
        if(!validated) throw new Error('REGISTER_ERROR:invalid email');
        this.#email = validated;
    };

    setPassword(password){
        if (!password) throw new Error('REGISTER_ERROR:password is required');
        const validated = validatePassword(password);
        if(!validated) throw new Error('REGISTER_ERROR:invalid password');
        this.#password = validated

    };

    setName(name){
        if (!name) throw new Error('REGISTER_ERROR:name is required');
        const validated = validateName(name);
        if(!validated) throw new Error('REGISTER_ERROR:invalid name');
        this.#name = validated;
    }

    setLastname(lastname){
        if (!lastname) throw new Error('REGISTER_ERROR:lastname is required');
        const validated = validateName(lastname);
        if(!validated) throw new Error('REGISTER_ERROR:invalid lastname');
        this.#lastname = validated;
    }

    setImage(image){
        if (!image) throw new Error('REGISTER_ERROR:image is required');
        const validated = validateImage(image);
        if(!validated) throw new Error('REGISTER_ERROR:invalid image');
        this.#image = validated;
    }

    getId(){
        return this.#id;
    };

    getEmail(){
        return this.#email;
    };

    getPassword(){
        return this.#password;
    };

    getName(){
        return this.#name;
    };

    getLastname(){
        return this.#lastname
    }
    getImage(){
        return this.#image
    }

    asDto(){
        return Object.freeze({
            id: this.#id,
            email: this.#email,
            password: this.#password,
            name: this.#name,
            lastname: this.#lastname,
            image: this.#image
        });
    };
};