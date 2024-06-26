import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface ScriptStartBody extends BaseIdType{}

export interface ScriptStartResponse extends BaseShellyResponse<ScriptStartResponseResult> {}

interface ScriptStartResponseResult {
  was_running: boolean;
}
