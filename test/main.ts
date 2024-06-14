import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { WifiMethods } from '@gen2/methods.enum';

async function main() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.33.1');
  const getConfig =  await gen2Device.post(WifiMethods.GetConfig);
  console.log(getConfig);
  const getStatus =  await gen2Device.post(WifiMethods.GetStatus);
  console.log(getStatus);
}

void main();
