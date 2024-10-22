import { BaseShellyResponse } from '@common/generic.types';

export interface ScriptPutCodeBody {
  id: number;
  code: string;
  append?: boolean;
}

export interface ScriptPutCodeResponse extends BaseShellyResponse<ScriptPutCodeResponseResult> {}

interface ScriptPutCodeResponseResult {
  len: number;
}
