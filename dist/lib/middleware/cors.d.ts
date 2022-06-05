import { IncomingMessage, ServerResponse } from "http";
export declare function cors(options?: string | string[]): (req: IncomingMessage, res: ServerResponse, next: Function) => void;
