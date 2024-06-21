import { BaseShellyResponse } from '@gen2/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface ScriptStartBody extends BaseIdType{}

export interface ScriptStartResponse extends BaseShellyResponse<ScriptStartResponseResult> {}

interface ScriptStartResponseResult {
  was_running: boolean;
}
