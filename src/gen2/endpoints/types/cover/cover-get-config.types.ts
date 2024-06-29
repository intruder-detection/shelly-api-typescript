import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { CoverConfig } from '@gen2/endpoints/types/cover/cover-common.types';

export interface CoverGetConfigBody extends BaseIdType {}

export interface CoverGetConfigResponse extends BaseShellyResponse<CoverConfig> {}
