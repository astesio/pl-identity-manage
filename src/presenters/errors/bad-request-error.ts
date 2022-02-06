export class BadRequestError extends Error {
  constructor(paramName: string) {
    super(`bad request param: ${paramName}`);
    this.name = 'BadRequestError';
  }
}
