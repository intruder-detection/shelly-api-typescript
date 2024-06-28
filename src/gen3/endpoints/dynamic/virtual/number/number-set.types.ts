import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { VirtualSetValue } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface NumberSetBody extends BaseIdType, VirtualSetValue<number> {}

export interface NumberSetResponse extends BaseShellyResponse<null> {}
