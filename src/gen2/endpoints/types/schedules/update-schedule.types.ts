import { ScheduleJob, ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';
import { BaseResponse } from '@gen2/generic.types';

export interface UpdateScheduleBody extends ScheduleJob {
  id: number;
}

export interface UpdateScheduleResponse extends BaseResponse<ScheduleRevision> {}
