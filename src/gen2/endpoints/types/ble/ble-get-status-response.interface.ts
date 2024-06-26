import { BaseShellyResponse } from '@common/generic.types';

export interface BLEGetStatusResponse extends BaseShellyResponse<BLEGetStatusResponseResult> {}

export interface BLEGetStatusResponseResult {
  ip?: string | null;
  dev_list: string;
}
