import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { SwitchConfig } from '@gen2/endpoints/types/switch/switch.common';

export interface SwitchGetConfigBody extends BaseIdType {}

export interface SwitchGetConfigResponse extends BaseShellyResponse<SwitchConfig> {}
