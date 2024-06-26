import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { ButtonOrGroupVirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface ButtonGetConfigBody extends BaseIdType {}

export interface ButtonGetConfigResponse extends BaseShellyResponse<ButtonOrGroupVirtualComponentConfig> {}
