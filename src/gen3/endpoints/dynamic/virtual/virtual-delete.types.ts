import { BaseShellyResponse } from '@gen2/generic.types';

export interface VirtualDeleteBody {
  key: string;
}

export interface VirtualDeleteResponse extends BaseShellyResponse<null> {}
