const { default: knex } = require('knex');
const options = require('./options');

const clienteMysql = require('knex')(options);

class Contenedor {
  constructor(client) {
    this.client = client;
    this.createTable()
  }

  createTable = async () => {
    try {
      const isProducts = await this.client.schema.hasTable('products');
      if (isProducts) {
        console.log('tabla de productos existe');
      } else {
        await this.client.schema.createTable('products', (tabla) => {
          tabla.increments('id');
          tabla.string('title');
          tabla.integer('price');
          tabla.string('thumbnail');
        });
        console.log('tabla de productos creada');
      }

    } catch (error) {
      console.log(error);
    }
  };

  getAll = async () => {
    try {
      const products = await this.client.select('*').from('products')

      return products
      return 
    } catch (error) {
      console.log(error)
    }
  }
  save = async (obj) => {
   await this.client.insert({title: obj.title, price: obj.price, thumbnail: obj.thumbnail}).into('products')
  
  }


}
const products = new Contenedor(clienteMysql);


module.exports = products
