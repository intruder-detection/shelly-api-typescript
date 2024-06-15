import { BaseShellyResponse } from '@gen2/generic.types';
import { WifiConfig } from '@gen2/endpoints/types/wifi/common-interfaces.types';
import { Device } from '@gen2/endpoints/types/common/device.types';
import { Location } from '@gen2/endpoints/types/common/location.types';
import { Debug } from '@gen2/endpoints/types/common/debug.types';
import { BLEConfig } from '@gen2/endpoints/types/ble/ble-common.types';
import { CloudConfig } from '@gen2/endpoints/types/cloud/cloud-common.types';
import { MqttConfig } from '@gen2/endpoints/types/mqtt/mqtt-common.types';
import { WsConfig } from '@gen2/endpoints/types/ws/ws-common.types';

export interface GetConfigResponse extends BaseShellyResponse<GetConfigResponseResult> {}

export interface GetConfigResponseResult {
  ble: BLEConfig;
  cloud: CloudConfig;
  mqtt: MqttConfig;
  sys: Sys;
  wifi: WifiConfig;
  ws: WsConfig;
}


export interface Sys {
  device: Device;
  location: Location;
  debug: Debug;
  ui_data: UIData;
  rpc_udp: RPCUDP;
  sntp: SNTP;
  cfg_rev: number;
}

export interface RPCUDP {
  dst_addr: null;
  listen_port: null;
}

export interface SNTP {
  server: string;
}

interface UIData {}
