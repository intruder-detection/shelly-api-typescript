import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { ShellyMethods } from '@gen2/methods.enum';
import { RebootBody } from '@gen2/endpoints/types/shelly/reboot.interface';

export class ShellyHelpers {
  constructor(private readonly gen2Device: ShellyGen2DeviceHTTPAPI) {}

  async getConfig() {
    return this.gen2Device.post(ShellyMethods.GetConfig);
  }

  async getStatus() {
    return this.gen2Device.post(ShellyMethods.GetStatus);
  }

  async reboot(rebootBody?: RebootBody) {
    if (rebootBody) {
      if (rebootBody.delay_ms < 500) {
        throw new Error(`Reboot delay_ms provided was ${rebootBody.delay_ms} but must be equal or greater than 500`);
      }
    }
    return this.gen2Device.post(ShellyMethods.Reboot, rebootBody);
  }
}
