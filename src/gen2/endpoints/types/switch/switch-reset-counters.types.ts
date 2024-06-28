import { BaseIdType } from '@common/base-id.types';
import { BaseShellyResponse } from '@common/generic.types';
import { ActiveEnergyCounter, ReturnedActiveEnergyCounter } from '@gen2/endpoints/types/switch/switch.common';

export interface SwitchResetCountersBody extends BaseIdType {
  type: string[];
}

export interface SwitchResetCountersResponse extends BaseShellyResponse<SwitchResetCountersResponseResult> {}

interface SwitchResetCountersResponseResult {
  aenergy: Pick<ActiveEnergyCounter, 'total'>; // Information about the active energy counter
  ret_aenergy: Pick<ReturnedActiveEnergyCounter, 'total'>; // Information about the returned active energy counter
}
