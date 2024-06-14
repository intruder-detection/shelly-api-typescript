import { WifiMethods } from './methods.enum';
import { WifiGetConfigResponse } from '@gen2/endpoints/responses/wifi/wifi-get-config-response.interface';
import { WifiGetStatusResponse } from '@gen2/endpoints/responses/wifi/wifi-get-status-response.interface';
import { WifiListAPClientsResponse } from '@gen2/endpoints/responses/wifi/wifi-list-ap-clients-response.interface';
import { WifiScanResponse } from '@gen2/endpoints/responses/wifi/wifi-scan-response.interface';

interface WifiMethodsMapping {
  [WifiMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: WifiGetConfigResponse;
  };
  [WifiMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: WifiGetStatusResponse;
  };
  [WifiMethods.ListAPClients]: {
    queryParams: undefined;
    body: undefined;
    response: WifiListAPClientsResponse;
  };
  [WifiMethods.Scan]: {
    queryParams: undefined;
    body: undefined;
    response: WifiScanResponse;
  };
}

export interface ShellyGen2HTTPAPIMapping extends WifiMethodsMapping {}
