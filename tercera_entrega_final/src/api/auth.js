import bcryptjs from 'bcryptjs';

import users from '../containers/MongodbContainer.js';

const authenticate = async function(username, password) {
    let usuario
    try {
        usuario = await users.getByField({username})
    } catch (error) {
        throw new Error('error de autenticacion')
    }

    if (await bcryptjs.compare(password, usuario.password)) {
        return usuario
    }else{
        throw new Error('error de autenticacion')
    }
}

export default authenticate;