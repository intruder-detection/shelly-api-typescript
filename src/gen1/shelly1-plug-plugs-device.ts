import { Gen1Device } from '@gen1/gen1-device';
import { ShellyEndpoints, ShellyPlugPlugSEndpoints } from '@gen1/enums/endpoints.enum';
import { PlugSettingsRequest, PlugSettingsResponse } from '@gen1/types/plug_plugS/plug-settings.types';

export class Shelly1PlugPlugsDevice extends Gen1Device {
  async settings(params?: PlugSettingsRequest): Promise<PlugSettingsResponse> {
    return await this.post(ShellyEndpoints.Settings, params);
  }

  async settingsRelay0() {
    return await this.post(ShellyPlugPlugSEndpoints.SettingsRelay0);
  }

  async meter0() {
    return await this.post(ShellyPlugPlugSEndpoints.Meter0);
  }

  async relay0() {
    return await this.post(ShellyPlugPlugSEndpoints.Relay0);
  }
}
