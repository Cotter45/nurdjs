import { NotFoundError, renderError } from "../util/errors";
import { Route } from "./route";

// this class is used to create new routes and manage existing routes
export class Router {
  // path the router falls under
  declare path: string;
  // array of functions to run before finding route ( auth, setheaders )
  declare middleware: Function[];
  // map of nested routers
  declare routers: Map<string, Router>;
  // map of routes, will run any route middleware before route callback
  declare routes: Map<string, Route>;

  constructor() {
    this.middleware = [];
    this.routes = new Map();
    this.routers = new Map();
  }

  getPath() {
    return this.path;
  }

  setPath(path: string) {
    return this.path = path;
  }

  use(middleware: Function) {
    return this.middleware.push(middleware);
  }

  get(path: string, middleware: Function[] = [], callback: Function) {
    const route = new Route(path, 'get', middleware, callback);
    return this.addRoute(route);
  }

  post(path: string, middleware: Function[] = [], callback: Function) {
    const route = new Route(path, 'post', middleware, callback);
    return this.addRoute(route);
  }

  put(path: string, middleware: Function[] = [], callback: Function) {
    const route = new Route(path, 'put', middleware, callback);
    return this.addRoute(route);
  }

  patch(path: string, middleware: Function[] = [], callback: Function) {
    const route = new Route(path, 'patch', middleware, callback);
    return this.addRoute(route);
  }

  delete(path: string, middleware: Function[] = [], callback: Function) {
    const route = new Route(path, 'delete', middleware, callback);
    return this.addRoute(route);
  }

  useRouter(path: string, router: Router) {
    if (this.routers.has(path)) throw new Error('Route already exists.');

    return this.routers.set(path, router);
  }

  findRouter(path: string) {
    if (!this.routers.has(path)) throw new NotFoundError();

    return this.routers.get(path);
  }

  addRoute(route: Route) {
    const {method, path} = route.constructRoute();

    if (this.routes.has(method + path)) throw new Error('Route already exists.');

    route.path = method + path;

    return this.routes.set(
      method + path, 
      route
    );
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

  async seekAndExecuteRoute(req: Req, res: Res, routerPath: string = '') {

    try {
      const { url, method, routePath } = req;
      const path = routerPath ? 
        (method + url.replace(routerPath, '')) :
        (method + routePath).toLowerCase();

      // execute any router specific middleware
      if (this.middleware.length > 0) {
        const response = await this.executeMiddleware(this.middleware, req, res)
        if (response) return;
      };

      if (this.routers.has(routePath)) {
        
        const router = this.findRouter(routePath);

        if (!router) throw new NotFoundError();
        
        await router.seekAndExecuteRoute(req, res, this.getPath() + routePath);
      }

      else if (this.routers.has(path)) {
        
        const router = this.findRouter(routePath);

        if (!router) throw new NotFoundError();
        
        await router.seekAndExecuteRoute(req, res, this.getPath());
      }

      else if (this.routes.has(path)) {

        const route = this.routes.get(path);
      
        if (!route) throw new NotFoundError();

        if (route.middleware.length > 0) {
          const result = await this.executeMiddleware(route.middleware, req, res);
          if (result) return;
        };
        return await route.callback(req, res);
      }

      // else if (this.routes.has(path + "/")) {

      //   const route = this.routes.get(path + "/");
      
      //   if (!route) throw new NotFoundError();

      //   if (route.middleware.length > 0) {
      //     const result = await this.executeMiddleware(route.middleware, req, res);
      //     if (result) return;
      //   };
      //   return await route.callback(req, res);
      // }
      
      else if (this.routes.has(path.slice(0, path.lastIndexOf('/')))) {
        
        const route = this.routes.get(path.slice(0, path.lastIndexOf('/')))

        if (!route) throw new NotFoundError();
        
        if (route.paramName) {
          req.params.set(route.paramName, path.slice(path.lastIndexOf('/') + 1));
        }
  
        if (route.middleware.length > 0) {
          const result = await this.executeMiddleware(route.middleware, req, res);
          if (result) return;
        };
        return await route.callback(req, res);
      }
      
      else {
        throw new NotFoundError();
      }
    
    } catch (e: any) {
        renderError(e, res);
    }
  }
}
