import { RestartRequired } from '@common/restart-required.types';
import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { CoverConfig } from '@gen2/endpoints/types/cover/cover-common.types';
import { DeepPartial } from 'ts-essentials';

export interface CoverSetConfigBody extends BaseIdType {
  config: DeepPartial<CoverConfig>;
}

export interface CoverSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
