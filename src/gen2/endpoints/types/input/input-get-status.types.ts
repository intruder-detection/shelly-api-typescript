import { BaseShellyResponse } from '@gen2/generic.types';

export interface InputGetStatusResponse extends BaseShellyResponse<InputGetStatusResponseResult> {}

interface InputGetStatusResponseResult {
  id: number;
  state: boolean;
}
