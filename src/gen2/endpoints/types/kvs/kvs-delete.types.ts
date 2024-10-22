import { BaseShellyResponse } from '@common/generic.types';

export interface KVSDeleteBody {
  key: string;
  etag?: string;
}

export interface KVSDeleteResponse extends BaseShellyResponse<KVSDeleteResponseResult> {}

interface KVSDeleteResponseResult {
  rev: string;
}
