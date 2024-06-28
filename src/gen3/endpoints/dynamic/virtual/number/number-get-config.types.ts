import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface NumberGetConfigBody extends BaseIdType {}

export interface NumberGetConfigResponse extends BaseShellyResponse<VirtualComponentConfig<number>> {}
