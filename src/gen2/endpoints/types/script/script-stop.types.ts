import { BaseShellyResponse } from '@gen2/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface ScriptStopBody extends BaseIdType {}

export interface ScriptStopResponse extends BaseShellyResponse<ScriptStopResponseResult> {}

interface ScriptStopResponseResult {
  was_running: boolean;
}
