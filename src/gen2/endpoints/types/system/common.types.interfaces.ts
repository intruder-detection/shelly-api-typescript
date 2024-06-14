import { AvailableUpdates } from '@gen2/endpoints/types/common/available-updates.types';
import { Device } from '@gen2/endpoints/types/common/device.types';
import { Debug } from '@gen2/endpoints/types/common/debug.types';

export interface SystemStatus {
  mac: string;
  restart_required: boolean;
  time: string;
  unixtime: number;
  uptime: number;
  ram_size: number;
  ram_free: number;
  fs_size: number;
  fs_free: number;
  cfg_rev: number;
  kvs_rev: number;
  schedule_rev: number;
  webhook_rev: number;
  available_updates: AvailableUpdates;
}

export interface SystemConfig {
  device: Device;
  location: Location;
  debug: Debug;
  ui_data: UIData;
  rpc_udp: RPCUDP;
  sntp: SNTP;
  cfg_rev: number;
}

interface RPCUDP {
  dst_addr: null;
  listen_port: null;
}

interface SNTP {
  server: string;
}

interface UIData {}
