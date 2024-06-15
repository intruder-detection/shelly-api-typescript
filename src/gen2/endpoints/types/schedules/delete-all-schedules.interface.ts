import { BaseResponse } from '@gen2/generic.types';
import { ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';

export interface DeleteAllSchedulesResponse extends BaseResponse<ScheduleRevision> {}
