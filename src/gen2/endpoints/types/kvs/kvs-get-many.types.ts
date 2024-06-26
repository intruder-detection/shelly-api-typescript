import { BaseShellyResponse } from '@common/generic.types';

export interface KVSGetManyBody {
  match: string;
}

export interface KVSGetManyResponse extends BaseShellyResponse<KVSGetManyResponseResult> {}

interface KVSGetManyResponseResult {
  items: Value[];
}

interface Value {
  etag: string;
  value: string | number | boolean | { [key: string]: any };
}
