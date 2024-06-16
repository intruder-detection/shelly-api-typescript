import { InputIdBody } from '@gen2/endpoints/types/input/input-common.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface InputTriggerBody extends InputIdBody {
  event_type: 'btn_down' | 'btn_up' | 'single_push' | 'double_push' | 'triple_push' | 'long_push';
}

export interface InputTriggerResponse extends BaseShellyResponse<RestartRequired> {}
