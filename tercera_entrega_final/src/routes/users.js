import { Router } from "express";

import usersController from "../controllers/usersController.js";
import { isLogedIn, requiresAuth } from "../middlewares/authMiddlewares.js";


const usersRouter = new Router();
// uploads.userAvatar.single('user_avatar')

 //registro de usuarios
usersRouter.post('/api/users', isLogedIn, usersController.register);

//login
usersRouter.post('/login', isLogedIn, usersController.login);

//user info
usersRouter.get('/userInfo', requiresAuth, usersController.userInfo)

// auth succes
usersRouter.get('/successLogin', usersController.successLogin);
usersRouter.get('/successRegister', usersController.successRegister);

// auth fail
usersRouter.get('/failRegister', usersController.failRegister);
usersRouter.get('/failLogin', usersController.failLogin)

//logout
usersRouter.get('/logout', usersController.logout);


export default usersRouter;