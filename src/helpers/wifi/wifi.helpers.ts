import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';
import { WifiMethods } from '@gen2/methods.enum';
import { WifiSetConfigBody, WifiSetConfigResponse } from '@gen2/endpoints/types/wifi/wifi-set-config.interface';
import { WifiGetConfigResponse } from '@gen2/endpoints/types/wifi/wifi-get-config-response.interface';
import { WifiGetStatusResponse } from '@gen2/endpoints/types/wifi/wifi-get-status-response.interface';

export class WifiHelpers {
  constructor(private readonly gen2PlusDevice: ShellyGen2PlusHTTPAPI) {}

  async getConfig(): Promise<WifiGetConfigResponse> {
    return this.gen2PlusDevice.post(WifiMethods.GetConfig);
  }

  async getStatus(): Promise<WifiGetStatusResponse> {
    return this.gen2PlusDevice.post(WifiMethods.GetStatus);
  }

  async setConfig(config: WifiSetConfigBody): Promise<WifiSetConfigResponse> {
    return this.gen2PlusDevice.post(WifiMethods.SetConfig, config);
  }

  async isConnectedToShellyNetwork(): Promise<boolean> {
    const config = await this.getConfig();
    return config.result.ap && config.result.ap.enable === true; // && config.result.ap.ssid.includes('Shelly');
  }
}
