import { BaseShellyResponse } from '@common/generic.types';

export interface BTHomeGetObjectInfosBody {
  offset?: number;
  obj_ids?: number[];
}

export interface BTHomeGetObjectInfosResponse extends BaseShellyResponse<null> {}

