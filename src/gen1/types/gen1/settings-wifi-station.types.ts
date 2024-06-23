export interface SettingsWifiStationRequest {
  enabled: 0 | 1; //	Set to 1 to make STA the current WiFi mode
  ssid: string; //	// The WiFi SSID to associate with
  key: string; //	The password required for associating to the given WiFi SSID
  ipv4_method: 'dhcp' | 'static'; //	dhcp or static
  ip?: string; //	Local IP address if ipv4_method is static
  netmask?: string; //	Mask if ipv4_method is static
  gateway?: string; //	Local gateway IP address if ipv4_method is static
  dns?: string; // DNS address if ipv4_method is static
}

export interface SettingsWifiStationResponse {
  enabled: boolean;
  ssid: string;
  ipv4_method: string;
  ip: string;
  gw: string;
  mask: string;
  dns: string | null;
}
