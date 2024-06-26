import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { SwitchConfig } from '@gen2/endpoints/types/switch/switch.common';
import { BaseShellyResponse } from '@common/generic.types';

export interface SwitchSetConfigBody extends BaseIdType {
  config: SwitchConfig;
}

export interface SwitchSetConfigResponse extends BaseShellyResponse<null> {}
