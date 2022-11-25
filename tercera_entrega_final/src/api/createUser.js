import bcryptjs from 'bcryptjs';
import { randomUUID } from 'crypto';


const createUser = async ({ username, password, name, lastname, phone}) => {
    if (!username) throw new Error(`MISSING_ARGS: el campo 'username' es obligatorio`);
    if (!password) throw new Error(`MISSING_ARGS: el campo 'password' es obligatorio`);
    if (!name) throw new Error(`MISSING_ARGS: el campo 'name' es obligatorio`);
    if (!lastname) throw new Error(`MISSING_ARGS: el campo 'lastname' es obligatorio`);
    if (!phone) throw new Error(`MISSING_ARGS: el campo 'phone' es obligatorio`);

    const encryptedPassword = await bcryptjs.hash(password, 8);
    if (!encryptedPassword) throw new Error('No se pudo guardar los datos, intente nuevamente');
    return {
        id: randomUUID(),
        username,
        password: encryptedPassword,
        name,
        lastname,
        phone,
        image: 'default.jpg'
    };
};

export default createUser;

