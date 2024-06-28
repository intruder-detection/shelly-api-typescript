import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';

export interface BTHomeDeviceGetStatusBody extends BaseIdType {}

export interface BTHomeDeviceGetStatusResponse extends BaseShellyResponse<BTHomeDeviceGetStatusResponseResult> {}

interface BTHomeDeviceGetStatusResponseResult extends BaseIdType {
  rssi: number | null;
  battery: number | null;
  packet_id: number | null;
  last_update_ts: number;
  errors: string[];
}
