import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { VirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface BooleanSetConfigBody extends BaseIdType {
  config: VirtualComponentConfig<boolean>;
}

export interface BooleanSetConfigResponse extends BaseShellyResponse<RestartRequired> {}

