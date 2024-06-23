import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface BooleanSetBody extends BaseIdType {
  value: boolean;
}

export interface BooleanSetResponse extends BaseShellyResponse<null> {}
