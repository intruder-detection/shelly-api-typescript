import { BaseShellyResponse } from '@gen2/generic.types';

export interface EthGetStatusResponse extends BaseShellyResponse<EthGetStatusResponseResult> {}

interface EthGetStatusResponseResult {
  ip: string | null;
}
