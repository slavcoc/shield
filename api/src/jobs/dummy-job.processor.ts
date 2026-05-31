import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { DUMMY_QUEUE } from './jobs.constants';
import { JobsStatusService } from './jobs.status';

@Processor(DUMMY_QUEUE)
export class DummyJobProcessor extends WorkerHost {
  private readonly logger = new Logger(DummyJobProcessor.name);

  constructor(private readonly jobsStatusService: JobsStatusService) {
    super();
  }

  async process(job: Job): Promise<void> {
    this.logger.log(`Processed dummy job: ${job.name}`);
    this.jobsStatusService.markProcessed(job.name);
  }
}
