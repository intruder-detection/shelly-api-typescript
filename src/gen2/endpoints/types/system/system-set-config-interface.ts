import { BaseResponse } from '@gen2/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';
import { SystemConfig } from '@gen2/endpoints/types/system/common.types.interfaces';
import { DeepPartial } from 'ts-essentials';

export interface SystemSetConfigBody {
  config: DeepPartial<SystemConfig>;
}

export interface SystemSetConfigResponse extends BaseResponse<RestartRequired> {}
