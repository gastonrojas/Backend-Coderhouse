import jwt from "jsonwebtoken"

import { PRIVATE_KEY } from "../config.js";

export function encryptPassword(data) {
    return new Promise((resolve, reject) => {
        jwt.sign({ data }, PRIVATE_KEY, (error, encoded) => {
            if (error) {
                reject(new Error(error));
            } else {
                resolve(encoded);
            }
        });
    });
}

export function encrypt(data) {
    return new Promise((resolve, reject) => {
        jwt.sign({ data }, PRIVATE_KEY, { expiresIn: '24h' }, (error, encoded) => {
            if (error) {
                reject(new Error(error));
            } else {
                resolve(encoded);
            }
        });
    });
}

export function decrypt(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(decoded.data);
            }
        });
    });
}