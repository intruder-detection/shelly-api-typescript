import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface LightResetCountersBody extends BaseIdType {
  type?: string[];
}

export interface LightResetCountersResponse extends BaseShellyResponse<LightResetCountersResponseResult> {}

interface LightResetCountersResponseResult {
  aenergy: {
    total: number;
  };
}
