import bcryptjs from 'bcryptjs';

import { ensureUniqueName } from '../api/user.js';
import { createUser } from '../models/user.js';
import users from "../containers/MongodbContainer.js"

class UsersService {
    constructor() {}
    async registerUser(userData) {
        await ensureUniqueName(userData.username)
        const usuario = await createUser(userData)
        await users.save(usuario);
    }

    async authenticate(username, password) {
    let user
    try {
        user = await users.getUserbyUsername(username)
    } catch (error) {
        throw new Error('error de autenticacion')
    }

    if (await bcryptjs.compare(password, user.password)) {
        return user
    }else{
        throw new Error('error de autenticacion')
    }
}
}
export default new UsersService()