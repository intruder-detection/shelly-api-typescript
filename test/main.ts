import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { ShellyMethods, WifiMethods } from '@gen2/methods.enum';

async function wifi() {
  // By default when the device starts for the first time, the IP of the device on it's AP is 192.168.33.1
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
      },
    },
  });
  console.log(setConfig);
}

async function shelly() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.1.10');

  const getStatus = await gen2Device.post(ShellyMethods.GetStatus);
  console.log(getStatus);

  const getConfig = await gen2Device.post(ShellyMethods.GetConfig);
  console.log(getConfig);

  const listMethods = await gen2Device.post(ShellyMethods.ListMethods);
  console.log(listMethods);

  const getDeviceInfo = await gen2Device.post(ShellyMethods.GetDeviceInfo, {
    ident: true,
  });
  console.log(getDeviceInfo);

  const ListProfiles = await gen2Device.post(ShellyMethods.ListProfiles);
  console.log(ListProfiles);

  const ListTimezones = await gen2Device.post(ShellyMethods.ListTimezones);
  console.log(ListTimezones);

  const DetectLocation = await gen2Device.post(ShellyMethods.DetectLocation);
  console.log(DetectLocation);

  const CheckForUpdate = await gen2Device.post(ShellyMethods.CheckForUpdate);
  console.log(CheckForUpdate);

  // const Update = await gen2Device.post(ShellyMethods.Update, {
  //   stage: 'stable',
  // });
  // console.log(Update);

  // const FactoryReset = await gen2Device.post(ShellyMethods.FactoryReset);
  // console.log(FactoryReset);

  // const ResetWiFiConfig = await gen2Device.post(ShellyMethods.ResetWiFiConfig);
  // console.log(ResetWiFiConfig);

  // const Reboot = await gen2Device.post(ShellyMethods.Reboot, {
  //   delay_ms: 5000,
  // });
  // console.log(Reboot);

  const SetAuth = await gen2Device.post(ShellyMethods.SetAuth, {
    user: 'admin',
    realm: 'shellyblugw-a842e33f71f0',
    ha1: null,
  });
  console.log(SetAuth);
}

async function main() {
  // WifiMethods
  // await wifi();
  // ShellyMethods
  await shelly();
}

void main();
