import ISwapper from '../interfaces/services/swapper'

class Swapper implements ISwapper {

    constructor() {

    }

    _getBestSwap(instruments: string, size: string, operation: string): number {
        let value = 10

        return value;
    }

    executeSwap(tradeID: string): number {
        let id = 10

        return id;
    }
}