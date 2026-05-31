import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsStatusService {
  private processedCount = 0;
  private lastProcessedAt: string | null = null;
  private lastJobName: string | null = null;

  markProcessed(jobName: string): void {
    this.processedCount += 1;
    this.lastJobName = jobName;
    this.lastProcessedAt = new Date().toISOString();
  }

  getSnapshot() {
    return {
      processedCount: this.processedCount,
      lastJobName: this.lastJobName,
      lastProcessedAt: this.lastProcessedAt
    };
  }
}
