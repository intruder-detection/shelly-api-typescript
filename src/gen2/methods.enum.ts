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

export type Gen2Methods =
  | ShellyMethods
  | ScheduleMethods
  | WebhookMethods
  | HTTPMethods
  | KVSMethods
  | SystemMethods
  | WifiMethods
  | EthernetMethods
  | BLEMethods
  | CloudMethods
  | MQTTMethods
  | WsMethods
  | ScriptMethods;
