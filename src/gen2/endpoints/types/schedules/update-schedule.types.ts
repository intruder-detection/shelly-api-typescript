import { ScheduleJob, ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface UpdateScheduleBody extends ScheduleJob {
  id: number;
}

export interface UpdateScheduleResponse extends BaseShellyResponse<ScheduleRevision> {}
