export interface SettingsActionsResponse {
  btn_on_url: URL[];
  out_on_url: URL[];
  out_off_url: URL[];
}

interface URL {
  index: number;
  urls: any[];
  enabled: boolean;
}
