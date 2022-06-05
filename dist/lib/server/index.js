"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const fs_1 = __importDefault(require("fs"));
const http = __importStar(require("http"));
const errors_1 = require("../util/errors");
const parsers_1 = require("../util/parsers");
const response_1 = require("./response");
class Server {
    constructor() {
        this.routers = new Map();
        this.middleware = [];
        this.static = new Map();
    }
    getRouters() {
        return this.routers;
    }
    use(middleware) {
        return this.middleware.push(middleware);
    }
    useStatic(path, directory) {
        if (!path)
            throw new TypeError('Must declare a path.');
        if (!directory)
            throw new TypeError('Must declare a static directory.');
        this.public = directory;
        return this.static.set(path, directory);
    }
    serveStatic(path, res) {
        if (fs_1.default.existsSync(path))
            return res.sendFile(path);
        throw new errors_1.NotFoundError();
    }
    useRouter(path, router) {
        if (this.routers.has(path))
            throw new Error('Route already exists.');
        router.setPath(path);
        return this.routers.set(path, router);
    }
    findRouter(path) {
        if (!this.routers.has(path))
            throw new errors_1.NotFoundError();
        return this.routers.get(path);
    }
    executeMiddleware(middleware, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!middleware.length)
                return false;
            let result = false;
            for (let func of middleware) {
                try {
                    const next = () => __awaiter(this, void 0, void 0, function* () {
                        yield this.executeMiddleware(middleware.slice(middleware.indexOf(func) + 1), req, res);
                        return false;
                    });
                    const response = yield func(req, res, next);
                    if (response)
                        result = true;
                }
                catch (e) {
                    continue;
                }
            }
            return result;
        });
    }
    constructServer() {
        const server = http.createServer((request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                // execute any router specific middleware
                if (this.middleware.length > 0) {
                    const result = yield this.executeMiddleware(this.middleware, request, response);
                    if (result)
                        return;
                }
                const req = yield (0, parsers_1.requestParser)(request);
                const res = new response_1.Res(response);
                if (request.method === "OPTIONS") {
                    response.writeHead(204, res.headers);
                    response.end();
                    return;
                }
                if (this.static.has(req.base)) {
                    const directory = this.static.get(req.base);
                    const filepath = directory + req.url;
                    return this.serveStatic(filepath, res);
                }
                if (res.getMimes()[req.url.split('.')[1]] && fs_1.default.existsSync(this.public + req.url)) {
                    return this.serveStatic(this.public + req.url, res);
                }
                const router = this.findRouter(req.base);
                if (!router)
                    throw new errors_1.NotFoundError();
                return yield router.seekAndExecuteRoute(req, res);
            }
            catch (e) {
                const res = new response_1.Res(response);
                return (0, errors_1.renderError)(e, res);
            }
        }));
        return server;
    }
}
exports.Server = Server;
