import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';
import { BTHomeSensorConfig } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-common.types';

export interface BTHomeSensorSetConfigBody extends BaseIdType {
  config: BTHomeSensorConfig;
}

export interface BTHomeSensorSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
