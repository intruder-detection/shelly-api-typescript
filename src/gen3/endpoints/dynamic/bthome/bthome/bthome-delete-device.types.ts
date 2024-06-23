import { BaseShellyResponse } from '@gen2/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface BTHomeDeleteDeviceBody extends BaseIdType {}

export interface BTHomeDeleteDeviceResponse extends BaseShellyResponse<null> {}
