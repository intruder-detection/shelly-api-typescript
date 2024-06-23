import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface BooleanSetConfigBody extends BaseIdType {
  config: BooleanComponentConfig;
}

export interface BooleanSetConfigResponse extends BaseShellyResponse<BaseIdType> {}


