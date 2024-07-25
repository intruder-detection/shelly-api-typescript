import * as process from 'node:process';
import { ShellyGen2PlusHTTPAPI, WifiHelpers, WifiMethods } from '@intruder-detection/shelly-api-typescript';
import { input, password, select } from '@inquirer/prompts';

async function verifyConnectionToShelly(): Promise<boolean> {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.33.1');

  const wifiHelpers = new WifiHelpers(gen2Device);

  if (!await wifiHelpers.isConnectedToShellyNetwork()) {
    throw new Error('You must be connected to shelly device before using this script');
  }
  return true;
}

async function userInput(): Promise<{ ssid: string, password: string, staticIP?: string }> {
  let [ssid, passwordStr] = [process.env.WIFI_PASSWORD, process.env.WIFI_SSID];
  if (!ssid || !passwordStr) {
    ssid = await input({ message: 'SSID of the network to connect to', required: true });
    passwordStr = await password({ message: 'Enter a silent password?' });
  }

  let staticIP: string = null;
  if (!process.env.STATIC_IP_FOR_SHELLY_DEVICE) {
    const isStaticIp = await select({
      message: `Want to connect the Shelly device to a static IP on the target network. If yes, then you'll be prompted for the static IP afterwards`,
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false },
      ],
    });

    if (isStaticIp) {
      staticIP = await input({ message: 'Static IP to connect Shelly device to', required: true });
    }
  }

  return {
    ssid,
    password: passwordStr,
    staticIP,
  };
}

/**
 * To run this script, you must be connected to Shelly device Access Point (AP) Wi-Fi network.
 * If you want to connect to the Shelly AP Wi-Fi network, you could do it manually or using a script like: github.com/friedrith/node-wifi
 * 1. It will force the device to turn off the Access Point (AP) and move to the STA (station) of your Wi-Fi Network
 */
async function main() {
  console.log(`Verifying that you're connected to the shelly device!`)
  await verifyConnectionToShelly();

  const { password, ssid, staticIP } = await userInput();

  // 192.168.33.1 is the default Shelly IP
  const device = new ShellyGen2PlusHTTPAPI('192.168.33.1');
  const wifiHelpers = new WifiHelpers(device);

  const GetConfig = await wifiHelpers.getConfig();
  console.log(GetConfig);
  const GetStatus = await wifiHelpers.getStatus();
  console.log(GetStatus);
  const Scan = await device.post(WifiMethods.Scan);
  console.log(Scan);

  const SetConfig = await wifiHelpers.setConfig({
    config: {
      ap: {
        enable: false,
      },
      sta: {
        pass: password,
        is_open: false,
        enable: true,
        ssid: ssid,
        ...(staticIP ? { ipv4mode: 'static', ip: staticIP } : { ipv4mode: 'dhcp' }),
      },
    },
  });

  console.log(SetConfig);
  if (!SetConfig.error && SetConfig.result) {
    console.log(`Connected shelly device ${SetConfig.src} to Wi-Fi network ${ssid}. Use script: \x1b[41m get-device-configuration.ts \x1b[0m to get the most up to date configuration`);
  } else {
    console.error('Error updating device Wi-Fi network.');
    process.exit(1);
  }
}

await main();
