import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

interface EnumConfig extends VirtualComponentConfig<object | null> {
  options: object[];
}

export interface EnumSetConfigBody extends BaseIdType {
  config: EnumConfig;
}

export interface EnumSetConfigResponse extends BaseShellyResponse<BaseIdType> {}


