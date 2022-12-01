import { Router } from "express";

import productsController from '../controllers/productsController.js'
import { requiresAuth, isAdmin } from "../middlewares/authMiddlewares.js";

const productsRoute = new Router();
// uploads.productImage.single('product_image')

productsRoute.get('/', productsController.products);
productsRoute.get('/:id', productsController.detail);
productsRoute.post('/', requiresAuth, isAdmin, productsController.store);
productsRoute.put('/:id', requiresAuth, isAdmin, productsController.update);
productsRoute.delete('/:id', requiresAuth, isAdmin, productsController.delete);

export default productsRoute;