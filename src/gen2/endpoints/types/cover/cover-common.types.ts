import { BaseIdType } from '@common/base-id.types';
import { ActiveEnergyCounter } from '@gen2/endpoints/types/switch/switch.common';

export interface CoverConfig extends BaseIdType {
  name: string;
  in_mode?: 'single' | 'dual' | 'detached';
  initial_state: 'open' | 'closed' | 'stopped';
  power_limit: number;
  voltage_limit: number;
  undervoltage_limit: number;
  current_limit: number;
  motor: MotorConfig;
  maxtime_open: number;
  maxtime_close: number;
  swap_inputs?: boolean;
  invert_directions: boolean;
  obstruction_detection?: ObstructionDetectionConfig;
  safety_switch?: SafetySwitchConfig;
}

interface MotorConfig {
  idle_power_thr: number;
  idle_confirm_period: number;
}

interface ObstructionDetectionConfig {
  enable: boolean;
  direction: 'open' | 'close' | 'both';
  action: 'stop' | 'reverse';
  power_thr: number;
  holdoff: number;
}

interface SafetySwitchConfig {
  enable: boolean;
  direction: 'open' | 'close' | 'both';
  action: 'stop' | 'reverse' | 'pause';
  allowed_move: 'reverse' | null;
}

export interface CoverStatus {
  id: number;
  source: string;
  state: 'open' | 'closed' | 'opening' | 'closing' | 'stopped' | 'calibrating';
  apower: number;
  voltage: number;
  current: number;
  pf: number;
  freq: number;
  aenergy: ActiveEnergyCounter;
  current_pos?: number | null;
  target_pos?: number | null;
  move_timeout?: number;
  move_started_at?: number;
  pos_control: boolean;
  last_direction: 'open' | 'close' | null;
  temperature?: TemperatureInfo;
  errors?: string[];
}

interface TemperatureInfo {
  value: number; // Temperature value
  unit: string; // Unit of temperature, e.g., 'C' for Celsius
}
