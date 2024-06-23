import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { ButtonVirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/button/button-common.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface ButtonSetConfigBody extends BaseIdType {
  config: ButtonVirtualComponentConfig;
}

export interface ButtonSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
