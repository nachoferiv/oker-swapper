import { AbstractOrderBook, AbstractOrderBookValue, AbstractCoinPair } from '../../interfaces/entities/orderBook'

class OrderBook extends AbstractOrderBook{
    constructor(pair: CoinPair, size: string, asks: Array<OrderBookValue>, bids: Array<OrderBookValue>) {
        super(pair, size, asks, bids)
    }

    get asks() { return this._asks }
    get bids() { return this._bids }
}

class CoinPair extends AbstractCoinPair {
    constructor(seller: string, buyer: string){
        super(seller, buyer)
    }

    get key() { return `${this._seller}-${this._buyer}` }
}

class OrderBookValue extends AbstractOrderBookValue {
    constructor(price: number, liquidatedOrders: number, ordersAtPrice: number) {
        super(price, liquidatedOrders, ordersAtPrice)
    }

    get price() { return this._price }
    get liquidatedOrders() { return this._liquidatedOrders }
    get ordersAtPrice() { return this._ordersAtPrice }
}

export {
    OrderBook,
    CoinPair,
    OrderBookValue
}