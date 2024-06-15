import { BaseShellyResponse } from '@gen2/generic.types';

export interface ScriptStartBody {
  id: number;
}

export interface ScriptStartResponse extends BaseShellyResponse<ScriptStartResponseResult> {}

interface ScriptStartResponseResult {
  was_running: boolean;
}
