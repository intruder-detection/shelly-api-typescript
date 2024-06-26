import { ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface DeleteScheduleBody {
  id: number;
}

export interface DeleteScheduleResponse extends BaseShellyResponse<ScheduleRevision> {}
