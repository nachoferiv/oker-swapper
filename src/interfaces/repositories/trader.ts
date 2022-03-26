export interface ITraderRepository {
    /**
     * 
     * @param {string} pair: represents a pair of instruments (crypto coins). Ex: BTC-USDT
     */
    getOrderBook(pair: String) : object;
}