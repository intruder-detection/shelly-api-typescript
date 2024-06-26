import { BaseShellyResponse } from '@common/generic.types';

export type KVSValue = string | number | boolean | { [key: string]: any };

export interface KVSSetBody {
  key: string;
  value: KVSValue;
  etag?: string;
}

export interface KVSSetResponse extends BaseShellyResponse<KVSSetResponseResult> {}

interface KVSSetResponseResult {
  etag: string;
  rev: number;
}
