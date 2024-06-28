import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';

export interface ScriptGetConfigBody {
  id: number;
}

export interface ScriptGetConfigResponse extends BaseShellyResponse<RestartRequired> {}
