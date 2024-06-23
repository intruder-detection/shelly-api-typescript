import { SettingsRequest, SettingsResponse } from '@gen1/types/gen1/settings.types';
import { Relay } from '@gen1/types/common/relay.types';

export interface PlugSettingsRequest extends SettingsRequest {}

export interface PlugSettingsResponse extends SettingsResponse {
  max_power: number;
  led_power_disable: boolean;
  actions: Actions;
  relays: Relay[];
}

interface Actions {
  active: boolean;
  names: string[];
}
