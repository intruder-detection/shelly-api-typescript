import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';
import { RestartRequired } from '@common/restart-required.types';

export interface TextSetConfigBody extends BaseIdType {
  config: VirtualComponentConfig<string>;
}

export interface TextSetConfigResponse extends BaseShellyResponse<RestartRequired> {}


