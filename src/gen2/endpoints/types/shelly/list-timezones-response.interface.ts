import { BaseResponse } from '@gen2/generic.types';

export interface ListTimezonesResponse extends BaseResponse<Result> {}

interface Result {
  timezones: string[];
}
