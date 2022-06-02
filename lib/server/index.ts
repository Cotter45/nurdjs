import fs from 'fs';
import * as http from 'http';

import { NotFoundError, renderError } from '../util/errors';
import { requestParser } from '../util/parsers';
import { Response } from './response';

export class Server {
  declare routers: Map<string, Router>;
  declare middleware: Function[];
  declare static: Map<string, string>;
  declare public: string;

  constructor() {
    this.routers = new Map();
    this.middleware = [];
    this.static = new Map();
  }

  getRouters() {
    return this.routers;
  }

  use(middleware: Function) {
    return this.middleware.push(middleware);
  }

  useStatic(path: string, directory: string) {
    if (!path) throw new TypeError('Must declare a path.');
    if (!directory) throw new TypeError('Must declare a static directory.');

    this.public = directory;
    return this.static.set(path, directory);
  }

  serveStatic(path: string, res: Res) {
    if (fs.existsSync(path)) return res.sendFile(path)
    throw new NotFoundError();
  }

  useRouter(path: string, router: Router) {
    if (this.routers.has(path)) throw new Error('Route already exists.');
    router.setPath(path);

    return this.routers.set(path, router);
  }

  findRouter(path: string) {
    if (!this.routers.has(path)) throw new NotFoundError();

    return this.routers.get(path);
  }

  async executeMiddleware(middleware: Function[], req: Req, res: Res): Promise<boolean> {
    if (!middleware.length) return false;
    let result = false;
    
    for (let func of middleware) {      
      try {
        const next = async () => {
          await this.executeMiddleware(middleware.slice(middleware.indexOf(func) + 1), req, res);
          return false;
        }

        const response = await func(req, res, next);
        if (response) result = true;
      } catch (e) {
          continue;
      }
    }
    return result;
  }

  constructServer() {
    const server = http.createServer( async (request: http.IncomingMessage, response: http.ServerResponse) => {
      try {
        const req: Req = await requestParser(request);
        const res: Res = new Response(response);

        res.setSecurityHeaders();

        if (this.static.has(req.base)) {
          const directory = this.static.get(req.base);
          const filepath = directory + req.url;
          return this.serveStatic(filepath, res);
        }
        
        if (res.getMimes()[req.url.split('.')[1]] && fs.existsSync(this.public + req.url)) {
          return this.serveStatic(this.public + req.url, res);
        }

        // execute any server middleware
        if (this.middleware.length > 0) {
          const result = await this.executeMiddleware(this.middleware, req, res)
          if (result) return;
        };

        const router = this.findRouter(req.base);

        if (!router) throw new NotFoundError();
                
        return await router.seekAndExecuteRoute(req, res);
      } catch (e: any) {
        const res: Res = new Response(response);
        return renderError(e, res);
      }
    })

    return server;
  }
}