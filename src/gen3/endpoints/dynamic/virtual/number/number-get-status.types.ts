import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { GetStatusResponseResult } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface NumberGetStatusBody extends BaseIdType {}

export interface NumberGetStatusResponse extends BaseShellyResponse<GetStatusResponseResult<number>> {}
