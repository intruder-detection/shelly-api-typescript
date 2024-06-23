export enum ShellyEndpoints {
  Shelly = 'shelly',

  Settings = 'settings',
  SettingsWifiAccessPoint = 'settings/ap',
  SettingsWifiStation = 'settings/sta',
  SettingsLogin = 'settings/login',
  SettingsCloud = 'settings/cloud',
  SettingsActions = 'settings/actions',

  Status = 'status',

  Reboot = 'reboot',

  OTA = 'ota', // NOTICE: https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Shelly/#http-endpoint-ota
  OTACheck = 'ota/check',

  WifiScan = 'wifiscan',

  DebugLog = 'debug/log',
  DebugLog1 = 'debug/log1',

  CoIoTInformation = 'cit/d', // https://github.com/shelly-tools/coiot

  WifiStationCacheReset = 'sta_cache_reset',
}

export enum Shelly1And1PMEndpoints {
  SettingsRelay0 = 'settings/relay/0',
  SettingsPower0 = 'settings/power/0',
  SettingsExternalHumidity0 = 'settings/ext_humidity/0',
  Relay0 = 'relay/0',
}

export enum Shelly1LEndpoints {
  SettingsRelay0 = 'settings/relay/0',
  SettingsPower0 = 'settings/power/0',
  Relay0 = 'relay/0',
}

export enum Shelly2Endpoints {
  SettingsRelayIndex = `settings/relay/:index`,
  SettingsRollerIndex = 'settings/roller/:index',
  MeterIndex = 'meter/:index',
  RelayIndex = 'relay/:index',
  RollerIndex = 'roller/:index',
  RollerIndexCalibrate = 'roller/:index/calibrate',
}

export enum Shelly2_5Endpoints {
  SettingsRelayIndex = `settings/relay/:index`,
  SettingsRollerIndex = 'settings/roller/:index',
  SettingsFavoritesIndex = 'settings/favorites/:index',
  MeterIndex = 'meter/:index',
  RelayIndex = 'relay/:index',
  RollerIndex = 'roller/:index',
  RollerIndexCalibrate = 'roller/:index/calibrate',
}

export enum ShellyMotionEndpoints {
  PowerOff = 'poweroff',
}

export enum ShellyPlugPlugSEndpoints {
  SettingsRelay0 = 'settings/relay/0',
  Meter0 = 'meter/0',
  Relay0 = 'relay/0',
}

export type Gen1Endpoints =
  | ShellyEndpoints
  | Shelly1And1PMEndpoints
  | Shelly1LEndpoints
  | Shelly2Endpoints
  | Shelly2_5Endpoints
  | ShellyMotionEndpoints
  | ShellyPlugPlugSEndpoints;
