import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { WasOn } from '@gen2/endpoints/types/common/was-on.types';

export interface SwitchSetBody extends BaseIdType {
  on: boolean;
  toggle_after: number;
}

export interface SwitchSetResponse extends BaseShellyResponse<WasOn> {}
