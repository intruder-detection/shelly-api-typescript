export interface SwitchConfig {
  id: number; // Id of the Switch component instance
  name: string | null; // Name of the switch instance
  in_mode: 'momentary' | 'follow' | 'flip' | 'detached' | 'cycle' | 'activate'; // Mode of the associated input
  initial_state: 'off' | 'on' | 'restore_last' | 'match_input'; // Output state to set on power_on
  auto_on: boolean; // True if the "Automatic ON" function is enabled, false otherwise
  auto_on_delay: number; // Seconds to pass until the component is switched back on
  auto_off: boolean; // True if the "Automatic OFF" function is enabled, false otherwise
  auto_off_delay: number; // Seconds to pass until the component is switched back off
  autorecover_voltage_errors: boolean; // True if switch output state should be restored after over/undervoltage error is cleared, false otherwise (shown if applicable)
  input_id: number; // Id of the Input component which controls the Switch. Applicable only to Pro1 and Pro1PM devices. Valid values: 0, 1
  power_limit: number; // Limit (in Watts) over which overpower condition occurs (shown if applicable)
  voltage_limit: number; // Limit (in Volts) over which overvoltage condition occurs (shown if applicable)
  undervoltage_limit: number; // Limit (in Volts) under which undervoltage condition occurs (shown if applicable)
  current_limit: number; // Limit (in Amperes) over which overcurrent condition occurs (shown if applicable)
}

export interface ActiveEnergyCounter {
  total: number; // Total energy consumed in Watt-hours
  by_minute: number[]; // Total energy flow in Milliwatt-hours for the last three complete minutes
  minute_ts: number; // Unix timestamp marking the start of the current minute (in UTC)
}

export interface ReturnedActiveEnergyCounter {
  total: number; // Total returned energy consumed in Watt-hours
  by_minute: number[]; // Returned energy in Milliwatt-hours for the last three complete minutes
  minute_ts: number; // Unix timestamp marking the start of the current minute (in UTC)
}

export interface SwitchComponentStatus {
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
