/// <reference types="node" />
import { Res } from '../server/response';
interface ServerError extends Error {
    statusCode: number;
}
export declare class BodyError extends Error {
    statusCode: number;
    constructor(...params: any);
}
export declare class NotFoundError extends Error {
    statusCode: number;
    constructor(...params: any);
}
export declare function renderError(error: ServerError | NotFoundError | BodyError, res: Res): import("http").ServerResponse;
export {};
