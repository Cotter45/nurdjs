"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderError = exports.NotFoundError = exports.BodyError = void 0;
class BodyError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BodyError);
        }
        this.message = this.message || "There was an error with the request body.";
        this.statusCode = 400;
        this.name = "BodyError";
    }
}
exports.BodyError = BodyError;
class NotFoundError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFoundError);
        }
        this.message = this.message || "Not Found";
        this.statusCode = 404;
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
function renderError(error, res) {
    const resBody = { message: error.message };
    return res.status(error.statusCode || 400).json(resBody);
}
exports.renderError = renderError;
