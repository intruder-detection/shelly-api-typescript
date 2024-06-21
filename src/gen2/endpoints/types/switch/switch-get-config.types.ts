import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { SwitchConfig } from '@gen2/endpoints/types/switch/switch.common';

export interface SwitchGetConfigBody extends BaseIdType {}

export interface SwitchGetConfigResponse extends BaseShellyResponse<SwitchConfig> {}
