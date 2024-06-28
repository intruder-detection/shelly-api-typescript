import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';

export interface BTHomeSensorSetConfigBody extends BaseIdType {
  config: BTHomeSensorConfig;
}

export interface BTHomeSensorSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
