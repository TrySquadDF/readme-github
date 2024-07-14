import type { PipeTransform } from '@nestjs/common';
import { HttpError } from '@shared/http-error';
import { type ZodSchema, z } from 'zod';

export class ZodValidationPipe<S extends ZodSchema> implements PipeTransform {
  constructor(private schema: S) {}

  transform(value: unknown): z.infer<S>  {
    try {
      return this.schema.parse(value);
    } catch (error) {
      throw new HttpError(error.errors, 'BAD_REQUEST');
    }
  }
}

