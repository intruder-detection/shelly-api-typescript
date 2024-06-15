import { ScheduleJob, ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';
import { BaseResponse } from '@gen2/generic.types';

export interface ListSchedulesResponse extends BaseResponse<ListSchedulesResponseResult> {}

interface ListSchedulesResponseResult extends ScheduleRevision {
  jobs: ScheduleJob[];
}
