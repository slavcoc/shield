import { Job } from 'bullmq';
import { DummyJobProcessor } from './dummy-job.processor';
import { JobsStatusService } from './jobs.status';

describe('DummyJobProcessor', () => {
  it('marks dummy jobs as processed', async () => {
    const status = new JobsStatusService();
    const processor = new DummyJobProcessor(status);

    await processor.process({ name: 'boot-check' } as Job);

    const snapshot = status.getSnapshot();
    expect(snapshot.processedCount).toBe(1);
    expect(snapshot.lastJobName).toBe('boot-check');
    expect(snapshot.lastProcessedAt).toBeTruthy();
  });
});
