import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { GlobalExceptionsFilter } from '@global-exceptions.filter';
import { AppModule } from '@app.module';

/**
 *  Bootstrap the application.
 */
(async function() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new GlobalExceptionsFilter());
    const configService = app.get(ConfigService);

    await app.listen(configService.get('ROOT_APP_PORT'));

    return app
})().catch(console.error)
