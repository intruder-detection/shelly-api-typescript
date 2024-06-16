import { InputIdBody } from '@gen2/endpoints/types/input/input-common.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface InputResetCountersBody extends InputIdBody {
  // Array of strings, selects which counter to reset Optional
  type?: string[];
}

export interface InputResetCountersResponse extends BaseShellyResponse<InputResetCountersResponseResult> {}

interface InputResetCountersResponseResult {
  counts: { total: number };
}
