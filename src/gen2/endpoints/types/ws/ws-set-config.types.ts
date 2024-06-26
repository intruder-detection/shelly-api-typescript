import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';
import { BaseShellyResponse } from '@common/generic.types';
import { DeepPartial } from 'ts-essentials';
import { WsConfig } from '@gen2/endpoints/types/ws/ws-common.types';

export interface WsSetConfigBody {
  config: DeepPartial<WsConfig>;
}

export interface WsSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
