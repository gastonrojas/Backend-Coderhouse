import usersService from "../services/usersService/usersServiceFactory.js";
const usersController = {

    async login(req, res){
      const {email, password} = req.body;

      try {
        const authenticated = await usersService.loginUser(email, password)
        if (!authenticated) return res.status(400).json('invalid credentials')
        res.status(200).json({access_token: authenticated})
      } catch (error) {
        res.status(500).json(`login failed: ${error}`);
      }
    },

    async register(req, res){
      try {
        const {email, password, name, lastname, image} = req.body;
        const newUser = await usersService.registerUser({ email, password, name, lastname, image });
        res.status(201).json({access_token: newUser});
      } catch (error) {
        const errorSplit = error.message.split(':')
        if (errorSplit[0] == 'REGISTER_ERROR') return res.status(400).json(`registration failed: ${errorSplit[1]}`)
        res.status(500).json(`registration failed: ${error}`)
      }
    },

    userInfo(req, res){
      // No se reliza una nueva consulta a la db ya que se realizo en la autenticacion con jwt
      res.status(200).json(req.user)
    },
}

export default usersController