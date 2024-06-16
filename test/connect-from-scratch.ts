import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { WifiMethods } from '@gen2/methods.enum';

/**
 * To run this script you must be connected to Shelly device Access Point (AP) WiFi network.
 * 1. It will force the device to turn off the Access Point (AP) and move to the STA (station) of your WiFi Network
 */
async function main() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.33.1');

  const GetConfig = await gen2Device.post(WifiMethods.GetConfig);
  console.log(GetConfig);
  const GetStatus = await gen2Device.post(WifiMethods.GetStatus);
  console.log(GetStatus);
  const Scan = await gen2Device.post(WifiMethods.Scan);
  console.log(Scan);

  const SetConfig = await gen2Device.post(WifiMethods.SetConfig, {
    config: {
      ap: {
        enable: false,
      },
      sta: {
        pass: process.env.WIFI_PASSWORD,
        is_open: false,
        enable: true,
        ssid: process.env.WIFI_SSID,
        ipv4mode: 'dhcp',
      },
    },
  });
  console.log(SetConfig);
}

void main();
