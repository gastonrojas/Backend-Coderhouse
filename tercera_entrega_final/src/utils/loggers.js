import pino from 'pino';

export const logger = pino();
export const fileLogger = pino('logs/error.log');