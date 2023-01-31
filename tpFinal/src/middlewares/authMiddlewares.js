import { ADMIN_EMAIL } from '../config.js';
import usersService from '../services/usersService/usersServiceFactory.js';


export async function isLogedIn(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return next();
    const access_token = authHeader.split(' ')[1];
    if (!access_token) return next();

    try {
        const user = await usersService.authenticateToken(token);
        if (user) return res.redirect('/api/products')
        next();
    } catch (error) {
        res.status(500).json(error)
    }
  }

export async function isAdmin(req, res, next){
  try {
    if(req.user.email === ADMIN_EMAIL) next()
    else return res.status(403).json('requieres specail privileges');
  } catch (error) {
    return res.status(500).json('Error interno del servidor')
  }
}

export async function auth(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: 'not authenticated'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            error: 'not authenticated'
        });
    }



    try {
        const user = await usersService.authenticateToken(token);
        const {password, ...rest} = user;
        req.user = rest;
        next();
    } catch (error) {
        res.status(401).json({
            error: 'not authenticated'
        });
    }
};