import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { SwitchComponentStatus } from '@gen2/endpoints/types/switch/switch.common';

export interface SwitchGetStatusBody extends BaseIdType {}

export interface SwitchGetStatusResponse extends BaseShellyResponse<SwitchComponentStatus> {}
