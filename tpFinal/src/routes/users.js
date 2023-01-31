import { Router } from "express";

import usersController from "../controllers/usersController.js";
import { isLogedIn, auth } from "../middlewares/authMiddlewares.js";


const usersRouter = new Router();

 //registro de usuarios
usersRouter.post('/api/users', isLogedIn, usersController.register);

//login
usersRouter.post('/login', isLogedIn, usersController.login);

//user info
usersRouter.get('/api/users', auth, usersController.userInfo)


export default usersRouter;