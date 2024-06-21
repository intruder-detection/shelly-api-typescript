import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { SwitchConfig } from '@gen2/endpoints/types/switch/switch.common';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface SwitchSetConfigBody extends BaseIdType {
  config: SwitchConfig;
}

export interface SwitchSetConfigResponse extends BaseShellyResponse<null> {}
