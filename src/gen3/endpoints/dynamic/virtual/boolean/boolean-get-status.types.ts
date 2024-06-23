import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { GetStatusResponseResult } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface BooleanGetStatusBody extends BaseIdType {}

export interface BooleanGetStatusResponse extends BaseShellyResponse<GetStatusResponseResult<boolean>> {}
