import { BaseShellyResponse } from '@common/generic.types';

export interface VirtualDeleteBody {
  key: string;
}

export interface VirtualDeleteResponse extends BaseShellyResponse<null> {}
