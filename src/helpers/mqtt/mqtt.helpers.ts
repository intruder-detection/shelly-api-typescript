import { MQTTMethods } from '@gen2/methods.enum';
import { MQTTSetConfigBody } from '@gen2/endpoints/types/mqtt/mqtt-set-config.types';
import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';

export class MqttHelpers {
  constructor(private readonly gen2Device: ShellyGen2PlusHTTPAPI) {}

  async setConfig(config: MQTTSetConfigBody) {
    return this.gen2Device.post(MQTTMethods.SetConfig, { config });
  }
}
