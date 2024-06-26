import { BaseShellyResponse } from '@common/generic.types';

export interface CloudGetStatusResponse extends BaseShellyResponse<CloudGetStatusResponseResult> {}

export interface CloudGetStatusResponseResult {
  connected: boolean;
}
