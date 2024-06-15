import { BaseResponse } from '@gen2/generic.types';
import { ScheduleJob, ScheduleRevision } from '@gen2/endpoints/types/schedules/schedules-common.types';

export interface CreateScheduleBody extends ScheduleJob {}

export interface CreateScheduleResponse extends BaseResponse<ScheduleRevision> {}
