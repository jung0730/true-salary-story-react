export abstract class CustomError extends Error {
  statusCode: number;
  message: string;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
