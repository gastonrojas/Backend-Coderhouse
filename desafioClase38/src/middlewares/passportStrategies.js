import { Strategy } from 'passport-local';

import usersService from '../services/UsersService.js'

export const registroLocal = new Strategy({
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        try {
            await usersService.registerUser(req.body)
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    });

export const loginLocal = new Strategy(
    async (username, password, done) => {
        try {
            const usuario = await autenticar(username, password);
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    });