import { Router } from "express";

import productsController from '../controllers/productsController.js'
import { auth, isAdmin } from "../middlewares/authMiddlewares.js";

const productsRoute = new Router();
// uploads.productImage.single('product_image')

productsRoute.get('/api/products', productsController.products);
productsRoute.get('/api/products/:id', productsController.detail);
productsRoute.post('/api/products', auth, isAdmin, productsController.store);
productsRoute.put('/api/products/:id', auth, isAdmin, productsController.update);
productsRoute.delete('/api/products/:id', auth, isAdmin, productsController.delete);

export default productsRoute;