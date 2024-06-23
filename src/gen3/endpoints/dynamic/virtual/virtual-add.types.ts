import { BaseShellyResponse } from '@gen2/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface VirtualAddBody {
  type: 'boolean' | 'text' | 'number' | 'enum' | 'group' | 'button';
  config?: object;
}

export interface VirtualAddResponse extends BaseShellyResponse<BaseIdType> {}
