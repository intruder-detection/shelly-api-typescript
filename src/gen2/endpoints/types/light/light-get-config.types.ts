import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { LightConfig } from '@gen2/endpoints/types/light/light-common.types';

export interface LightGetConfigBody extends BaseIdType {}

export interface LightGetConfigResponse extends BaseShellyResponse<LightConfig> {}
