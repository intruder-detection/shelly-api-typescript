import { input } from '@inquirer/prompts';
import { ShellyGen2PlusHTTPAPI, WifiHelpers } from '@intruder-detection/shelly-api-typescript';

async function getWifiConfigurationForDevice(): Promise<void> {
  const ip = await input({ message: 'Provide Shelly device IP to verify connection', required: true });
  try {
    const device = new ShellyGen2PlusHTTPAPI(ip);
    const wifiHelpers = new WifiHelpers(device);
    const config = await wifiHelpers.getConfig();
    console.log(`Configuration is:`, config);
    const status = await wifiHelpers.getStatus();
    console.log(`Status is:`, status);
  } catch (e) {
    console.error(`\x1b[41m Failed to connect to device with IP: ${ip} \x1b[0m`);
  }
}

while (true) {
  await getWifiConfigurationForDevice();
}
