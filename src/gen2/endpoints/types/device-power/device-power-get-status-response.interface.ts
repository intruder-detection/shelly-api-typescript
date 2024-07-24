import { BaseShellyResponse } from '@common/generic.types';

export interface DevicePowerGetStatusResponse extends BaseShellyResponse<DevicePowerStatus> {}

interface DevicePowerStatus {
  id: number;
  battery: BatteryInfo;
  external?: ExternalPowerInfo;
  errors: string[];
}

interface BatteryInfo {
  V: number | null;
  percent: number | null;
}

interface ExternalPowerInfo {
  present: boolean;
}
