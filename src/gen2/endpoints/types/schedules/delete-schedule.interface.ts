import { ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';
import { BaseResponse } from '@gen2/generic.types';

export interface DeleteScheduleBody {
  id: number;
}

export interface DeleteScheduleResponse extends BaseResponse<ScheduleRevision> {}
