import { ShellyMethods } from '@gen2/methods.enum';
import { RebootBody } from '@gen2/endpoints/types/shelly/reboot.interface';
import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';

export class ShellyHelpers {
  constructor(private readonly gen2Device: ShellyGen2PlusHTTPAPI) {}

  async getConfig() {
    return this.gen2Device.post(ShellyMethods.GetConfig);
  }

  async getStatus() {
    return this.gen2Device.post(ShellyMethods.GetStatus);
  }

  async reboot(rebootBody?: RebootBody) {
    if (rebootBody && rebootBody.delay_ms < 500) {
      throw new Error(`Reboot delay_ms provided was ${rebootBody.delay_ms} but must be equal or greater than 500`);
    }
    return this.gen2Device.post(ShellyMethods.Reboot, rebootBody);
  }
}
