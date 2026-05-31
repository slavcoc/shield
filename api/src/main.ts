import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ObservabilityService } from './observability/observability.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.get(ObservabilityService).initialize();
  const port = Number(process.env.PORT || 4000);

  await app.listen(port);
  Logger.log(`emailShield API listening on port ${port}`);
}

void bootstrap();
