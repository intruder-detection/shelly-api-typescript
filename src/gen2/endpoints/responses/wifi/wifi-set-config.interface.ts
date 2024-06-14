import { BaseResponse } from '@gen2/generic.types';
import { WifiAccessPointWithPass, WifiRoaming, WifiStationWithPass } from '@gen2/endpoints/responses/wifi/common-interfaces.types';
import { RestartRequired } from '@gen2/endpoints/responses/common/restart-required.types';
import { DeepPartial } from 'ts-essentials';

export interface WifiSetConfigRequest {
  config: DeepPartial<WifiConfigForSetConfiguration>;
}

interface WifiConfigForSetConfiguration {
  ap: WifiAccessPointWithPass;
  sta: WifiStationWithPass;
  sta1: WifiStationWithPass;
  roam: WifiRoaming;
}

export interface WifiSetConfigResponse extends BaseResponse<RestartRequired> {}
