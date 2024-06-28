import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';

export interface BTHomeDeviceGetConfigBody extends BaseIdType {}

export interface BTHomeDeviceGetConfigResponse extends BaseShellyResponse<BTHomeDeviceConfig> {}
