import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { WifiMethods } from '@gen2/methods.enum';

async function wifi() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.33.1');
  const getConfig = await gen2Device.post(WifiMethods.GetConfig);
  console.log(getConfig);
  const getStatus = await gen2Device.post(WifiMethods.GetStatus);
  console.log(getStatus);
  const listAPClients = await gen2Device.post(WifiMethods.ListAPClients);
  console.log(listAPClients);
  const scan = await gen2Device.post(WifiMethods.Scan);
  console.log(scan);
  const setConfig = await gen2Device.post(WifiMethods.SetConfig, {
    config: {
      ap: {
        enable: false,
      },
      sta: {
        pass: '<WIFI_PASSWORD>',
        is_open: false,
        enable: true,
        ssid: '<WIFI_SSID>',
        ipv4mode: 'dhcp',
      }
    }
  });
  console.log(setConfig);
}

async function main() {
  // WifiMethods
  await wifi();
}

void main();
