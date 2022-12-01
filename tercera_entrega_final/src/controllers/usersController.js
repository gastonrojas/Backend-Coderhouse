import passport from 'passport';

const usersController = {
    register: passport.authenticate('registro', {
        successRedirect: '/auth/successRegister',
        failureRedirect: '/auth/failRegister',
      }),
    login: passport.authenticate('login', {
        successRedirect: '/auth/successLogin',
        failureRedirect: '/auth/failLogin',
    }),

    userInfo(req, res){
      let user = req.user;
      delete user.password;
      delete user.id
      res.status(200).json(user)
    },

    logout(req, res){
        if (req.isAuthenticated()) {
            req.logout((err) => {
              if (err) res.status(500).json(err)
              else res.sendStatus(200);
            });
          } else {
            res.redirect('/api/products');
          }
    },
    successRegister(req, res){
        res.status(201).json(req.user);
    },
    successLogin(req, res){
        res.status(200).json(req.user);
    },
    failRegister(req, res){
        res.status(401).json('Register failed')
    },
    failLogin(req, res){
        res.status(401).json('Login failed')
    }
}

export default usersController