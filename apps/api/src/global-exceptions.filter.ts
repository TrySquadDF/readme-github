import type { Response } from 'express';
import type { ExceptionFilter, ArgumentsHost } from '@nestjs/common';

import { Catch, NotFoundException } from '@nestjs/common';
import { HttpError } from '@shared/http-error';
import { HttpStatusCode } from '@shared/http-status';

import staticCollections from './assets/static-collections.json'


@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  catch(error: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    /**
      * This is a workaround for the favicon.ico request that is sent by the browser.
      * When the application returns a request with svg, we set the 
      * markup type to `image/svg+xml` and the browser tries to request a favicon
     */
    if(error instanceof NotFoundException && error.message === "Cannot GET /favicon.ico"){
      return
    }

    return response.status(error instanceof HttpError ?
      error.httpStatusCode : 
      HttpStatusCode["SERVICE_UNAVAILABLE"]
    ).send(staticCollections['Error']);
  }
}

