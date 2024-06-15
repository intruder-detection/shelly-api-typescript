import { ScheduleJob, ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface ListSchedulesResponse extends BaseShellyResponse<ListSchedulesResponseResult> {}

interface ListSchedulesResponseResult extends ScheduleRevision {
  jobs: ScheduleJob[];
}
