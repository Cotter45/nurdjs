/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/*!
 * cookie-parser
 * Copyright(c) 2014 TJ Holowaychuk
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */


import crypto from 'crypto';
import { IncomingMessage, ServerResponse } from 'http';

const decode = decodeURIComponent;
const pairSplitRegExp = /; */;

function parse(str: string, options: any) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  const obj: {[key: string]: string} = {}
  const opt = options || {};
  const pairs = str.split(pairSplitRegExp);
  const dec = opt.decode || decode;

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    let eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    let key = pair.slice(0, ++eq_idx - 1).trim();
    let val = pair.slice(++eq_idx - 1, pair.length);

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

function tryDecode(str: string, decode: any) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

function sha1(str: string) {
  return crypto.createHash('sha1').update(str).digest('hex')
}

function sign(value: string, secret: string) {
  if (typeof value !== 'string') {
    throw new TypeError('value must be a string')
  }
  if (typeof secret !== 'string') {
    throw new TypeError('secret must be a string')
  }

  return value + '.' + crypto
    .createHmac('sha256', secret)
    .update(value)
    .digest('base64')
    .replace(/=+$/, '')
}

function unsign(value: string, secret: string) {
  if (typeof value !== 'string') {
    throw new TypeError('value must be a string')
  }
  if (typeof secret !== 'string') {
    throw new TypeError('secret must be a string')
  }

  const str = value.slice(0, value.lastIndexOf('.'));
  const mac = sign(str, secret);

  return sha1(mac) == sha1(value) ? str : false;
}

export function cookieParser (secret?: string, options?: any) {
  const secrets = !secret || Array.isArray(secret)
    ? (secret || [])
    : [secret]

  return function cookieParser (req: IncomingMessage, res: ServerResponse, next: Function) {
    // @ts-ignore
    if (req.cookies) {
      return next()
    }

    const cookies = req.headers.cookie

    // @ts-ignore
    req.secret = secrets[0]
    // @ts-ignore
    req.cookies = Object.create(null)
    // @ts-ignore
    req.signedCookies = Object.create(null)

    // no cookies
    if (!cookies) {
      return next()
    }

    // @ts-ignore
    req.cookies = parse(cookies, options)

    // parse signed cookies
    if (secrets.length !== 0) {
      // @ts-ignore
      req.signedCookies = signedCookies(req.cookies, secrets)
      // @ts-ignore
      req.signedCookies = JSONCookies(req.signedCookies)
    }
    
    // parse JSON cookies
    // @ts-ignore
    req.cookies = JSONCookies(req.cookies)

    next()
  }
}

function JSONCookie (str: string) {
  if (typeof str !== 'string' || str.substr(0, 2) !== 'j:') {
    return undefined
  }

  try {
    return JSON.parse(str.slice(2))
  } catch (err) {
    return undefined
  }
}


function JSONCookies (obj: {[key: string]: string}) {
  const cookies = Object.keys(obj);
  let key;
  let val;

  for (let i = 0; i < cookies.length; i++) {
    key = cookies[i]
    val = JSONCookie(obj[key])

    if (val) {
      obj[key] = val
    }
  }

  return obj
}

function signedCookie (str: string, secret: string) {
  if (typeof str !== 'string') {
    return undefined
  }

  if (str.slice(0, 2) !== 's:') {
    return str
  }

  const secrets = !secret || Array.isArray(secret)
    ? (secret || [])
    : [secret]

  for (let i = 0; i < secrets.length; i++) {
    const val = unsign(str.slice(2), secrets[i])

    if (val !== false) {
      return val
    }
  }

  return false
}

function signedCookies (obj: {[key: string]: string}, secret: string) {
  const cookies = Object.keys(obj)
  let dec
  let key
  const ret = Object.create(null)
  let val

  for (let i = 0; i < cookies.length; i++) {
    key = cookies[i]
    val = obj[key]
    dec = signedCookie(val, secret)

    if (val !== dec) {
      ret[key] = dec
      delete obj[key]
    }
  }

  return ret
}
