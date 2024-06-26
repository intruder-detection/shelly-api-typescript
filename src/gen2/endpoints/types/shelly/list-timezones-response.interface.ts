import { BaseShellyResponse } from '@common/generic.types';

export interface ListTimezonesResponse extends BaseShellyResponse<ListTimezonesResponseResult> {}

interface ListTimezonesResponseResult {
  timezones: string[];
}
