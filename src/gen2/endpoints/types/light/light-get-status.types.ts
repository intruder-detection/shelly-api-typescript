import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { LightStatus } from '@gen2/endpoints/types/light/light-common.types';

export interface LightGetStatusBody extends BaseIdType {}

export interface LightGetStatusResponse extends BaseShellyResponse<LightStatus> {}
