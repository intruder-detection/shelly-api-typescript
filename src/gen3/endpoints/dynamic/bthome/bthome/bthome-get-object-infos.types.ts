import { BaseShellyResponse } from '@gen2/generic.types';

export interface BTHomeGetObjectInfosBody {
  offset?: number;
  obj_ids?: number[];
}

export interface BTHomeGetObjectInfosResponse extends BaseShellyResponse<null> {}

