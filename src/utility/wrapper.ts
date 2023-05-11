import express, { Response, Request, NextFunction } from "express";
import { warning } from "../builders";

const wrap = <T extends any[], R>(fn: (...args: T) => Promise<R>) => {
  if (fn instanceof Function) {
    return (...args: T) => fn(...args).catch(args[2]);
  } else {
    return fn;
  }
};

async function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  res.status(500).send(warning);
}

// Добавить endpoint
export class Factory {
  private server = express();

  constructor(Port: number | string) {
    this.server.listen(Port, () => {
      console.log(`Server is listening on port ${Port}`);
    });
  }

  addEndpoint(path: string, handler: (req: Request, res: Response) => any) {
    this.server.get(path, handler);
  }

  asyncEndpoint(
    path: string,
    asyncHandler: (req: Request, res: Response) => Promise<any>
  ) {
    this.server.get(path, wrap(asyncHandler));
  }

  registerErrorHandler() {
    this.server.use(errorHandlerMiddleware);
  }
}
