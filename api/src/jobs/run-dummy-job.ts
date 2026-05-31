import { Queue } from 'bullmq';
import { DUMMY_QUEUE } from './jobs.constants';

async function run(): Promise<void> {
  const host = process.env.REDIS_HOST || 'localhost';
  const port = Number(process.env.REDIS_PORT || 6379);
  const queue = new Queue(DUMMY_QUEUE, { connection: { host, port } });

  await queue.add('manual-boot-check', {
    createdAt: new Date().toISOString(),
    source: 'worker:dummy script'
  });

  await queue.close();
  console.log('Queued manual-boot-check job');
}

void run();
