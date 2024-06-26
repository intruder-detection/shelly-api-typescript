import { BaseShellyResponse } from '@common/generic.types';

export interface KVSListBody {
  match?: string;
}

export interface KVSListResponse extends BaseShellyResponse<KVSListResponseResult> {}

interface KVSListResponseResult {
  keys: { [key: string]: { etag: string } };
}
