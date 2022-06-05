/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
import { IncomingMessage, ServerResponse } from 'http';
export declare function cookieParser(secret?: string, options?: any): (req: IncomingMessage, res: ServerResponse, next: Function) => any;
