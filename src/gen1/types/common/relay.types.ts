export interface Relay {
  name: string | null;
  appliance_type: string;
  ison: boolean;
  has_timer: boolean;
  default_state: string;
  auto_on: number;
  auto_off: number;
  schedule: boolean;
  schedule_rules: any[];
  max_power: number;
}
