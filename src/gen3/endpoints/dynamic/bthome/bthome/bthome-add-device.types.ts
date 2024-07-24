import { BaseShellyResponse } from '@common/generic.types';
import { BTHomeDeviceConfig } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-common.types';

export interface BTHomeAddDeviceBody {
  config: BTHomeDeviceConfig;
}

export interface BTHomeAddDeviceResponse extends BaseShellyResponse<BTHomeAddDeviceResponseResult> {}

interface BTHomeAddDeviceResponseResult {
  added: string;
}
