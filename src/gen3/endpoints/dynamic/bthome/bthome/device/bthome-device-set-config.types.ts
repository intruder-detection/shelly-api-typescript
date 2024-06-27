import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface BTHomeDeviceSetConfigBody extends BaseIdType {
  config: BTHomeDeviceConfig;
}

export interface BTHomeDeviceSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
