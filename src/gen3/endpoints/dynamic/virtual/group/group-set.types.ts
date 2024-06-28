import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { VirtualSetValue } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface GroupSetBody extends BaseIdType, VirtualSetValue<string[]> {}

export interface GroupSetResponse extends BaseShellyResponse<null> {}
