import ProductsRoute from "./ProductsRoute.js";
import productsController from '../controllers/productsControllerFactory.js';

const productsRoute = new ProductsRoute(productsController);

const getProductsRoute = productsRoute.router;
export default getProductsRoute;