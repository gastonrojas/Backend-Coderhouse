import { MongoClient } from 'mongodb';
import { mongoUrl } from '../../config/config'

const mongoClient = new MongoClient(mongoUrl)

async function connectMongo(){
    try {
        await mongoClient.connect()
    } catch (error) {
        console.log(error)
    }
}

connectMongo();

const mongoDatabase = mongoClient.db('ecommerce')

export default mongoDatabase