import { createTransport } from "nodemailer";

import { googleAuth, ADMIN_EMAIL} from '../config.js'

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: googleAuth,
});

export const sendNewOrderMailToAdmin = async (userInfo, order) =>{
    const mailOptions = {
        from: 'Ecommerce',
        to: ADMIN_EMAIL,
        subject: `Orden generada con id: ${order.id}. Usuario con id:${userInfo.id}`,
        text: JSON.stringify(order.products, null, 2),
    };
    const info = await transporter.sendMail(mailOptions)
    return info
}

export const sendNewOrderMailToUser = async (userInfo, order) =>{
    const mailOptions = {
        from: 'Ecommerce',
        to: userInfo.email,
        subject: `Hola ${userInfo.name} ${userInfo.lastname}! Genreamos tu con el id: ${order.id}.`,
        text: JSON.stringify(order.products, null, 2),
    };
    const info = await transporter.sendMail(mailOptions)
    return info
}