import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface TextSetConfigBody extends BaseIdType {
  config: VirtualComponentConfig<string>;
}

export interface TextSetConfigResponse extends BaseShellyResponse<RestartRequired> {}


