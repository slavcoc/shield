import { Controller, Get } from '@nestjs/common';
import { ObservabilityService } from 'src/observability/observability.service';

@Controller('health')
export class HealthController {
  constructor(private readonly observabilityService: ObservabilityService) {}

  @Get()
  getHealth() {
    return {
      ok: true,
      service: 'emailShield-api',
      timestamp: new Date().toISOString()
    };
  }

  @Get('observability')
  getObservabilityStatus() {
    return {
      ok: true,
      observability: this.observabilityService.getStatus()
    };
  }
}
