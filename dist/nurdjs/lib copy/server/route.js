"use strict";
// this creates a new route which is a child of the router class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, method, middleware, callback) {
        this.path = path;
        this.method = method.toLowerCase();
        this.middleware = middleware;
        this.callback = callback;
    }
    constructRoute() {
        return {
            method: this.method.toLowerCase(),
            path: this.path,
            callback: this.callback,
            middleware: this.middleware
        };
    }
}
exports.Route = Route;
