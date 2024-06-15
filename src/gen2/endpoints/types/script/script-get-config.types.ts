import { BaseShellyResponse } from '@gen2/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface ScriptGetConfigBody {
  id: number;
}

export interface ScriptGetConfigResponse extends BaseShellyResponse<RestartRequired> {}
