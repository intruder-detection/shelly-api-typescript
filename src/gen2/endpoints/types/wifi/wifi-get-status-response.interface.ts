import { BaseShellyResponse } from '@common/generic.types';

export interface WifiGetStatusResponse extends BaseShellyResponse<WifiStatus> {}

interface WifiStatus {
  sta_ip: string | null;
  status: string;
  ssid: string | null;
  rssi: number;
  ap_client_count: number;
}
