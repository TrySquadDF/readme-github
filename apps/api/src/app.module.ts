import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubService } from './github/github.service';
import { GithubModule } from './github/github.module';
import { ConfigModule } from '@nestjs/config';
import { z } from 'zod';

@Module({
  imports: [ConfigModule.forRoot({
  isGlobal: true, validate(config: Record<string, unknown>) {
      return z.object({
        GH_PERSONAL_ACCESS_TOKEN: z.string()
          .regex(new RegExp(/^ghp_[\w]+$/i))
          .min(5),
        GH_GRAPHQL_API_URL: z.string()
          .regex(new RegExp(/^(http|https):\/\/[^ "]+$/))
          .min(8),
        ROOT_APP_PORT: z.coerce.number().max(65535).default(5000),
        CAHCE_CONTROL_MAX_AGE: z.coerce.number().default(3600),
      }).parse(config);
    },
  }), GithubModule], 
  controllers: [AppController],
  providers: [AppService, GithubService],
})
export class AppModule {}

