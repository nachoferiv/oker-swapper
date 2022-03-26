abstract class AbstractOrderBook {
    protected _instruments: AbstractCoinPair
    protected _size: string
    protected _asks: Array<AbstractOrderBookValue>
    protected _bids: Array<AbstractOrderBookValue>

    constructor(instruments: AbstractCoinPair, size: string, asks: Array<AbstractOrderBookValue>, bids: Array<AbstractOrderBookValue>) {
        this._instruments = instruments;
        this._size = size;
        this._asks = asks;
        this._bids = bids;
    }
}

abstract class AbstractOrderBookValue {
    protected _price: number;
    protected _liquidatedOrders: number;
    protected _ordersAtPrice: number;

    constructor(price: number, liquidatedOrders: number, ordersAtPrice: number) {
        this._price = price;
        this._liquidatedOrders = liquidatedOrders;
        this._ordersAtPrice = ordersAtPrice;
    }
}

abstract class AbstractCoinPair {
    protected _seller: string
    protected _buyer: string

    constructor(seller: string, buyer: string) {
        this._seller = seller.toUpperCase()
        this._buyer = buyer.toUpperCase()
    }
}

export {
    AbstractOrderBook,
    AbstractOrderBookValue,
    AbstractCoinPair
}