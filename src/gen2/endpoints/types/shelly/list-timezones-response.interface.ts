import { BaseShellyResponse } from '@gen2/generic.types';

export interface ListTimezonesResponse extends BaseShellyResponse<Result> {}

interface Result {
  timezones: string[];
}
