import db from '../../persistance/db/index.js'
import CartsRepository from '../../repositories/CartsRepository.js'
import CartsService from './CartsService.js'

const repo = new CartsRepository(db.carts)

export default new CartsService(repo);