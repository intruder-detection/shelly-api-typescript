import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { BTHomeSensorConfig } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-common.types';

export interface BTHomeSensorGetConfigBody extends BaseIdType {
  config: any;
}

export interface BTHomeSensorGetConfigResponse extends BaseShellyResponse<BTHomeSensorConfig> {}
