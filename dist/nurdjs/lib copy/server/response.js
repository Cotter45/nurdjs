"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
const fs_1 = __importDefault(require("fs"));
const errors_1 = require("../util/errors");
class Response {
    constructor(res) {
        this.res = res;
        this.mimeTypes = {
            html: 'text/html',
            txt: 'text/plain',
            css: 'text/css',
            gif: 'image/gif',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            png: 'image/png',
            webp: 'image/webp',
            svg: 'image/svg+xml',
            js: 'application/javascript',
            json: 'application/json',
            ico: 'image/x-icon'
        };
        this.headers = {
            "accept-ranges": "bytes",
            "cache-control": "public, max-age=0",
            "connection": "keep-alive",
            "date": Date.now().toString(),
            "etag": "W/\"0-0\"",
            "last-modified": Date.now().toString(),
            "server": "Cowboy",
            "strict-transport-security": "max-age=15552000; includeSubDomains;",
            "x-content-type-options": "nosniff",
            "x-dns-prefetch-control": "off",
            "x-frame-options": "SAMEORIGIN",
            "x-xss-protection": "1; mode=block",
            "x-download-options": "noopen",
            "x-permitted-cross-domain-policies": "none",
            "referrer-policy": "no-referrer",
            "cross-origin-embedder-policy": "require-corp",
            "cross-origin-opener-policy": "require-corp",
            "cross-origin-resource-policy": "same-origin",
        };
    }
    // set security headers
    setSecurityHeaders() {
        Object.keys(this.headers).forEach(header => {
            this.res.setHeader(header, this.headers[header]);
        });
        return this;
    }
    getMimes() {
        return this.mimeTypes;
    }
    sendFile(path) {
        if (typeof path !== 'string')
            throw new TypeError('Path must be a string');
        if (!path || !fs_1.default.existsSync(path))
            throw new errors_1.NotFoundError();
        const file = fs_1.default.readFileSync(path);
        if (this.mimeTypes[path.split('.')[path.split('.').length - 1]]) {
            this.res.setHeader('content-type', this.mimeTypes[path.split('.')[path.split('.').length - 1]] || 'text/plain');
            this.res.write(file);
        }
        return this.res.end();
    }
    send(data) {
        this.res.setHeader('content-type', 'text/plain');
        this.res.write(data);
        return this.res.end();
    }
    json(data) {
        this.res.setHeader('content-type', 'application/json');
        this.res.write(JSON.stringify(data));
        return this.res.end();
    }
    status(code) {
        this.res.statusCode = code;
        return this;
    }
}
exports.Response = Response;
