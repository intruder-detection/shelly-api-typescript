import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface BTHomeSensorGetStatusBody extends BaseIdType {}

export interface BTHomeSensorGetStatusResponse extends BaseShellyResponse<BTHomeSensorGetStatusResponseResult> {}

interface BTHomeSensorGetStatusResponseResult extends BaseIdType {
  value: number | boolean | string;
  last_update_ts: number;
}
