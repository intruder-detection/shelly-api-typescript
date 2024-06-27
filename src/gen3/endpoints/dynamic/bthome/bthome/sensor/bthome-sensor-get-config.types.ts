import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface BTHomeSensorGetConfigBody extends BaseIdType {
  config: any;
}

export interface BTHomeSensorGetConfigResponse extends BaseShellyResponse<BTHomeSensorConfig> {}
