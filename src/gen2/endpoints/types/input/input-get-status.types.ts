import { BaseShellyResponse } from '@common/generic.types';

export interface InputGetStatusResponse extends BaseShellyResponse<InputGetStatusResponseResult> {}

interface InputGetStatusResponseResult {
  id: number;
  state: boolean;
}
