import { RestartRequired } from '@common/restart-required.types';
import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { DeepPartial } from 'ts-essentials';
import { LightConfig } from '@gen2/endpoints/types/light/light-common.types';

export interface LightSetConfigBody extends BaseIdType {
  config: DeepPartial<LightConfig>;
}

export interface LightSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
