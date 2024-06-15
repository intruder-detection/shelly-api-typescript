import { Gen2Methods } from '@gen2/methods.enum';

export interface ScheduleRevision {
  id?: number;
  rev: number;
}

export interface ScheduleJobCall {
  method: Gen2Methods;
  params?: { [key: string]: any };
}

export interface ScheduleJob {
  id: number;
  enable: boolean;
  timespec: string;
  calls: ScheduleJobCall[];
}
