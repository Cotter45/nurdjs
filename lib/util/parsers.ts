import { IncomingMessage } from "http";

import { BodyError, NotFoundError } from "./errors";

export const bodyParser = (req: IncomingMessage) => {
  return new Promise((resolve, reject) => {
    try {
      let body = '';

      req.on('data', (chunk: any) => {
        body += chunk.toString();
      })

      req.on('end', () => {
        resolve(body);
        if (body && req.headers['content-type'] === "application/json") resolve(JSON.parse(body));
        else resolve({});
      })
    } catch (e) {
      reject(new BodyError(e));
    }
  })
}

export const constructPath = (path: string) => {
  // remove trailing slash
  if (path.endsWith('/')) path = path.slice(0, -1);
  // remove params
  if (path.includes(':')) path = path.split('/:')[0];
  return path;
}

export type Req = {
  base: string;
  path: string;
  routePath: string;
  url: string;
  method: string;
  params: Map<any, any>;
  body: unknown;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  searchParams: URLSearchParams;
  username: string;
  cookies: { [key: string]: string };
}

export const requestParser = async (req: IncomingMessage): Promise<Req> => {
  if (!req.url || !req.method) throw new NotFoundError();

  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = constructPath(url.pathname);

  return {
    ...url,
    base: "/" + (path.split("/")[1] || ""),
    routePath: "/" + (path.split("/")[2] || ""),
    path: req.method.toLowerCase() + path,
    url: url.pathname,
    method: req.method.toLowerCase(),
    params: new Map(),
    body: await bodyParser(req),
    // @ts-ignore
    cookies: req.cookies,
  }
}