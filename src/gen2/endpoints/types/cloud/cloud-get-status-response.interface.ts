import { BaseResponse } from '@gen2/generic.types';

export interface CloudGetStatusResponse extends BaseResponse<CloudGetStatusResponseResult> {}

export interface CloudGetStatusResponseResult {
  connected: boolean;
}
