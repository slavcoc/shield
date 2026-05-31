import { BullModule } from '@nestjs/bullmq';
import { Injectable, Logger, Module, OnModuleInit } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { DummyJobProcessor } from './dummy-job.processor';
import { JobsController } from './jobs.controller';
import { DUMMY_QUEUE } from './jobs.constants';
import { JobsStatusService } from './jobs.status';

@Injectable()
export class DummyJobsBootstrapService implements OnModuleInit {
  private readonly logger = new Logger(DummyJobsBootstrapService.name);

  constructor(@InjectQueue(DUMMY_QUEUE) private readonly queue: Queue) {}

  async onModuleInit(): Promise<void> {
    // Verifies BullMQ wiring in Sprint 0 without business-side effects.
    await this.queue.add(
      'boot-check',
      { createdAt: new Date().toISOString() },
      { removeOnComplete: 10, removeOnFail: 10 }
    );
    this.logger.log('Queued BullMQ boot-check job.');
  }
}

@Module({
  imports: [
    BullModule.registerQueue({
      name: DUMMY_QUEUE
    })
  ],
  controllers: [JobsController],
  providers: [DummyJobsBootstrapService, DummyJobProcessor, JobsStatusService]
})
export class JobsModule {}
