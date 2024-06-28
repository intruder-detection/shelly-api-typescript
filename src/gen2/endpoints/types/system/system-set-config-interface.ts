import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';
import { SystemConfig } from '@gen2/endpoints/types/system/common.types.interfaces';
import { DeepPartial } from 'ts-essentials';

export interface SystemSetConfigBody {
  config: DeepPartial<SystemConfig>;
}

export interface SystemSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
