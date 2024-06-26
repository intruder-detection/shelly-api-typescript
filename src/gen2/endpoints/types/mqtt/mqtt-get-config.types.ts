import { MqttConfig } from '@gen2/endpoints/types/mqtt/mqtt-common.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface MQTTGetConfigResponse extends BaseShellyResponse<MqttConfig> {}
