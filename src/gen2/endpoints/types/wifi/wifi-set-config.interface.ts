import { BaseShellyResponse } from '@common/generic.types';
import { WifiAccessPointWithPass, WifiRoaming, WifiStationWithPass } from '@gen2/endpoints/types/wifi/common-interfaces.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';
import { DeepPartial } from 'ts-essentials';

export interface WifiSetConfigBody {
  config: DeepPartial<WifiConfigForSetConfiguration>;
}

interface WifiConfigForSetConfiguration {
  ap: WifiAccessPointWithPass;
  sta: WifiStationWithPass;
  sta1: WifiStationWithPass;
  roam: WifiRoaming;
}

export interface WifiSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
