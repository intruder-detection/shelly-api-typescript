export enum ShellyMethods {
  GetStatus = 'Shelly.GetStatus',
  GetConfig = 'Shelly.GetConfig',
  ListMethods = 'Shelly.ListMethods',
  GetDeviceInfo = 'Shelly.GetDeviceInfo',
  ListProfiles = 'Shelly.ListProfiles',
  SetProfile = 'Shelly.SetProfile',
  ListTimezones = 'Shelly.ListTimezones',
  DetectLocation = 'Shelly.DetectLocation',
  CheckForUpdate = 'Shelly.CheckForUpdate',
  Update = 'Shelly.Update',
  FactoryReset = 'Shelly.FactoryReset',
  ResetWiFiConfig = 'Shelly.ResetWiFiConfig',
  Reboot = 'Shelly.Reboot',
  SetAuth = 'Shelly.SetAuth',
  PutUserCA = 'Shelly.PutUserCA',
  PutTLSClientCert = 'Shelly.PutTLSClientCert',
  PutTLSClientKey = 'Shelly.PutTLSClientKey',
  GetComponents = 'Shelly.GetComponents',
}

export enum ShellyExtraMethods {
  Shelly = 'shelly',
}

export enum ScheduleMethods {
  Create = 'Schedule.Create',
  Update = 'Schedule.Update',
  List = 'Schedule.List',
  Delete = 'Schedule.Delete',
  DeleteAll = 'Schedule.DeleteAll',
}

export enum WebhookMethods {
  ListSupported = 'Webhook.ListSupported',
  List = 'Webhook.List',
  Create = 'Webhook.Create',
  Update = 'Webhook.Update',
  Delete = 'Webhook.Delete',
  DeleteAll = 'Webhook.DeleteAll',
}

export enum HTTPMethods {
  GET = 'HTTP.GET',
}

export enum KVSMethods {
  Set = 'KVS.Set',
  Get = 'KVS.Get',
  GetMany = 'KVS.GetMany',
  List = 'KVS.List',
  Delete = 'KVS.Delete',
}

export enum SystemMethods {
  SetConfig = 'Sys.SetConfig',
  GetConfig = 'Sys.GetConfig',
  GetStatus = 'Sys.GetStatus',
}

export enum WifiMethods {
  GetConfig = 'WiFi.GetConfig',
  SetConfig = 'WiFi.SetConfig',
  GetStatus = 'WiFi.GetStatus',
  Scan = 'WiFi.Scan',
  ListAPClients = 'Wifi.ListAPClients',
}

export enum EthernetMethods {
  SetConfig = 'Eth.SetConfig',
  GetConfig = 'Eth.GetConfig',
  GetStatus = 'Eth.GetStatus',
}

export enum BLEMethods {
  SetConfig = 'BLE.SetConfig',
  GetConfig = 'BLE.GetConfig',
  GetStatus = 'BLE.GetStatus',
}

export enum CloudMethods {
  SetConfig = 'Cloud.SetConfig',
  GetConfig = 'Cloud.GetConfig',
  GetStatus = 'Cloud.GetStatus',
}

export enum MQTTMethods {
  SetConfig = 'MQTT.SetConfig',
  GetConfig = 'MQTT.GetConfig',
  GetStatus = 'MQTT.GetStatus',
}

export enum WsMethods {
  SetConfig = 'Ws.SetConfig',
  GetConfig = 'Ws.GetConfig',
  GetStatus = 'Ws.GetStatus',
}

export enum ScriptMethods {
  Create = 'Script.Create',
  Delete = 'Script.Delete',
  Eval = 'Script.Eval',
  GetCode = 'Script.GetCode',
  GetConfig = 'Script.GetConfig',
  GetStatus = 'Script.GetStatus',
  List = 'Script.List',
  PutCode = 'Script.PutCode',
  SetConfig = 'Script.SetConfig',
  Start = 'Script.Start',
  Stop = 'Script.Stop',
}

export enum SwitchMethods {
  Set = 'Switch.Set',
  Toggle = 'Switch.Toggle',
  SetConfig = 'Switch.SetConfig',
  GetConfig = 'Switch.GetConfig',
  GetStatus = 'Switch.GetStatus',
  ResetCounters = 'Switch.ResetCounters',
}

export enum InputMethods {
  GetConfig = 'Input.GetConfig',
  SetConfig = 'Input.SetConfig',
  GetStatus = 'Input.GetStatus',
  CheckExpression = 'Input.CheckExpression',
  ResetCounters = 'Input.ResetCounters',
  Trigger = 'Input.Trigger',
}

export enum ModbusMethods {
  SetConfig = 'Modbus.SetConfig',
  GetConfig = 'Modbus.GetConfig',
  GetStatus = 'Modbus.GetStatus',
}

export enum VoltmeterMethods {
  SetConfig = 'Voltmeter.SetConfig',
  GetConfig = 'Voltmeter.GetConfig',
  GetStatus = 'Voltmeter.GetStatus',
}

export enum CoverMethods {
  SetConfig = 'Cover.SetConfig',
  GetConfig = 'Cover.GetConfig',
  GetStatus = 'Cover.GetStatus',
  Open = 'Cover.Open',
  Close = 'Cover.Close',
  Stop = 'Cover.Stop',
  GoToPosition = 'Cover.GoToPosition',
  Calibrate = 'Cover.Calibrate',
  ResetCounters = 'Cover.ResetCounters',
}

export enum LightMethods {
  SetConfig = 'Light.SetConfig',
  GetConfig = 'Light.GetConfig',
  GetStatus = 'Light.GetStatus',
  Set = 'Light.Set',
  Toggle = 'Light.Toggle',
  Calibrate = 'Light.Calibrate',
  ResetCounters = 'Light.ResetCounters',
}

export type Gen2Methods =
  | BLEMethods
  | CloudMethods
  | CoverMethods
  | EthernetMethods
  | HTTPMethods
  | InputMethods
  | KVSMethods
  | LightMethods
  | MQTTMethods
  | ScheduleMethods
  | ScriptMethods
  | ShellyMethods
  | ShellyExtraMethods
  | SwitchMethods
  | SystemMethods
  | VoltmeterMethods
  | WebhookMethods
  | WifiMethods
  | WsMethods;
