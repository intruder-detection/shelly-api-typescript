import { WifiMethods } from '@gen2/methods.enum';
import * as process from 'node:process';
import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';
import { WifiHelpers } from '@helpers/wifi/wifi.helpers';
import * as dns from 'node:dns';
import * as os from 'node:os';
import fs from 'node:fs';
import path from 'node:path';
import { MqttHelpers } from '@helpers/mqtt/mqtt.helpers';
import { MQTTSetConfigBody } from '@gen2/endpoints/types/mqtt/mqtt-set-config.types';

async function waitForCondition(condition: () => Promise<boolean>, timeoutMs: number): Promise<void> {
  const startTime = Date.now();
  while (Date.now() - startTime < timeoutMs) {
    if (await condition()) {
      return;
    }
    await wait(timeoutMs / 10);
  }
  throw new Error('Timeout exceeded while waiting for condition to be met.');
}

export function wait(timeInMs: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), timeInMs));
}

function getMyPrivateIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];

    for (let alias of iface) {
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address;
    }
  }
  return '0.0.0.0';
}

/**
 * This is the code to be uploaded to Shelly BLU GW. The code to be uploaded is a slight variation of: https://github.com/ALLTERCO/shelly-script-examples/blob/01e7849a2f489a21ed85bc51f7b48dcb42a4cd83/ble-shelly-blu.js
 * It will:
 * 1. Actively listen BLE devices
 * 2. Upon receiving a message from a BLE device
 *  a. decode payload
 *  b. build message
 *  c. send message to MQTT server provided as input to this method
 */
function getCodeToUpload(mqttServer: string) {
  const fileCode = fs.readFileSync(path.join(__dirname, 'code-to-upload.js'), 'utf8');

}

/**
 * Requires that you've already connected to the Shelly device's Wi-Fi network before.
 */
async function connectShellyDeviceToMyWifi() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.33.1');

  const wifiHelpers = new WifiHelpers(gen2Device);

  if (!await wifiHelpers.isConnectedToShellyNetwork()) {
    throw new Error('You must be connected to shelly device before using this script');
  }

  const GetConfig = await wifiHelpers.getConfig();
  console.log(GetConfig);
  const GetStatus = await wifiHelpers.getStatus();
  console.log(GetStatus);
  const Scan = await gen2Device.post(WifiMethods.Scan);
  console.log(Scan);

  const SetConfig = await wifiHelpers.setConfig({
    config: {
      ap: {
        enable: false,
      },
      sta: {
        pass: process.env.WIFI_PASSWORD,
        is_open: false,
        enable: true,
        ssid: process.env.WIFI_SSID,
        ipv4mode: 'static',
        ip: process.env.STATIC_IP_FOR_SHELLY_DEVICE,
      },
    },
  });

  console.log(SetConfig);
  if (!SetConfig.error && SetConfig.result) {
    console.log(`Connected device ${SetConfig.src} to Wi-Fi network ${process.env.WIFI_SSID}`);
  } else {
    console.error('Error updating device Wi-Fi network.');
    process.exit(1);
  }

  return SetConfig;
}

/**
 * Will wait 1 minute for Wi-Fi connection and will retry every 6 seconds (1/10 of 1 minute) to verify if there's a connection
 */
async function awaitComputerToReconnectToMyWifi() {
  // Wait for a few seconds until the condition is met
  await waitForCondition(async () => {
    try {
      const res = await dns.promises.resolve('google.com');
      if (res) {
        console.log('Connected to Wifi');
        return true;
      }
    } catch (e) {}
    return false;
  }, 60 * 1000);
}

async function updateMQTTServer(deviceName: string) {
  const gen2Device = new ShellyGen2PlusHTTPAPI(process.env.STATIC_IP_FOR_SHELLY_DEVICE);

  const mqttHelpers = new MqttHelpers(gen2Device);

  await mqttHelpers.setConfig({
    enable: true,
    server: process.env.MQTT_SERVER_URL,
    client_id: deviceName,
    topic_prefix: `shellyblugw-${deviceName}`,
  });
}

/**
 * To run this script, you must be connected to Shelly device Access Point (AP) Wi-Fi network.
 * If you want to connect to the Shelly AP Wi-Fi network you could do it manually or using a script like: github.com/friedrith/node-wifi
 * 1. It will force the device to turn off the Access Point (AP) and move to the STA (station) of your Wi-Fi Network
 */
async function main() {
  // await connectShellyDeviceToMyWifi();
  // await awaitComputerToReconnectToMyWifi();
  // await updateMQTTServer();
  const ipAddress = getMyPrivateIPAddress();
  console.log(ipAddress);
}

void main();
