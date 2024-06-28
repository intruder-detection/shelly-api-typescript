import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { ActiveEnergyCounter, ReturnedActiveEnergyCounter } from '@gen2/endpoints/types/switch/switch.common';

export interface SwitchGetStatusBody extends BaseIdType {}

export interface SwitchGetStatusResponse extends BaseShellyResponse<SwitchComponentStatus> {}

interface SwitchComponentStatus {
  id: number; // Id of the Switch component instance
  source: string; // Source of the last command
  output: boolean; // true if the output channel is currently on, false otherwise
  timer_started_at: number; // Unix timestamp, start time of the timer (in UTC)
  timer_duration: number; // Duration of the timer in seconds
  apower: number; // Last measured instantaneous active power (in Watts) delivered to the attached load
  voltage: number; // Last measured voltage in Volts
  current: number; // Last measured current in Amperes
  pf: number; // Last measured power factor
  freq: number; // Last measured network frequency in Hz
  aenergy: ActiveEnergyCounter; // Information about the active energy counter
  ret_aenergy: ReturnedActiveEnergyCounter; // Information about the returned active energy counter
  temperature: TemperatureInfo; // Information about the temperature
  errors: string[]; // Error conditions occurred
}

interface TemperatureInfo {
  tC: number | null; // Temperature in Celsius (null if the temperature is out of the measurement range)
  tF: number | null; // Temperature in Fahrenheit (null if the temperature is out of the measurement range)
}
