"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestParser = exports.constructPath = exports.bodyParser = void 0;
const errors_1 = require("./errors");
const bodyParser = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                resolve(body);
                if (body && req.headers['content-type'] === "application/json")
                    resolve(JSON.parse(body));
                else
                    resolve({});
            });
        }
        catch (e) {
            reject(new errors_1.BodyError(e));
        }
    });
};
exports.bodyParser = bodyParser;
const constructPath = (path) => {
    // remove trailing slash
    if (path.endsWith('/'))
        path = path.slice(0, -1);
    // remove params
    if (path.includes(':'))
        path = path.split('/:')[0];
    return path;
};
exports.constructPath = constructPath;
const requestParser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.url || !req.method)
        throw new errors_1.NotFoundError();
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = (0, exports.constructPath)(url.pathname);
    return Object.assign(Object.assign({}, url), { base: "/" + (path.split("/")[1] || ""), routePath: "/" + (path.split("/")[2] || ""), path: req.method.toLowerCase() + path, url: url.pathname, method: req.method.toLowerCase(), params: new Map(), body: yield (0, exports.bodyParser)(req), 
        // @ts-ignore
        cookies: req.cookies });
});
exports.requestParser = requestParser;
