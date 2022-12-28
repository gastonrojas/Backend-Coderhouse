import passport from 'passport';

import * as strategies from './passportStrategies.js';
import usersService from '../business/usersServiceFactory.js';

passport.use('registro', strategies.registroLocal);
passport.use('login', strategies.loginLocal);

export const passportMiddleware = passport.initialize();

passport.serializeUser((user, done) => {
  // console.log(user)
  // usersService.getByUsername(user.getUsername())
  done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
  try {
    const user = await usersService.getById(id);

    if (!user){
        done(null, false)
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export const passportSessionHandler = passport.session();
