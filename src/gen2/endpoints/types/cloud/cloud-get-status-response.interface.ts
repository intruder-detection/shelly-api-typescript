import { BaseShellyResponse } from '@gen2/generic.types';

export interface CloudGetStatusResponse extends BaseShellyResponse<CloudGetStatusResponseResult> {}

export interface CloudGetStatusResponseResult {
  connected: boolean;
}
