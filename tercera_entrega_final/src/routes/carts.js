import { Router } from "express";

import cartsController from "../controllers/cartsController.js";
import { requiresAuth } from "../middlewares/authMiddlewares.js";

const cartsRouter = new Router();

cartsRouter.get('/', requiresAuth ,cartsController.cartProducts);
cartsRouter.post('/', requiresAuth, cartsController.addProductToCart);

cartsRouter.delete('/:id', requiresAuth, cartsController.removeProductFromCart)
export default cartsRouter;