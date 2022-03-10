import express, {Application, Request, Response, NextFunction, application} from 'express';
import logger from '../logger';
import swaggerUi from 'swagger-ui-express';
import config from '../../config';
import ApiError from '../../errors';

class ExpressServer {
    app: Application;
    port: number;
    basePath: string;

    constructor() {
        this.app = express();
        this.port = Number(config.port);
        this.basePath = config.api.prefix;

        this._middlewares();
        this._routes();
    }

    _middlewares() {

    }

    _routes() {
        this.app.head('/status', (req: Request, res: Response) => {
            res.status(200).send()
        })
    }

    _notFound() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            const err = new ApiError('Not found', 404);
            err.code = 404;
            next(err)
        })
    }

    _errorHandler() { 
        this.app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
            const code = err.code || 500;
            logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
            logger.error(err.stack);
            const body = {
                error: {
                    code,
                    message: err.message,
                }
            };

            res.status(code).json(body);
        })
    }

    _swaggerConfig() {
        this.app.use(config.swagger.path, 
        swaggerUi.serve,
        swaggerUi.setup(require('../swagger/swagger.json'))
        );
    }

    async start() {
        this.app.listen(this.port, () => {
            logger.info(`App running at port ${this.port}`)
        })
    }
}

export default ExpressServer;