import { Strategy } from 'passport-local';

import usersService from '../business/usersServiceFactory.js';

export const registroLocal = new Strategy({
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        try {
            const user = await usersService.registerUser(req.body)
            console.log(user)
            done(null, user);
        } catch (error) {
            done(null, false, error);
        }
    });

export const loginLocal = new Strategy(
    async (username, password, done) => {
        try {
            const user = await usersService.authenticate(username, password);
            done(null, user);
        } catch (error) {
            done(null, false, error);
        }
    });