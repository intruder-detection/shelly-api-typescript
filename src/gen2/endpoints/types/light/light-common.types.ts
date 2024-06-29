import { BaseIdType } from '@common/base-id.types';

export interface LightConfig extends BaseIdType {
  name: string | null;
  in_mode: 'follow' | 'flip' | 'activate' | 'detached' | 'dim' | 'dual_dim';
  initial_state: 'off' | 'on' | 'restore_last';
  auto_on: boolean;
  auto_on_delay: number;
  auto_off: boolean;
  auto_off_delay: number;
  transition_duration: number;
  min_brightness_on_toggle: number;
  night_mode: NightModeConfig;
  button_fade_rate: number;
  button_presets: ButtonPresetsConfig;
  range_map: [number, number] | null;
  power_limit?: number;
  voltage_limit?: number;
  undervoltage_limit?: number;
  current_limit?: number;
}

interface NightModeConfig {
  enable: boolean;
  brightness: number;
  active_between: [string, string]; // Format HH:MM
}

interface ButtonPresetsConfig {
  button_doublepush: ButtonDoublePushConfig | null;
}

interface ButtonDoublePushConfig {
  brightness: number; // Brightness level on double click
}

export interface LightStatus {
  id: number;
  source: string;
  output: boolean;
  brightness: number;
  timer_started_at?: number;
  timer_duration?: number;
  transition?: TransitionInfo;
  temperature?: TemperatureInfo;
  aenergy?: ActiveEnergyInfo;
  apower?: number;
  voltage?: number;
  current?: number;
  calibration?: CalibrationInfo;
}

interface TransitionInfo {
  target: {
    output: boolean;
    brightness: number;
  };
  started_at: number;
  duration: number;
}

interface TemperatureInfo {
  tC: number | null;
  tF: number | null;
}

interface ActiveEnergyInfo {
  total: number;
  by_minute: number[];
  minute_ts: number;
}

interface CalibrationInfo {
  progress: number;
  errors?: string[];
  flags?: string[];
}
