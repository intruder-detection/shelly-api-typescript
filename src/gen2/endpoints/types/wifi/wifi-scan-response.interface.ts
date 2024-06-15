import { BaseShellyResponse } from '@gen2/generic.types';

export interface WifiScanResponse extends BaseShellyResponse<WifiScan[]> {}

interface WifiScan {
  ssid: string | null;
  bssid: string | null;
  auth: number;
  channel: number;
  rssi: number;
}
