import { Connected } from '@common/connected.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface MQTTGetStatusResponse extends BaseShellyResponse<Connected> {}
