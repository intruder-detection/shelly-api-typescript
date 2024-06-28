import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { ButtonOrGroupVirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface GroupGetConfigBody extends BaseIdType {}

export interface GroupGetConfigResponse extends BaseShellyResponse<ButtonOrGroupVirtualComponentConfig> {}
