import { BaseShellyResponse } from '@gen2/generic.types';

export interface InputCheckExpressionBody {
  expr: string;
  inputs: any[];
}

export interface InputCheckExpressionResponse extends BaseShellyResponse<InputCheckExpressionResponseResult> {}

type InputOutPut = [string, string];

type InputOutPutErrorMessage = [string, string, string];

interface InputCheckExpressionResponseResult {
  results: (InputOutPut | InputOutPutErrorMessage)[];
}
