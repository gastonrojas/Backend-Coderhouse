import db from '../../persistance/db/index.js'
import ProductsRepository from '../../repositories/ProductsRepository.js'
import ProductsService from './ProductsService.js'

const repo = new ProductsRepository(db.products)

export default new ProductsService(repo);