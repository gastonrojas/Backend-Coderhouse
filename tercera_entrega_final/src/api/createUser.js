import bcryptjs from 'bcryptjs';
import { randomUUID } from 'crypto';

import validatePhoneNumber from '../utils/validatePhoneNumber.js';
import validateEmail from '../utils/validateEmail.js';


const createUser = async ({ username, password, name, lastname, phone, adress, image}) => {
    if (!username) throw new Error(`MISSING_ARGS: el campo 'username' es obligatorio`);
    if (!password) throw new Error(`MISSING_ARGS: el campo 'password' es obligatorio`);
    if (!name) throw new Error(`MISSING_ARGS: el campo 'name' es obligatorio`);
    if (!lastname) throw new Error(`MISSING_ARGS: el campo 'lastname' es obligatorio`);
    if (!phone) throw new Error(`MISSING_ARGS: el campo 'phone' es obligatorio`);
    if (!adress) throw new Error(`MISSING_ARGS: el campo 'adress' es obligatorio`);
    if (!image) throw new Error(`MISSING_ARGS: el campo 'image' es obligatorio`);
    if(validatePhoneNumber(phone) === null) throw new Error('ERROR: Debe ingresar un numero de telefono con un formato valido ej: +5491169522578')
    if(validateEmail(username) === null) throw new Error('ERROR: Debe ingresar un email valido. ej: juanita23@gmail.com')
    const encryptedPassword = await bcryptjs.hash(password, 8);
    if (!encryptedPassword) throw new Error('No se pudo guardar los datos, intente nuevamente');
    return {
        id: randomUUID(),
        username,
        password: encryptedPassword,
        name,
        lastname,
        phone,
        adress,
        image,
    };
};

export default createUser;

