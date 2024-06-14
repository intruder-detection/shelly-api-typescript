import { ShellyMethods, WifiMethods } from './methods.enum';
import { WifiGetConfigResponse } from '@gen2/endpoints/types/wifi/wifi-get-config-response.interface';
import { WifiGetStatusResponse } from '@gen2/endpoints/types/wifi/wifi-get-status-response.interface';
import { WifiListAPClientsResponse } from '@gen2/endpoints/types/wifi/wifi-list-ap-clients-response.interface';
import { WifiScanResponse } from '@gen2/endpoints/types/wifi/wifi-scan-response.interface';
import { WifiSetConfigBody, WifiSetConfigResponse } from '@gen2/endpoints/types/wifi/wifi-set-config.interface';
import { GetStatusResponse } from '@gen2/endpoints/types/shelly/get-status-response.interface';
import { GetConfigResponse } from '@gen2/endpoints/types/shelly/get-config-response.interface';
import { ListMethodsResponse } from '@gen2/endpoints/types/shelly/list-methods-response.interface';
import {
  GetDeviceInfoBody,
  GetDeviceInfoResponse,
} from '@gen2/endpoints/types/shelly/get-device-info.interface';
import { ListTimezonesResponse } from '@gen2/endpoints/types/shelly/list-timezones-response.interface';
import { DetectLocationResponse } from '@gen2/endpoints/types/shelly/detect-device-location-response.interface';
import { CheckForUpdateResponse } from '@gen2/endpoints/types/shelly/check-for-update-response.interface';
import { UpdateBody } from '@gen2/endpoints/types/shelly/update.interface';
import { EmptyResponse } from '@gen2/generic.types';
import { RebootBody } from '@gen2/endpoints/types/shelly/reboot.interface';
import { SetAuthBody } from '@gen2/endpoints/types/shelly/set-auth.interface';
import { PutUserCaBody, PutUserCaResponse } from '@gen2/endpoints/types/shelly/put-user-ca.interface';

interface WifiMethodsMapping {
  [WifiMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: WifiGetConfigResponse;
  };
  [WifiMethods.SetConfig]: {
    queryParams: undefined;
    body: WifiSetConfigBody;
    response: WifiSetConfigResponse;
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

interface ShellyMethodsMapping {
  [ShellyMethods.GetStatus]: {
    queryParams: undefined;
    body: undefined;
    response: GetStatusResponse;
  };
  [ShellyMethods.GetConfig]: {
    queryParams: undefined;
    body: undefined;
    response: GetConfigResponse;
  };
  [ShellyMethods.ListMethods]: {
    queryParams: undefined;
    body: undefined;
    response: ListMethodsResponse;
  };
  [ShellyMethods.GetDeviceInfo]: {
    queryParams: undefined;
    body?: GetDeviceInfoBody;
    response: GetDeviceInfoResponse;
  };
  [ShellyMethods.ListProfiles]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse; // TODO: Test with multi-profile device
  };
  [ShellyMethods.SetProfile]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse; // TODO: Test with multi-profile device
  };
  [ShellyMethods.ListTimezones]: {
    queryParams: undefined;
    body: undefined;
    response: ListTimezonesResponse;
  };
  [ShellyMethods.DetectLocation]: {
    queryParams: undefined;
    body: undefined;
    response: DetectLocationResponse;
  };
  [ShellyMethods.CheckForUpdate]: {
    queryParams: undefined;
    body: undefined;
    response: CheckForUpdateResponse;
  };
  [ShellyMethods.Update]: {
    queryParams: undefined;
    body: UpdateBody;
    response: EmptyResponse; // TODO: Verify what's the response
  };
  [ShellyMethods.FactoryReset]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse; // TODO: Verify what's the response
  };
  [ShellyMethods.ResetWiFiConfig]: {
    queryParams: undefined;
    body: undefined;
    response: EmptyResponse;
  };
  [ShellyMethods.Reboot]: {
    queryParams: undefined;
    body: RebootBody;
    response: EmptyResponse;
  };
  [ShellyMethods.SetAuth]: {
    queryParams: undefined;
    body: SetAuthBody;
    response: EmptyResponse;
  };
  [ShellyMethods.PutUserCA]: {
    queryParams: undefined;
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.PutTLSClientCert]: {
    queryParams: undefined;
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
  [ShellyMethods.PutTLSClientKey]: {
    queryParams: undefined;
    body: PutUserCaBody;
    response: PutUserCaResponse;
  };
}

export interface ShellyGen2HTTPAPIMapping extends WifiMethodsMapping, ShellyMethodsMapping {}
