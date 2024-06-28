import { Connected } from '@common/connected.types';

export interface StatusResponse {
  wifi_sta: WifiStation;
  cloud: Cloud;
  mqtt: Mqtt;
  time: string;
  unixtime: number;
  serial: number;
  has_update: boolean;
  mac: string;
  cfg_changed_cnt: number;
  actions_stats: ActionsStats;
  relays: Relay[];
  meters: Meter[];
  update: Update;
  ram_total: number;
  ram_free: number;
  fs_size: number;
  fs_free: number;
  uptime: number;
}

interface ActionsStats {
  skipped: number;
}

interface Cloud extends Connected {
  enabled: boolean;
}

interface Meter {
  power: number;
  overpower: number;
  is_valid: boolean;
  timestamp: number;
  counters: number[];
  total: number;
}

interface Mqtt extends Connected {}

interface Relay {
  ison: boolean;
  has_timer: boolean;
  timer_started: number;
  timer_duration: number;
  timer_remaining: number;
  overpower: boolean;
  source: string;
}

interface Update {
  status: string;
  has_update: boolean;
  new_version: string;
  old_version: string;
  beta_version: string;
}

interface WifiStation extends Connected {
  ssid: string;
  ip: string;
  rssi: number;
}
