import productsApi from '../business/productsServiceFactory.js'
import ProductsController from './productsController.js'

const productController = new ProductsController(productsApi);
export default productController
