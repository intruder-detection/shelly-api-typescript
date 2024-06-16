export interface InputConfig {
  id: number;
  name: string | null;
  type?: 'switch' | 'button' | 'analog' | 'count';
  enable?: boolean;
  invert?: boolean;
  factory_reset?: boolean;
  report_thr?: number;
  range_map?: [number, number] | null;
  range?: number;
  xpercent?: XInfo;
  count_rep_thr?: number;
  freq_window?: number;
  freq_rep_thr?: number;
  xcounts?: XInfo;
  xfreq?: XInfo;
}

interface XInfo {
  expr: string | null;
  unit: string | null;
}

export enum Inputs {
  zero = 'input:0',
  one = 'input:1',
  two = 'input:2',
  three = 'input:3',
}

export type FourInputsDeviceConfig = {
  [Inputs.zero]?: InputConfig;
  [Inputs.one]?: InputConfig;
  [Inputs.two]?: InputConfig;
  [Inputs.three]?: InputConfig;
};

export interface InputIdBody {
  id: number;
}
