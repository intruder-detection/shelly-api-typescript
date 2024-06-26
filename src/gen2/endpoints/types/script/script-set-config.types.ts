import { BaseShellyResponse } from '@common/generic.types';
import { DeepPartial } from 'ts-essentials';
import { ScriptConfig } from '@gen2/endpoints/types/script/script-common.types';

export interface ScriptSetConfigBody {
  id: number;
  config: DeepPartial<ScriptConfig>;
}

export interface ScriptSetConfigResponse extends BaseShellyResponse<ScriptConfig> {}
