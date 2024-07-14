import { HttpStatusCode } from "@shared/http-status";


export class HttpError extends Error {
  public readonly httpStatusCode: typeof HttpStatusCode[keyof typeof HttpStatusCode]
  constructor(public readonly message: string, statusCode: keyof typeof HttpStatusCode) {
    super(message);

    this.httpStatusCode = HttpStatusCode[statusCode];
  }
}