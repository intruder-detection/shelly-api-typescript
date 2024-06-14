import { BaseResponse } from '@gen2/generic.types';

export interface WifiGetStatusResponse extends BaseResponse<WifiStatus> {}

interface WifiStatus {
  sta_ip: string | null;
  status: string;
  ssid: string | null;
  rssi: number;
  ap_client_count: number;
}
