import { Route } from "./route";
import { Req } from "../util/parsers";
import { Res } from "../server/response";
export declare class Router {
    path: string;
    middleware: Function[];
    routers: Map<string, Router>;
    routes: Map<string, Route>;
    constructor();
    getPath(): string;
    setPath(path: string): string;
    use(middleware: Function): number;
    get(path: string, middleware: Function[] | undefined, callback: Function): Map<string, Route>;
    post(path: string, middleware: Function[] | undefined, callback: Function): Map<string, Route>;
    put(path: string, middleware: Function[] | undefined, callback: Function): Map<string, Route>;
    patch(path: string, middleware: Function[] | undefined, callback: Function): Map<string, Route>;
    delete(path: string, middleware: Function[] | undefined, callback: Function): Map<string, Route>;
    useRouter(path: string, router: Router): Map<string, Router>;
    findRouter(path: string): Router | undefined;
    addRoute(route: Route): Map<string, Route>;
    executeMiddleware(middleware: Function[], req: Req, res: Res): Promise<boolean>;
    seekAndExecuteRoute(req: Req, res: Res, routerPath?: string): Promise<any>;
}
