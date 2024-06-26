import { BaseShellyResponse } from '@common/generic.types';

export interface BTHomeAddSensorBody {
  config: BTHomeSensorConfig;
}

export interface BTHomeAddSensorResponse extends BaseShellyResponse<BTHomeAddDeviceResponseResult> {}

interface BTHomeAddDeviceResponseResult {
  added: string;
}
