import { Router } from 'express';
import okexController from '../controllers/okex';

const OkexRouter = Router();

OkexRouter.get('/order_books', okexController.orderBooks)

export default OkexRouter