import { WifiMethods } from './methods.enum';
import { WifiGetConfigResponse } from '@gen2/endpoints/responses/wifi/wifi-get-config-response.interface';

interface WifiMethodsMapping {
  [WifiMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: WifiGetConfigResponse;
  };
}

export interface ShellyGen2HTTPAPIMapping extends WifiMethodsMapping {}
