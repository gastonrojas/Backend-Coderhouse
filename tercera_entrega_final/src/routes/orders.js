import {Router} from 'express';

import ordersController from '../controllers/ordersController.js'
import { requiresAuth, isAdmin } from '../middlewares/authMiddlewares.js';


const ordersRouter = new Router();

ordersRouter.get('/', requiresAuth, isAdmin, ordersController.getAllORders);
ordersRouter.post('/', requiresAuth, ordersController.generateNewOrder);


export default ordersRouter;