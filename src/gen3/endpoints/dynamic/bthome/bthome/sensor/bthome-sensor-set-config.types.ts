import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface BTHomeSensorSetConfigBody extends BaseIdType {
  config: BTHomeSensorConfig;
}

export interface BTHomeSensorSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
