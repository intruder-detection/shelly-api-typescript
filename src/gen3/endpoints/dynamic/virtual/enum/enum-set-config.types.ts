import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';
import { RestartRequired } from '@common/restart-required.types';

interface EnumConfig extends VirtualComponentConfig<object | null> {
  options: object[];
}

export interface EnumSetConfigBody extends BaseIdType {
  config: EnumConfig;
}

export interface EnumSetConfigResponse extends BaseShellyResponse<RestartRequired> {}


