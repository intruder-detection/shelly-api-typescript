import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';
import { BTHomeDeviceConfig } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-common.types';

export interface BTHomeDeviceSetConfigBody extends BaseIdType {
  config: BTHomeDeviceConfig;
}

export interface BTHomeDeviceSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
