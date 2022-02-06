import { LambdaResponse } from '../protocols';
import { ServerError, BadRequestError } from '../errors';

export const badRequest = (error: any): LambdaResponse => {
  const _error = new BadRequestError(error.stack);
  return {
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: 400,
    body: JSON.stringify({
      name: _error.name,
      message: _error.message,
    }),
  };
};

export const serverError = (error: Error): LambdaResponse => {
  const _error = new ServerError(error.stack);
  return {
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: 500,
    body: JSON.stringify({
      name: _error.name,
      stack: _error.stack,
      message: _error.message,
    }),
  };
};

export const ok = (data: any): LambdaResponse => ({
  headers: { 'Access-Control-Allow-Origin': '*' },
  statusCode: 200,
  body: typeof data === 'string' ? data : JSON.stringify({ ...data }),
});
