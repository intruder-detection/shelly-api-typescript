import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { MQTTMethods } from '@gen2/methods.enum';
import { MQTTSetConfigBody } from '@gen2/endpoints/types/mqtt/mqtt-set-config.types';

export class MqttHelpers {
  constructor(private readonly gen2Device: ShellyGen2DeviceHTTPAPI) {}

  async setConfig(config: MQTTSetConfigBody) {
    return this.gen2Device.post(MQTTMethods.SetConfig, { config });
  }
}
