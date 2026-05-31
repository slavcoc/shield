import { Controller, Get } from '@nestjs/common';
import { JobsStatusService } from './jobs.status';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsStatusService: JobsStatusService) {}

  @Get('status')
  getStatus() {
    return {
      ok: true,
      queue: 'dummy-jobs',
      ...this.jobsStatusService.getSnapshot()
    };
  }
}
