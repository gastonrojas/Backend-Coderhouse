import { Strategy } from 'passport-local';

import ensureUniqueEmail from '../utils/ensureUniqueEmail.js';
import authenticate from '../api/auth.js';
import createUser from '../api/createUser.js';
import users from '../containers/MongodbContainer.js';
import { carts } from '../containers/MongodbContainer.js';
import createCart from '../api/createCart.js';
import { sendResgiterMailToAdmin } from '../api/createMail.js'
import { ADMIN_MAIL } from '../config.js'


export const registroLocal = new Strategy({
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        try {
            await ensureUniqueEmail(username);
            const user = await createUser({...req.body});
            await users.save(user);
            const userCart = createCart(user.id);
            const mailSent = await sendResgiterMailToAdmin(user, ADMIN_MAIL);
            await carts.save(userCart);

            done(null, user);

        } catch (error) {
            done(null, false, error);
        }
    });

export const loginLocal = new Strategy(
    async (username, password, done) => {
        try {   
            const user = await authenticate(username, password);
            done(null, user);
        } catch (error) {
            done(null, false, error);
        }
    });