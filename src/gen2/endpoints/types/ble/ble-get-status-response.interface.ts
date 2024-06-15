import { BaseResponse } from '@gen2/generic.types';

export interface BLEGetStatusResponse extends BaseResponse<BLEGetStatusResponseResult> {}

export interface BLEGetStatusResponseResult {
  ip?: string | null;
  dev_list: string;
}
