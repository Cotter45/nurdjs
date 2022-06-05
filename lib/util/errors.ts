import { Res } from '../server/response';

interface ServerError extends Error {
  statusCode: number;
}

export class BodyError extends Error {
  declare statusCode: number;

  constructor(...params: any) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BodyError);
    }

    this.message = this.message || "There was an error with the request body.";
    this.statusCode = 400;
    this.name = "BodyError";
  }
}

export class NotFoundError extends Error {
  declare statusCode: number;

  constructor(...params: any) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    this.message = this.message || "Not Found";
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

export function renderError(error: ServerError | NotFoundError | BodyError, res: Res) {
  const resBody = { message: error.message };
  return res.status(error.statusCode || 400).json(resBody);
}
