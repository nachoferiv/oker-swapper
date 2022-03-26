import {Request, Response, NextFunction} from 'express'
import OkexGetOrderBooksService from '../services/okexGetOrderBooksService';

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next
 */
const orderBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const okexService = new OkexGetOrderBooksService();
    const takerVolumes = await okexService.getOrderBooks();
    res.json(takerVolumes)
  } catch (error) {
    next(error)
  }
}

export default {
  orderBooks
}