import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface NumberGetConfigBody extends BaseIdType {}

export interface NumberGetConfigResponse extends BaseShellyResponse<VirtualComponentConfig<number>> {}
