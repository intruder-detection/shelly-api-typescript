import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface BTHomeDeviceGetConfigBody extends BaseIdType {}

export interface BTHomeDeviceGetConfigResponse extends BaseShellyResponse<BTHomeDeviceConfig> {}
