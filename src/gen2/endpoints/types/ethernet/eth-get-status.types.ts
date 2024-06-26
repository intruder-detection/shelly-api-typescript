import { BaseShellyResponse } from '@common/generic.types';

export interface EthGetStatusResponse extends BaseShellyResponse<EthGetStatusResponseResult> {}

interface EthGetStatusResponseResult {
  ip: string | null;
}
