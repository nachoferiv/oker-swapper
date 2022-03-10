import winston from 'winston';
import config from '../../config';

const transports = [];
const method = process.env.NODE_ENV == 'production' ? new winston.transports.File({filename: 'error.log', level: 'error'}) : new winston.transports.Console();
transports.push(method);

const LoggerInstance = winston.createLogger({
    level: config.log.level,
    format: winston.format.simple(),
    transports
});

export default LoggerInstance;