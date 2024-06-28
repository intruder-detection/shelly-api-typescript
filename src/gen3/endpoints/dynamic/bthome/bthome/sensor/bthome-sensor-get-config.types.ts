import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface BTHomeSensorGetConfigBody extends BaseIdType {
  config: any;
}

export interface BTHomeSensorGetConfigResponse extends BaseShellyResponse<BTHomeSensorConfig> {}
