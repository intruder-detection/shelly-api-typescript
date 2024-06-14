import { Observer } from '@gen2/endpoints/responses/common/observer.types';

export interface WifiConfig {
  ap: WifiAccessPoint;
  sta: WifiStation;
  sta1: WifiStation;
  roam: WifiRoaming;
}

interface WifiAccessPoint {
  ssid: string;
  is_open: boolean;
  enable: boolean;
  range_extender: Observer;
}

export interface WifiAccessPointWithPass extends WifiAccessPoint {
  pass: string;
}

export interface WifiRoaming {
  rssi_thr: number;
  interval: number;
}

// https://en.wikipedia.org/wiki/Station_(networking)
interface WifiStation {
  ssid: null | string;
  is_open: boolean;
  enable: boolean;
  ipv4mode: 'dhcp' | 'static';
  ip: string;
  netmask: string;
  gw: string;
  nameserver: string;
}

export interface WifiStationWithPass extends WifiStation {
  pass: string;
}
