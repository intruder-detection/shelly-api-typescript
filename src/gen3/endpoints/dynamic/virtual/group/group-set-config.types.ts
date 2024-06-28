import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { ButtonOrGroupVirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';
import { RestartRequired } from '@common/restart-required.types';

export interface GroupSetConfigBody extends BaseIdType {
  config: ButtonOrGroupVirtualComponentConfig;
}

export interface GroupSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
