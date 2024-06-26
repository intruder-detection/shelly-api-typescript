import { BaseShellyResponse } from '@common/generic.types';

export interface BTHomeAddDeviceBody {
  config: BTHomeDeviceConfig;
}

export interface BTHomeAddDeviceResponse extends BaseShellyResponse<BTHomeAddDeviceResponseResult> {}

interface BTHomeAddDeviceResponseResult {
  added: string;
}
