import axios, { Axios, AxiosInstance, AxiosRequestHeaders } from 'axios';
import Config from '../config';
import CryptoJS from 'crypto-js';
import { ITraderRepository } from '../interfaces/repositories/trader';

class OkexRepository implements ITraderRepository {
    private _basePath: string;
    private _accessKey: string;
    private _secretKey: string;
    private _passphrase: string;

    constructor() {
        this._basePath = Config.okex.basePath;
        this._accessKey = Config.okex.accessKey || '';
        this._secretKey = Config.okex.secretKey || '';
        this._passphrase = Config.okex.passphrase || '';

        if (!this._accessKey || !this._secretKey || !this._passphrase) {
            throw new Error('Okex auth can not be set');
        }
    }

    _getAccessTimestamp() : string {
        return (new Date()).toISOString();
    }

    _getAccessSign(isoTimestamp: string, httpMethod: string, path: string, body: string = '') : string {
        let prehash = body.length == 0 ? isoTimestamp + httpMethod + path + body : isoTimestamp + httpMethod + path;
        return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(prehash, this._secretKey))
    }

    _getAuthHeaders(httpMethod:string, path: string) : object {
        let isoTimestamp = this._getAccessTimestamp();

        return {
                'OK-ACCESS-KEY': this._accessKey,
                'OK-ACCESS-SIGN': this._getAccessSign(isoTimestamp, httpMethod, path),
                'OK-ACCESS-TIMESTAMP': isoTimestamp,
                'OK-ACCESS-PASSPHRASE': this._passphrase,
        }
    }

    async getOrderBook(pair: string) {
        try {
            const instance = axios.create({
                baseURL: `${ this._basePath }`,
            });
            const headers = this._getAuthHeaders('GET', '/api/v5/market/books') as AxiosRequestHeaders;
            const params = {
                instId: pair,
                sz: 100
            };
            const response = await instance.get('/api/v5/market/books', {
                headers,
                params
            });

            return response.data
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default OkexRepository;