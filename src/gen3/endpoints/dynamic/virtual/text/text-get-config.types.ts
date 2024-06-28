import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface TextGetConfigBody extends BaseIdType {}

export interface TextGetConfigResponse extends BaseShellyResponse<VirtualComponentConfig<string>> {}
