import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { BTHomeDeviceConfig } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-common.types';

export interface BTHomeDeviceGetConfigBody extends BaseIdType {}

export interface BTHomeDeviceGetConfigResponse extends BaseShellyResponse<BTHomeDeviceConfig> {}
