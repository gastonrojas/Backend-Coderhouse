import bcryptjs from 'bcryptjs';

import User from './User.js';
import { randomUUID } from 'crypto'
import { throws } from 'assert';

export default class UsersService {
    constructor(repo) {
        this.usersRepo = repo
      }
    async registerUser(userData) {
        const isUserRegistered = await this.usersRepo.getUser(userData.username)
        if(isUserRegistered != null) throw new Error("email no disponible para registro")
        userData.password = await bcryptjs.hash(userData.password, 8)
        const user = new User({id: randomUUID(), ...userData});
        await this.usersRepo.storeUser(user.asDto());
        return user.asDto();
    }

    async authenticate(username, password) {
        let user
        try {
            user = await this.usersRepo.getUser(username)
        } catch (error) {
            throw new Error(`error de autenticacion: ${error}`)
        }

        if (await bcryptjs.compare(password, user.getPassword())) {
            return user.asDto()
        }else{
            throw new Error('error de autenticacion')
         }

    }

    async getById(id){
        const user = await this.usersRepo.getById(id)
        return user.asDto()
    }

    async getByUsername(username){
        const user = await this.usersRepo.getUser(username)
        return user.asDto()
    }
}