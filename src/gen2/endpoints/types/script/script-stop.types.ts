import { BaseShellyResponse } from '@gen2/generic.types';

export interface ScriptStopBody {
  id: number;
}

export interface ScriptStopResponse extends BaseShellyResponse<ScriptStopResponseResult> {}

interface ScriptStopResponseResult {
  was_running: boolean;
}
