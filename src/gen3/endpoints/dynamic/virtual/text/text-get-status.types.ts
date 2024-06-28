import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { GetStatusResponseResult } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface TextGetStatusBody extends BaseIdType {}

export interface TextGetStatusResponse extends BaseShellyResponse<GetStatusResponseResult<string>> {}
