import { MongoClient } from '../deps.ts';

const client = new MongoClient();

try {
  await client.connect({
    db: "coderhouse",
    tls: true,
    servers: [
      {
        host: "ac-fud4nf6-shard-00-01.dsxycmp.mongodb.net",
        port: 27017,
      },
      {
        host: "ac-fud4nf6-shard-00-00.dsxycmp.mongodb.net",
        port: 27017,
      },
      {
        host: "ac-fud4nf6-shard-00-02.dsxycmp.mongodb.net",
        port: 27017,
      }
    ],
    credential: {
      username: "gaston",
      password: "eskorbuto",
      db: "ecommerce",
      mechanism: "SCRAM-SHA-1",
    },
  })
  console.log("Base de datos conectada");
} catch (error) {
  console.log(error)
}

const mongoDatabase = client.database('ecommerce');



class MongodbContainer {
  collection: any
  options: any
  constructor(col: string){
    this.collection = mongoDatabase.collection(col)
    this.options = {projection: { _id: 0, __v: 0}}
  };
  async getAll() {
    try {
      return await this.collection.find({}, this.options).toArray()
    } catch (error) {
      throw new Error('error en base de datos')
    }
  };
  async getUserByUsername(username: string){
    try {
      const user = await this.collection.findOne({username}, this.options)
      return user
    } catch (error) {
      throw new Error('error en base de datos')
    }
  }
  
  async getById(id: string){
    try {
      const user = await this.collection.findOne({id}, this.options)
      if (!user) throw new Error('NOT_FOUND: Datos incorrectos. Intente nuevamente.')
      return user
    } catch (error) {
      throw new Error('error en base de datos')
    }
  }
  async save(obj: any) {
    try{
     await this.collection.insertOne(obj);
    }catch(error){
      throw new Error('error en base de datos')
    }
  };
  async updateOneById(id: string, obj: any){
    await this.collection.replaceOne({id}, {id, ...obj})
  };
  async deleteOneById(id: string){
    const deleted = await this.collection.findOneAndDelete({id}, this.options)
    return deleted.value
  };
};

export const productsContainer =  new MongodbContainer('productos')