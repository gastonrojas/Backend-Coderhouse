export default class Message {
    #id
    #email
    #nombre
    #apellido
    #edad
    #alias
    #avatar
    #date
    #text
    // #setId
    

    constructor({
      id,
      email,
      nombre,
      apellido,
      edad,
      alias, 
      avatar, 
      date,
      text
    }){
      this.setId(id)
      this.setEmail(email)
      this.setNombre(nombre),
      this.setApellido(apellido),
      this.setEdad(edad),
      this.setAlias(alias),
      this.setAvatar(avatar),
      this.setDate(date)
      this.setText(text)
    }

    
    setId (id) {
      const UUIDregex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
      if(!id) throw new Error('campo id es requerido');
      if(id.length != 36) throw new Error('error al generar id');
      if(!UUIDregex.test(id)) throw new Error('error al generar id');
      this.#id = id;
    }

    get id(){
      return this.#id
    }

    // obj.setNombre(nombre)
    // obj.nombre = nombre

    setNombre(nombre){
      if(!nombre) throw new Error('campo nombre es requerido');
      if(typeof(nombre) != 'string') throw new Error('ingrese un formato valido');
      if(nombre.length > 50) throw new Error('demaisados caracteres');
      this.#nombre = nombre.toLowerCase();
    }

    setEmail(email){
      const validRegex = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
    }

    getNombre(){
        return this.#nombre;
    }
    setApellido(apellido){
        if(!apellido) throw new Error('campo apellido es requerido');
        if(typeof(apellido) != 'string') throw new Error('ingrese un formato valido');
        if(apellido.length > 50) throw new Error('demaisados caracteres');
        this.#apellido = apellido.toLowerCase();
      }
      getApellido(){
          return this.#apellido;
      }
      setEdad(edad){
        if(!edad) throw new Error('campo edad es requerido');
        if(typeof(parseInt(edad)) != 'number') throw new Error('ingrese un formato valido');
        if (edad < 18) throw new Error('debe ser mayor que 18');
        if (edad > 122) throw new Error('ingrese una edad vaida');
        this.#edad = edad;
      }
      getEdad(){
        return this.#edad
      }
      setAlias(alias){
        if(!alias) throw new Error('campo edad es requerido');
        if(typeof(alias) != 'string') throw new Error('ingrese un formato valido');
        if(alias.length > 50) throw new Error('demaisados caracteres');
        this.#alias = alias;
      }
      getAlias(){
        return this.#alias;
      }
      setAvatar(avatar){
        if(!avatar) throw new Error('campo edad es requerido');
        if(typeof(avatar) != 'string') throw new Error('ingrese un formato valido');
        this.#avatar = avatar;
      }
      getAvatar(){
        return this.#avatar;
      }
      setDate(date){
        if(!date) throw new Error('campo date requerido')
        this.#date = date
      }
      getDate(){
        return this.#date
      }
      setText(text){
        if(!text) throw new Error ('debe ingresar un mensaje')
        this.#text = text
      }
      getText(){
        return this.#text
      }

      asDto(){
        return Object.freeze({
             id: this.#id,
             nombre: this.#nombre,
             apellido: this.#apellido,
             edad: this.#edad,
             alias: this.#alias,
             avatar: this.#avatar,
             date: this.#date,
             text: this.#text
        });
      };
  }