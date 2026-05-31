import { ObservabilityService } from './observability.service';

describe('ObservabilityService', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env.SENTRY_DSN;
    process.env.OTEL_ENABLED = 'false';
    delete process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('initializes telemetry hooks and returns disabled state by default', () => {
    const service = new ObservabilityService();

    expect(service.initialize().sentry.enabled).toBe(false);
    expect(service.initialize().openTelemetry.enabled).toBe(false);
  });

  it('initializes telemetry hooks from environment toggles', () => {
    process.env.SENTRY_DSN = 'https://example@sentry.invalid/1';
    process.env.OTEL_ENABLED = 'true';
    process.env.OTEL_EXPORTER_OTLP_ENDPOINT = 'http://otel-collector:4318';

    const service = new ObservabilityService();
    const status = service.initialize();

    expect(status.sentry.enabled).toBe(true);
    expect(status.openTelemetry.enabled).toBe(true);
    expect(status.openTelemetry.endpoint).toBe('http://otel-collector:4318');
  });
});