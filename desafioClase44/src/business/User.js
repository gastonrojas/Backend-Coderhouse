export default class User{
    #id
    #username
    #password
    constructor({id, username, password}){
        this.setId(id)
        this.setUsername(username);
        this.setPassword(password);
    }
    setId(id){
        const UUIDregex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
        if(!id) throw new Error('campo id es requerido');
        if(id.length != 36) throw new Error('error al generar id');
        if(!UUIDregex.test(id)) throw new Error('error al generar id');
        this.#id = id;
    }

    getId(){
        return this.#id
    }

    setUsername(username){
        if(!username) throw new Error("debe ingresar un email valido");
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-ñ]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if(!emailRegex.test(username)) throw new Error("formato de email invalido")
        this.#username = username;
    }
    getUsername(){
        return this.#username
    }
    setPassword(password){
        if(!password) throw new Error('debe ingresar una clave')
        this.#password = password
    }
    getPassword(){
        return this.#password
    }
    asDto(){
        return Object.freeze({
            id: this.#id,
            username: this.#username,
            password: this.#password
        })
    }
}
