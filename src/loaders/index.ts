import ExpressServer from './server';
import logger from './logger';

const AppLoader = async() => {
    const server = new ExpressServer();
    server.start();
}

export default AppLoader;