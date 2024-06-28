import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';

export interface ScriptStopBody extends BaseIdType {}

export interface ScriptStopResponse extends BaseShellyResponse<ScriptStopResponseResult> {}

interface ScriptStopResponseResult {
  was_running: boolean;
}
