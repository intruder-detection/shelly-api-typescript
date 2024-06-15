import { BaseShellyResponse } from '@gen2/generic.types';
import { SystemStatus } from '@gen2/endpoints/types/system/common.types.interfaces';

export interface GetStatusResponse extends BaseShellyResponse<GetStatusResult> {}

export interface GetStatusResult {
  ble: Ble;
  cloud: Cloud;
  mqtt: Cloud;
  sys: SystemStatus;
  wifi: Wifi;
  ws: Cloud;
}

export interface Ble {
  dev_list: string;
}

export interface Cloud {
  connected: boolean;
}

export interface Wifi {
  sta_ip: string;
  status: string;
  ssid: string;
  rssi: number;
}
