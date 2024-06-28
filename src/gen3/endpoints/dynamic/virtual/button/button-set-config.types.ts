import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';
import { ButtonOrGroupVirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface ButtonSetConfigBody extends BaseIdType {
  config: ButtonOrGroupVirtualComponentConfig;
}

export interface ButtonSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
