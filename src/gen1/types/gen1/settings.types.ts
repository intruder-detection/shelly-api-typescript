import { Connected } from '@common/connected.types';

export interface SettingsRequest {
  reset: boolean; //	Will perform a factory reset of the device
  ap_roaming_enabled: boolean; //	Enable/disable AP roaming
  ap_roaming_threshold: number; //	Set AP roaming threshold, dBm
  mqtt_enable: boolean; //	Enable connecting to a MQTT broker
  mqtt_server: string; //	MQTT broker IP address and port, ex. 10.0.0.1:1883
  mqtt_clean_session: boolean; //	MQTT clean session flag
  mqtt_retain: boolean; //	MQTT retain flag
  mqtt_user: string; //	MQTT username, leave empty to disable authentication
  mqtt_pass: string; //	MQTT password
  mqtt_id: string; //	MQTT ID -- by default this has the form <shellymodel>-<deviceid> e.g. shelly1-B929CC. If you wish to use custom a MQTT ID, it is recommended that it doesn't exceed 25 characters.
  mqtt_reconnect_timeout_max: number; //	Maximum interval for reconnect attempts
  mqtt_reconnect_timeout_min: number; //	Minimum interval for reconnect attempts
  mqtt_keep_alive: number; //	MQTT keep alive period in seconds
  mqtt_update_period: number; //	Periodic update in seconds, 0 to disable
  mqtt_max_qos: number; //	Max value of QOS for MQTT packets
  coiot_enable: boolean; //	Enable/disable CoIoT
  coiot_update_period: number; //	Update period of CoIoT messages 15..65535s
  coiot_peer: string; //	Set to either mcast to switch CoIoT to multicast or to ip[:port] to switch CoIoT to unicast (port is optional, default is 5683)
  sntp_server: string; //	Time server host to be used instead of the default time.google.com. An empty value disables timekeeping and requires reboot to apply.
  name: string; //	User-configurable device name
  discoverable: boolean; //	Set whether device should be discoverable (i.e. visible)
  timezone: string; //	Timezone identifier
  lat: number; //	Degrees latitude in decimal format, South is negative
  lng: number; //	Degrees longitude in decimal format, -180°..180°
  tzautodetect: boolean; //	Set this to false if you want to set custom geolocation (lat and lng) or custom timezone.
  tz_utc_offset: number; //	UTC offset
  tz_dst: number; //	Daylight saving time 0/1
  tz_dst_auto: number; //	Auto update daylight saving time 0/1
  led_status_disable: boolean; //	For Dimmer 1/2, DW2, i3, RGBW2, Plug, Plug S, EM, 3EM, 1L, 1PM, 2.5 and Button1 Enable/Disable LED indication for network status
  debug_enable: boolean; //	Enable/disable debug file logger
  allow_cross_origin: boolean; //	Allow/forbid HTTP Cross-Origin Resource Sharing
  wifirecovery_reboot_enabled: boolean; //	Enable/disbale WiFi-Recovery reboot. Only applicable for Shelly 1/1PM, Shelly 2, Shelly 2.5, Shelly Plug/PlugS, Shelly EM, Shelly 3EM
}

export interface SettingsResponse {
  device: Device;
  wifi_ap: WifiAp;
  wifi_sta: WifiSta;
  wifi_sta1: WifiSta;
  ap_roaming: ApRoaming;
  mqtt: Mqtt;
  coiot: Coiot;
  sntp: SNTP;
  login: Login;
  pin_code: string;
  name: null;
  fw: string;
  pon_wifi_reset: boolean;
  discoverable: boolean;
  build_info: BuildInfo;
  cloud: Cloud;
  timezone: string;
  lat: number;
  lng: number;
  tzautodetect: boolean;
  tz_utc_offset: number;
  tz_dst: boolean;
  tz_dst_auto: boolean;
  time: string;
  unixtime: number;
  led_status_disable: boolean;
  debug_enable: boolean;
  allow_cross_origin: boolean;
  hwinfo: Hwinfo;
  eco_mode_enabled: boolean;
}

interface ApRoaming {
  enabled: boolean;
  threshold: number;
}

interface BuildInfo {
  build_id: string;
  build_timestamp: Date;
  build_version: string;
}

interface Cloud extends Connected {
  enabled: boolean;
}

interface Coiot {
  enabled: boolean;
  update_period: number;
  peer: string;
}

interface Device {
  type: string;
  mac: string;
  hostname: string;
  num_outputs: number;
  num_meters: number;
}

interface Hwinfo {
  hw_revision: string;
  batch_id: number;
}

interface Login {
  enabled: boolean;
  unprotected: boolean;
  username: string;
}

interface Mqtt {
  enable: boolean;
  server: string;
  user: string;
  id: string;
  reconnect_timeout_max: number;
  reconnect_timeout_min: number;
  clean_session: boolean;
  keep_alive: number;
  max_qos: number;
  retain: boolean;
  update_period: number;
}

interface SNTP {
  server: string;
  enabled: boolean;
}

interface WifiAp {
  enabled: boolean;
  ssid: string;
  key: string;
}

interface WifiSta {
  enabled: boolean;
  ssid: null | string;
  ipv4_method: string;
  ip: null | string;
  gw: null | string;
  mask: null | string;
  dns: null;
}
