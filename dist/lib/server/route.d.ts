export declare class Route {
    path: string;
    method: string;
    paramIndex: number;
    paramName: string | null;
    middleware: Function[];
    callback: Function;
    constructor(path: string, method: string, middleware: Function[], callback: Function);
    constructRoute(): {
        method: string;
        path: string;
        callback: Function;
        middleware: Function[];
    };
}
