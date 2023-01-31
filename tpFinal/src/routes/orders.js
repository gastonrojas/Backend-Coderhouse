import {Router} from 'express';

import ordersController from '../controllers/ordersController.js'
import { auth, isAdmin } from '../middlewares/authMiddlewares.js';


const ordersRouter = new Router();

ordersRouter.get('/api/orders', auth, ordersController.getAllORders);
ordersRouter.post('/api/orders', auth, ordersController.generateNewOrder);


export default ordersRouter;