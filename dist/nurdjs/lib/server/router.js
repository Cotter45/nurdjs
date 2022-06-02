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
exports.Router = void 0;
const errors_1 = require("../util/errors");
const route_1 = require("./route");
// this class is used to create new routes and manage existing routes
class Router {
    constructor() {
        this.middleware = [];
        this.routes = new Map();
        this.routers = new Map();
    }
    getPath() {
        return this.path;
    }
    setPath(path) {
        return this.path = path;
    }
    use(middleware) {
        return this.middleware.push(middleware);
    }
    get(path, middleware = [], callback) {
        const route = new route_1.Route(path, 'get', middleware, callback);
        return this.addRoute(route);
    }
    post(path, middleware = [], callback) {
        const route = new route_1.Route(path, 'post', middleware, callback);
        return this.addRoute(route);
    }
    put(path, middleware = [], callback) {
        const route = new route_1.Route(path, 'put', middleware, callback);
        return this.addRoute(route);
    }
    patch(path, middleware = [], callback) {
        const route = new route_1.Route(path, 'patch', middleware, callback);
        return this.addRoute(route);
    }
    delete(path, middleware = [], callback) {
        const route = new route_1.Route(path, 'delete', middleware, callback);
        return this.addRoute(route);
    }
    useRouter(path, router) {
        if (this.routers.has(path))
            throw new Error('Route already exists.');
        return this.routers.set(path, router);
    }
    findRouter(path) {
        if (!this.routers.has(path))
            throw new errors_1.NotFoundError();
        return this.routers.get(path);
    }
    addRoute(route) {
        const { method, path } = route.constructRoute();
        if (this.routes.has(method + path))
            throw new Error('Route already exists.');
        route.path = method + path;
        return this.routes.set(method + path, route);
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
                    if (response) {
                        result = true;
                        break;
                    }
                }
                catch (e) {
                    continue;
                }
            }
            return result;
        });
    }
    seekAndExecuteRoute(req, res, routerPath = '') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { url, method, routePath } = req;
                const path = routerPath ?
                    (method + url.replace(routerPath, '')) :
                    (method + routePath).toLowerCase();
                // execute any router specific middleware
                if (this.middleware.length > 0) {
                    const response = yield this.executeMiddleware(this.middleware, req, res);
                    if (response)
                        return;
                }
                ;
                if (this.routers.has(routePath)) {
                    const router = this.findRouter(routePath);
                    if (!router)
                        throw new errors_1.NotFoundError();
                    yield router.seekAndExecuteRoute(req, res, this.getPath() + routePath);
                }
                else if (this.routers.has(path)) {
                    const router = this.findRouter(routePath);
                    if (!router)
                        throw new errors_1.NotFoundError();
                    yield router.seekAndExecuteRoute(req, res, this.getPath());
                }
                else if (this.routes.has(path)) {
                    const route = this.routes.get(path);
                    if (!route)
                        throw new errors_1.NotFoundError();
                    if (route.middleware.length > 0) {
                        const result = yield this.executeMiddleware(route.middleware, req, res);
                        if (result)
                            return;
                    }
                    ;
                    return yield route.callback(req, res);
                }
                else if (this.routes.has(path.slice(0, path.lastIndexOf('/')))) {
                    const route = this.routes.get(path.slice(0, path.lastIndexOf('/')));
                    if (!route)
                        throw new errors_1.NotFoundError();
                    if (route.paramName) {
                        req.params.set(route.paramName, path.slice(path.lastIndexOf('/') + 1));
                    }
                    if (route.middleware.length > 0) {
                        const result = yield this.executeMiddleware(route.middleware, req, res);
                        if (result)
                            return;
                    }
                    ;
                    return yield route.callback(req, res);
                }
                else {
                    throw new errors_1.NotFoundError();
                }
            }
            catch (e) {
                (0, errors_1.renderError)(e, res);
            }
        });
    }
}
exports.Router = Router;
