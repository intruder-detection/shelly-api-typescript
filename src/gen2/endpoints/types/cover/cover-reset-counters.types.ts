import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface CoverResetCountersBody extends BaseIdType {
  type?: string[];
}

export interface CoverResetCountersResponse extends BaseShellyResponse<CoverResetCountersResponseResult> {}

interface CoverResetCountersResponseResult {
  aenergy: {
    total: number;
  };
}
