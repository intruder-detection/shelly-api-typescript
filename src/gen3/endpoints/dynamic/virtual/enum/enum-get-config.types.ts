import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface EnumGetConfigBody extends BaseIdType {}

export interface EnumGetConfigResponse extends BaseShellyResponse<VirtualComponentConfig<object | null>> {}
