import productsDao from '../persistance/productsDAO.js';
import ProductsRepository from './ProductsRepository.js';
import ProductsService from './ProductsService.js'

const repo = new ProductsRepository(productsDao)

export default new ProductsService(repo);