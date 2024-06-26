import { BaseShellyResponse } from '@common/generic.types';

export interface ScriptEvalBody {
  id: number;
  code: string;
}

export interface ScriptEvalResponse extends BaseShellyResponse<ScriptEvalResponseResult> {}

interface ScriptEvalResponseResult {
  result: string;
}
