import { BaseShellyResponse } from '@common/generic.types';

export interface ScriptCreateBody {
  name?: string; // Name of the script. If it is missed, a default name script_id will be assigned
}

export interface ScriptCreateResponse extends BaseShellyResponse<ScriptCreateResponseResult> {}

interface ScriptCreateResponseResult {
  id: number;
}
