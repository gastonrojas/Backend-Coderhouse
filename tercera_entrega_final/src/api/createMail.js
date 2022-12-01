import { createTransport } from "nodemailer";

import { googleAuth, ADMIN_MAIL } from '../config.js'



const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: googleAuth,
});



export const sendResgiterMailToAdmin = async (userInfo, mail) =>{
    const mailOptions = {
        from: 'Ecommerce',
        to: mail,
        subject: 'nuevo registro',
        text: JSON.stringify(userInfo, null, 2),
    };
    const info = await transporter.sendMail(mailOptions)
    return info
};


export const sendNewOrderMail = async (userInfo, cart, mail) =>{
    const mailOptions = {
        from: 'Ecommerce',
        to: mail,
        subject: `nuevo pedido de ${userInfo.name} - ${userInfo.username}`,
        text: JSON.stringify(cart.products, null, 2),
    };
    const info = await transporter.sendMail(mailOptions)
    return info
}

