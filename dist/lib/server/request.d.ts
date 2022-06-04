/// <reference types="node" />
import { IncomingMessage } from "http";
export declare class Request {
    req: IncomingMessage;
    path: string;
    url: string;
    method: string;
    params: Map<any, any>;
    body: unknown;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    searchParams: URLSearchParams;
    username: string;
    constructor(req: IncomingMessage);
}
