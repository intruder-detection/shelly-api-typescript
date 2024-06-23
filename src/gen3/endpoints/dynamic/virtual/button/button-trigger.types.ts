import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface ButtonTriggerBody extends BaseIdType {
  event_type: 'single_push' | 'double_push' | 'triple_push' | 'long_push';
}

export interface ButtonTriggerResponse extends BaseShellyResponse<null> {}
