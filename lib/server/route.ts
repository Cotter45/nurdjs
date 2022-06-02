import { constructPath } from "../util/parsers";

// this creates a new route which is a child of the router class

export class Route {
  declare path: string;
  declare method: string;
  declare paramIndex: number;
  declare paramName: string | null;
  declare middleware: Function[];
  declare callback: Function;

  constructor(path: string, method: string, middleware: Function[], callback: Function) {
    this.path = constructPath(path);
    this.method = method.toLowerCase();
    this.middleware = middleware;
    this.callback = callback;
    this.paramIndex = path.indexOf(':');
    this.paramName = this.paramIndex >= 0 ? path.substring(this.paramIndex + 1) : null;
  }

  constructRoute() {
    return {
      method: this.method.toLowerCase(),
      path: this.path,
      callback: this.callback,
      middleware: this.middleware
    } 
  }
}