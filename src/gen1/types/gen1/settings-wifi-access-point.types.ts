export interface SettingsWifiAccessPointRequest {
  enabled: boolean;
  key: string;
}

export interface SettingsWifiAccessPointResponse {
  enabled: boolean;
  ssid: string;
  key: string;
}
