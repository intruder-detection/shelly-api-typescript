import { ShellyMethods, WifiMethods } from './methods.enum';
import { WifiGetConfigResponse } from '@gen2/endpoints/responses/wifi/wifi-get-config-response.interface';

export interface ShellyGen2HTTPAPIMapping {
  [ShellyMethods.GetComponents]: {
    queryParams: any;
    body: any;
    response: any;
  };
  [WifiMethods.GetConfig]: {
    queryParams: any;
    body: any;
    response: WifiGetConfigResponse;
  };
}
