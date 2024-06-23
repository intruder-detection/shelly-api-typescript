import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { ButtonVirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/button/button-common.types';

export interface ButtonGetConfigBody extends BaseIdType {}

export interface ButtonGetConfigResponse extends BaseShellyResponse<ButtonVirtualComponentConfig> {}
