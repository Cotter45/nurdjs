import { ServerResponse } from 'http';
import fs from 'fs';
import { NotFoundError } from '../util/errors';

export class Res {

  declare res: ServerResponse;
  declare mimeTypes: {[key: string]: string};
  declare headers: {[key: string]: string};

  constructor(res: ServerResponse) {
    this.res = res;
    this.mimeTypes = {
      html: 'text/html',
      txt: 'text/plain',
      css: 'text/css',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
      svg: 'image/svg+xml',
      js: 'application/javascript',
      json: 'application/json',
      ico: 'image/x-icon'
    };
    this.headers = {
      "accept-ranges": "bytes",
      "cache-control": "public, max-age=0",
      "connection": "keep-alive",
      "date": Date.now().toString(),
      "etag": "W/\"0-0\"",
      "last-modified": Date.now().toString(),
      "server": "Cowboy",
      "strict-transport-security": "max-age=15552000; includeSubDomains;",
      "x-content-type-options": "nosniff",
      "x-dns-prefetch-control": "off",
      "x-frame-options": "SAMEORIGIN",
      "x-xss-protection": "1; mode=block",
      "x-download-options": "noopen",
      "x-permitted-cross-domain-policies": "none",
      "referrer-policy": "no-referrer",
      "cross-origin-embedder-policy": "require-corp",
      "cross-origin-opener-policy": "require-corp",
      "cross-origin-resource-policy": "same-origin",
    };
  }

  // set security headers
  setSecurityHeaders() {
    Object.keys(this.headers).forEach(header => {
      this.res.setHeader(header, this.headers[header]);
    });
    return this;
  }

  getMimes() {
    return this.mimeTypes;
  }

  sendFile(path: string) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string');
    if (!path || !fs.existsSync(path)) throw new NotFoundError();

    const file = fs.readFileSync(path);

    if (this.mimeTypes[path.split('.')[path.split('.').length - 1]]) {
      this.res.setHeader('content-type', this.mimeTypes[path.split('.')[path.split('.').length - 1]] || 'text/plain')
      this.res.write(file);
    }
    return this.res.end();
  }

  send(data: any) {
    this.res.setHeader('content-type', 'text/plain');
    this.res.write(data);
    return this.res.end();
  }

  json(data: any) {
    this.res.setHeader('content-type', 'application/json');
    this.res.write(JSON.stringify(data));
    return this.res.end();
  }

  status(code: number) {
    this.res.statusCode = code;
    return this;
  }
}