import { BaseShellyResponse } from '@common/generic.types';

export interface ScriptDeleteBody {
  id: number;
}

export interface ScriptDeleteResponse extends BaseShellyResponse<null> {}
