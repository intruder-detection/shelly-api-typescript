export interface SettingsLoginRequest {
  enabled: boolean;
  unprotected: boolean;
  username: string;
  password: string;
}

export interface SettingsLoginResponse {
  enabled: boolean;
  unprotected: boolean;
  username: string;
}
