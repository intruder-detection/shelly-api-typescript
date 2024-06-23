import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { VirtualSetValue } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface BooleanSetBody extends BaseIdType, VirtualSetValue<boolean> {}

export interface BooleanSetResponse extends BaseShellyResponse<null> {}
