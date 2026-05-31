import { HealthController } from './health.controller';
import { ObservabilityService } from 'src/observability/observability.service';

describe('HealthController', () => {
  it('returns a healthy response payload', () => {
    const controller = new HealthController(new ObservabilityService());
    const result = controller.getHealth();

    expect(result.ok).toBe(true);
    expect(result.service).toBe('emailShield-api');
    expect(typeof result.timestamp).toBe('string');
  });

  it('returns observability stub status payload', () => {
    const controller = new HealthController(new ObservabilityService());
    const result = controller.getObservabilityStatus();

    expect(result.ok).toBe(true);
    expect(result.observability).toBeDefined();
    expect(result.observability.sentry.enabled).toBe(false);
    expect(result.observability.openTelemetry.enabled).toBe(false);
  });
});
