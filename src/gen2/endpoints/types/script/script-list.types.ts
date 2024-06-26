import { BaseShellyResponse } from '@common/generic.types';

export interface ScriptListResponse extends BaseShellyResponse<ScriptListResponseResult> {}

interface ScriptListResponseResult {
  scripts: ScriptInformation[];
}

export interface ScriptInformation {
  id: number;
  name: string;
  enable: boolean;
  running: boolean;
}
