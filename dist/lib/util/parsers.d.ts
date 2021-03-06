import { IncomingMessage } from "http";
export declare const bodyParser: (req: IncomingMessage) => Promise<unknown>;
export declare const constructPath: (path: string) => string;
export declare type Req = {
    base: string;
    path: string;
    routePath: string;
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
    cookies: {
        [key: string]: string;
    };
};
export declare const requestParser: (req: IncomingMessage) => Promise<Req>;
