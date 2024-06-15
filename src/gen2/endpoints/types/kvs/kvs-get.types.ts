import { BaseShellyResponse } from '@gen2/generic.types';

export interface KVSGetBody {
  key: string;
}

export interface KVSGetResponse extends BaseShellyResponse<KVSGetResponseResult> {}

interface KVSGetResponseResult {
  etag: string;
  value: string | number | boolean | { [key: string]: any };
}
