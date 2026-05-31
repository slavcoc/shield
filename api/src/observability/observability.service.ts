import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ObservabilityService {
  private readonly logger = new Logger(ObservabilityService.name);

  initialize() {
    const status = this.getStatus();
    this.logger.log(
      `Observability initialized (sentry=${status.sentry.enabled}, otel=${status.openTelemetry.enabled})`
    );

    return status;
  }

  getStatus() {
    return {
      sentry: {
        enabled: Boolean(process.env.SENTRY_DSN)
      },
      openTelemetry: {
        enabled: process.env.OTEL_ENABLED === 'true',
        endpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || null
      }
    };
  }
}
