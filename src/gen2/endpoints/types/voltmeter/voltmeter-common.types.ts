import { BaseIdType } from '@common/base-id.types';

export interface VoltmeterConfig extends BaseIdType {
  name: string | null; // Name of the Voltmeter instance. Name length should not exceed 64 chars
  report_thr: number; // Voltmeter report threshold in volts. Accepted range is device-specific
  range: number; // Input range, which is device-specific. See the table below.
  xvoltage: {
    expr: string | null; // JS expression containing x, where x is the raw value to be transformed (status.voltage)
    // Accepted range: null or [0..100] chars. Both null and "" mean value transformation is disabled.
    unit: string | null; // Unit of the transformed value (status.xvoltage), for example "m/s".
    // Accepted range: null or [0..20] chars. Both null and "" mean value transformation is disabled.
  };
}

export interface VoltmeterStatus {
  id: number; // Id of the Voltmeter component instance
  voltage: number | null; // Voltage in volts (null if valid value could not be obtained)
  xvoltage: number | null; // Voltage transformed with config.xvoltage.expr. Present only when both config.xvoltage.expr and config.xvoltage.unit are set to non-empty values. null if config.xvoltage.expr cannot be evaluated.
  errors?: string[]; // Shown only if at least one error is present. May contain out_of_range, read when there is a problem reading sensor
}
