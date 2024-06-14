import { BaseResponse } from '@gen2/generic.types';

export interface PutUserCaBody {
  data: string | null;
  append: boolean;
}

export interface PutUserCaResponse extends BaseResponse<Result> {}

interface Result {
  // TODO: https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Shelly#shellyputuserca
  // It's not clear from the documentation what the response is
  len: number;
}
