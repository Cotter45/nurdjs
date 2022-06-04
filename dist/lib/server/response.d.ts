/// <reference types="node" />
import { ServerResponse } from 'http';
export declare class Res {
    res: ServerResponse;
    mimeTypes: {
        [key: string]: string;
    };
    headers: {
        [key: string]: string;
    };
    constructor(res: ServerResponse);
    setSecurityHeaders(): this;
    getMimes(): {
        [key: string]: string;
    };
    sendFile(path: string): ServerResponse;
    send(data: any): ServerResponse;
    json(data: any): ServerResponse;
    status(code: number): this;
}
