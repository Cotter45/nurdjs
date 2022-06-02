"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const parsers_1 = require("../util/parsers");
// this creates a new route which is a child of the router class
class Route {
    constructor(path, method, middleware, callback) {
        this.path = (0, parsers_1.constructPath)(path);
        this.method = method.toLowerCase();
        this.middleware = middleware;
        this.callback = callback;
        this.paramIndex = path.indexOf(':');
        this.paramName = this.paramIndex >= 0 ? path.substring(this.paramIndex + 1) : null;
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
