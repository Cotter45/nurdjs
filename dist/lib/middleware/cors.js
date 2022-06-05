"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
function cors(options) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': 'true'
    };
    if (options) {
        if (typeof options === 'string') {
            headers['Access-Control-Allow-Origin'] = options;
        }
        else if (Array.isArray(options)) {
            headers['Access-Control-Allow-Origin'] = options.join(',');
        }
    }
    return function useCors(req, res, next) {
        for (let header in headers) {
            res.setHeader(header, headers[header]);
        }
        next();
    };
}
exports.cors = cors;
