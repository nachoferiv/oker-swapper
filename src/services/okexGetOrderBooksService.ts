import OkexRepository from '../repositories/okexRepository';

class OkexGetOrderBooksService {

    getOrderBooks = async() => {
        let okx = new OkexRepository();
        return okx.getOrderBook('BTC-USDT');
    }
}

export default OkexGetOrderBooksService