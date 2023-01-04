import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

import productsController from '../controllers/productsController.js';

const schema = buildSchema(`
    input ProductInput {
        title: String
        price: Int
        thumbnail: String
    }

    type Product {
        id: ID!
        title: String
        price: Int
        thumbnail: String
    }    

    type Query {
        getAllProducts: [Product]
        getProductById(id: ID!): Product
    } 

    type Mutation {
        createProduct(input: ProductInput!): Product
        updateProduct(id: ID!, input: ProductInput!): Product
        deleteProduct(id: ID!): Product
    }
`)

const productsRouter = graphqlHTTP({
    schema,
    rootValue: {
        getAllProducts: productsController.getAll,
        getProductById: productsController.getById,
        createProduct: productsController.store,
        updateProduct: productsController.update,
        deleteProduct: productsController.delete
    },
    graphiql: true 
})

export default productsRouter; 
