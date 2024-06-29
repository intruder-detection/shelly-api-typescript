import { BaseShellyResponse } from '@common/generic.types';
import { DevicePowerStatus } from '@gen2/endpoints/types/device-power/device-power-common.types';

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
