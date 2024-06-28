import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';

export interface VirtualAddBody {
  type: 'boolean' | 'text' | 'number' | 'enum' | 'group' | 'button';
  config?: object;
}

export interface VirtualAddResponse extends BaseShellyResponse<BaseIdType> {}
