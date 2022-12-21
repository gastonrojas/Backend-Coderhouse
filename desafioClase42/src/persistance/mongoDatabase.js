import { MongoClient } from 'mongodb';
import mongoConectionStr from '../../config.js'

const mongoClient = new MongoClient(mongoConectionStr)
await mongoClient.connect()
const mongoDatabase = mongoClient.db('ecommerce')

export default mongoDatabase