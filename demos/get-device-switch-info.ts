import { input } from '@inquirer/prompts';
import { ShellyGen2PlusHTTPAPI, ShellyHelpers, SwitchMethods } from '@intruder-detection/shelly-api-typescript';

async function getSwitchConfigurationForDevice(): Promise<void> {
  const ip = await input({ message: 'Provide Shelly device IP to get Switch information', required: true });
  try {
    const device = new ShellyGen2PlusHTTPAPI(ip);
    const globalConfig = await new ShellyHelpers(device).getConfig();
    console.log(`Device's global config is:`, globalConfig);
    const config = await device.post(SwitchMethods.GetConfig, { id: 0 });
    console.log(`Switch Configuration is:`, config);
    const status = await device.post(SwitchMethods.GetStatus, { id: 0 });
    console.log(`Switch Status is:`, status);
    const toggle = await device.post(SwitchMethods.Toggle, { id: 0 });
    console.log(`Switch toggle response is:`, toggle);
  } catch (e) {
    console.error(`\x1b[41m Failed to connect to device with IP: ${ip} \x1b[0m`);
  }
}

while (true) {
  await getSwitchConfigurationForDevice();
}
