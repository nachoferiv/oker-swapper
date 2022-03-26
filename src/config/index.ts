import dotenv from 'dotenv';

const envFound = dotenv.config()

if (!envFound) {
    throw new Error('Could not find .env file');
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
    port: process.env.PORT || 5000,
    api: {
        prefix: '/api/v1',
    },
    log: {
        level: process.env.LOG_LEVEL,
    },
    swagger: {
        path: '/api-docs',
    },
    okex: {
        basePath: 'https://www.okex.com',
        accessKey: process.env.OKEX_ACCESS_KEY,
        secretKey: process.env.OKEX_SECRET_KEY,
        passphrase: process.env.OKEX_PASSPHRASE,
    },
}