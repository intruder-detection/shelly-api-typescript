import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { ButtonOrGroupVirtualComponentConfig } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface GroupGetConfigBody extends BaseIdType {}

export interface GroupGetConfigResponse extends BaseShellyResponse<ButtonOrGroupVirtualComponentConfig> {}
