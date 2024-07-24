import { BaseShellyResponse } from '@common/generic.types';
import { BTHomeSensorConfig } from '@gen3/endpoints/dynamic/bthome/bthome/bthome-common.types';

export interface BTHomeAddSensorBody {
  config: BTHomeSensorConfig;
}

export interface BTHomeAddSensorResponse extends BaseShellyResponse<BTHomeAddDeviceResponseResult> {}

interface BTHomeAddDeviceResponseResult {
  added: string;
}
