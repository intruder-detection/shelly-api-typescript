import { WifiMethods } from '@gen2/methods.enum';
import * as process from 'node:process';
import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';

/**
 * To run this script, you must be connected to Shelly device Access Point (AP) Wi-Fi network.
 * If you want to connect to the Shelly AP Wi-Fi network you could do it manually or using a script like: github.com/friedrith/node-wifi
 * 1. It will force the device to turn off the Access Point (AP) and move to the STA (station) of your Wi-Fi Network
 */
async function main() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.33.1');

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
  console.log(`Connected device ${SetConfig.src} to Wi-Fi network ${process.env.WIFI_SSID}`);
}

void main();
