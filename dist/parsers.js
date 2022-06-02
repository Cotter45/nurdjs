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
exports.requestParser = exports.bodyParser = void 0;
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
const requestParser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!req.url || !req.method)
        throw new errors_1.NotFoundError();
    const url = req.url.includes(":") ?
        req.url.split(":")[0] :
        req.url;
    return {
        base: "/" + url.split("/")[1] || "/",
        routePath: "/" + url.split("/")[2],
        path: req.method.toLowerCase() + url,
        url,
        method: req.method.toLowerCase(),
        params: (_a = req.url) === null || _a === void 0 ? void 0 : _a.split(":")[1],
        body: yield (0, exports.bodyParser)(req),
    };
});
exports.requestParser = requestParser;
