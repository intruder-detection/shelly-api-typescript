import { MQTTMethods } from '@gen2/methods.enum';
import { MQTTSetConfigBody } from '@gen2/endpoints/types/mqtt/mqtt-set-config.types';
import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';
import { DeepPartial } from 'ts-essentials';
import { MqttConfig } from '@gen2/endpoints/types/mqtt/mqtt-common.types';

export class MqttHelpers {
  constructor(private readonly gen2Device: ShellyGen2PlusHTTPAPI) {}

  async setConfig(config: DeepPartial<MqttConfig>) {
    return this.gen2Device.post(MQTTMethods.SetConfig, { config });
  }
}
