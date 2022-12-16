export default class Product{
    #id
    #title
    #price
    #thumbnail

    constructor({id, title, price, thumbnail}){
      this.setId(id),
      this.setTitle(title),
      this.setPrice(price),
      this.setThumbnail(thumbnail)
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

    setTitle(title){
        if(!title)throw new Error('campo title es requerido')
        if(typeof(title) != 'string') throw new Error('ingrese un formato valido');
        if(title.length > 50) throw new Error('demaisados caracteres');
        this.#title = title;
    }

    getTitle(){
        return this.#title;
    }


    setPrice(price){
        if(!price) throw new Error('campo price es requerido');
        if(typeof(parseInt(price)) != 'number') throw new Error('ingrese un formato valido');
        if(price < 0) throw new Error("solo se admiten numeros positivos");
        this.#price = price;
    }

    getPrice(){
        return this.#price
    }

    setThumbnail(thumbnail){
        const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
        if(!thumbnail) throw new Error('campo thumbnail es requerido');
        if(!urlRegex.test(thumbnail)) throw new Error("debe ser una url valida");
        this.#thumbnail = thumbnail;
    }

    getThumbnail(){
        return this.#thumbnail;
    }

    asDto(){
        return Object.freeze({
            id: this.#id,
            price: this.#price,
            title: this.#title,
            thumbnail: this.#thumbnail
        })
    }
}