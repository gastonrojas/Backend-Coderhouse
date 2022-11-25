import { Router } from "express";

import usersController from "../controllers/usersController.js";
import { isLogedIn } from "../middlewares/authMiddlewares.js";
import uploads from '../middlewares/multerMiddleware.js'

const usersRouter = new Router();
// uploads.userAvatar.single('user_avatar')
 //registro de usuarios
usersRouter.post('/api/users', isLogedIn, usersController.register);

//login
usersRouter.post('/login', isLogedIn, usersController.login);

// auth succes
usersRouter.get('/successLogin', usersController.successLogin);
usersRouter.get('/successRegister', usersController.successRegister);

// auth fail
usersRouter.post('/failRegister', usersController.failRegister);
usersRouter.post('/failLogin', usersController.failLogin)

//logout
usersRouter.get('/logout', usersController.logout);


export default usersRouter;