import { randomUUID } from 'crypto';

import cartsService from '../cartsService/cartsServiceFactory.js';
import User from "../../entities/User.js";
import { encrypt, decrypt, encryptPassword } from "../../utils/jwt.js";

export default class UsersService {
    constructor(repo) {
        this.usersRepo = repo
      }

      async loginUser(email, password){
        try {
            const user = await this.usersRepo.getUserByEmail(email);
            if (!user) return false;
            if (password == await decrypt(user.getPassword())) return await encrypt(user.getId());
            return false;
        } catch (error) {
            throw new Error('Internal Error')
        }
      }

      async registerUser(userData){
        try {
          userData.password = await encryptPassword(userData.password)
          const user = new User({id: randomUUID(), ...userData});
          const userExists = await this.usersRepo.getUserByEmail(user.getEmail())
          if (userExists) throw new Error('REGISTER_ERROR:email already in use')
          this.usersRepo.storeUser(user.asDto())
          cartsService.createCart(user.getId())
          return await encrypt(user.getId())
        } catch (error) {
          throw new Error(error.message)
        }
      }

      async authenticateToken(token){
            try {
              const id = await decrypt(token)
              const user = await this.usersRepo.getUserByid(id);
              return user.asDto();
            } catch (error) {
              console.log(error)
            }
      }
}