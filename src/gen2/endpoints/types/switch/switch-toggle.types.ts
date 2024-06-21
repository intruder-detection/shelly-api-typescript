import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { WasOn } from '@gen2/endpoints/types/common/was-on.types';

export interface SwitchToggleBody extends BaseIdType {}

export interface SwitchToggleResponse extends BaseShellyResponse<WasOn> {}
