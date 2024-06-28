import { MqttConfig } from '@gen2/endpoints/types/mqtt/mqtt-common.types';
import { DeepPartial } from 'ts-essentials';
import { RestartRequired } from '@common/restart-required.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface MQTTSetConfigBody {
  config: DeepPartial<MqttConfig>;
}

export interface MQTTSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
