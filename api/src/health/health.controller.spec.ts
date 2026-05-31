import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('returns a healthy response payload', () => {
    const controller = new HealthController();
    const result = controller.getHealth();

    expect(result.ok).toBe(true);
    expect(result.service).toBe('emailShield-api');
    expect(typeof result.timestamp).toBe('string');
  });
});
