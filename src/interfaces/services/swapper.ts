export default interface ISwapper {
    /**
     * 
     * @param {string} instruments 
     * @param {string} size 
     * @param {string} operation 
     */
    _getBestSwap(instruments: string, size: string, operation: string) : number;
    
    /**
     * 
     * @param {string} tradeID 
     */
    executeSwap(tradeID: string) : number;
}