import { IncomingMessage, ServerResponse } from "http";


export function cors(options?: string | string[]) {
    const headers: {[key: string]: string} = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true'
    };

    if (options) {
      if (typeof options === 'string') {
        headers['Access-Control-Allow-Origin'] = options;
      } else if (Array.isArray(options)) {
        headers['Access-Control-Allow-Origin'] = options.join(',');
      }
    }

    return function useCors(req: IncomingMessage, res: ServerResponse, next: Function) {
      for (let header in headers) {
        res.setHeader(header, headers[header]);
      }
      next();
    }
}