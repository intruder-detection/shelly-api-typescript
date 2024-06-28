import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';

export interface BTHomeDeleteDeviceBody extends BaseIdType {}

export interface BTHomeDeleteDeviceResponse extends BaseShellyResponse<null> {}
