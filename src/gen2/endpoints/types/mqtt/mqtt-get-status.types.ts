import { Connected } from '@gen2/endpoints/types/common/connected.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface MQTTGetStatusResponse extends BaseShellyResponse<Connected> {}
