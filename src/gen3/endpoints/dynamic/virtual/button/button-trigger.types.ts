import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface ButtonTriggerBody extends BaseIdType {
  event_type: 'single_push' | 'double_push' | 'triple_push' | 'long_push';
}

export interface ButtonTriggerResponse extends BaseShellyResponse<null> {}
