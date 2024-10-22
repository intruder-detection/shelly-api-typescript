import { BLEConfig } from '@gen2/endpoints/types/ble/ble-common.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';

export interface BLESetConfigBody {
  config: BLEConfig;
}

export interface BLESetConfigResponse extends BaseShellyResponse<RestartRequired> {}
