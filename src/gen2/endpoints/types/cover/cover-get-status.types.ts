import { BaseShellyResponse } from '@common/generic.types';
import { CoverStatus } from '@gen2/endpoints/types/cover/cover-common.types';
import { BaseIdType } from '@common/base-id.types';

export interface CoverGetStatusBody extends BaseIdType {}

export interface CoverGetStatusResponse extends BaseShellyResponse<CoverStatus> {}
