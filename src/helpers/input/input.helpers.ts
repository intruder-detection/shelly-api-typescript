import { InputMethods, ShellyMethods } from '@gen2/methods.enum';
import { InputConfig, Inputs } from '@gen2/endpoints/types/input/input-common.types';
import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';

export class InputHelpers {
  constructor(private readonly gen2Device: ShellyGen2PlusHTTPAPI) {}

  async getInputs(): Promise<InputConfig[]> {
    const config = await this.gen2Device.post(ShellyMethods.GetConfig);
    return Object.values(Inputs).map((key: string) => config.result[key]);
  }

  async getStatus(id: number) {
    return this.gen2Device.post(InputMethods.GetStatus, { id });
  }

  async getConfig(id: number) {
    return this.gen2Device.post(InputMethods.GetConfig, { id });
  }
}
