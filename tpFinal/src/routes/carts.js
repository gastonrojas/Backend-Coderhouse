import { Router } from "express";

import cartsController from "../controllers/cartsController.js";
import { auth } from "../middlewares/authMiddlewares.js";

const cartsRouter = new Router();

cartsRouter.get('/api/shoppingcartproducts', auth ,cartsController.cartProducts);
cartsRouter.post('/api/shoppingcartproducts', auth, cartsController.addProductToCart);

cartsRouter.delete('/api/shoppingcartproducts/:id', auth, cartsController.removeProductFromCart)
export default cartsRouter;