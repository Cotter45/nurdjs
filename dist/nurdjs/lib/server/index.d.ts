/// <reference types="node" />
import * as http from 'http';
import { Router } from './router';
import { Response as Res } from './response';
import { requestParser as Req } from '../util/parsers';
export declare class Server {
    routers: Map<string, Router>;
    middleware: Function[];
    static: Map<string, string>;
    public: string;
    constructor();
    getRouters(): Map<string, Router>;
    use(middleware: Function): number;
    useStatic(path: string, directory: string): Map<string, string>;
    serveStatic(path: string, res: Res): any;
    useRouter(path: string, router: Router): Map<string, Router>;
    findRouter(path: string): Router | undefined;
    executeMiddleware(middleware: Function[], req: typeof Req, res: Res): Promise<boolean>;
    constructServer(): http.Server;
}
