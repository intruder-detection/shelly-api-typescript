import { BLEConfig } from '@gen2/endpoints/types/ble/ble-common.types';
import { BaseResponse } from '@gen2/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface BLESetConfigBody {
  config: BLEConfig;
}

export interface BLESetConfigResponse extends BaseResponse<RestartRequired> {}