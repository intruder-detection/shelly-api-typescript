import { BaseShellyResponse } from '@gen2/generic.types';

export interface ListTimezonesResponse extends BaseShellyResponse<ListTimezonesResponseResult> {}

interface ListTimezonesResponseResult {
  timezones: string[];
}
