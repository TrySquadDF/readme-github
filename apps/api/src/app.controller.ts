import { Controller, Get, Query, Header } from '@nestjs/common';

import { z } from 'zod';
import { ZodValidationPipe } from '@zod.validation/zod.validation.pipe';

import { AppService } from '@app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'image/svg+xml')
  getGitHubUserCard(@Query('name', new ZodValidationPipe(z.string())) name: string) {
    return this.appService.drawGitHubUserCard(name);
  }
}
