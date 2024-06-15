import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import {
  BLEMethods,
  CloudMethods,
  ScheduleMethods,
  ShellyExtraMethods,
  ShellyMethods,
  SwitchMethods,
  SystemMethods,
  WifiMethods,
} from '@gen2/methods.enum';

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

  // const SetAuth = await gen2Device.post(ShellyMethods.SetAuth, {
  //   user: 'admin',
  //   realm: 'shellyblugw-a842e33f71f0',
  //   ha1: null,
  // });
  // console.log(SetAuth);

  // const PutUserCA = await gen2Device.post(ShellyMethods.PutUserCA, {
  //   data: null,
  //   append: false,
  // });
  // console.log(PutUserCA);

  // const PutTLSClientCert = await gen2Device.post(ShellyMethods.PutTLSClientCert, {
  //   data: null,
  //   append: false,
  // });
  // console.log(PutTLSClientCert);
  //
  // const PutTLSClientKey = await gen2Device.post(ShellyMethods.PutTLSClientKey, {
  //   data: null,
  //   append: false,
  // });
  // console.log(PutTLSClientKey);

  const GetComponents = await gen2Device.post(ShellyMethods.GetComponents, {
    offset: 0,
    include: [],
  });
  console.log(GetComponents);

  const Shelly = await gen2Device.get(ShellyExtraMethods.Shelly);
  console.log(Shelly);
}

async function ble() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(BLEMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(BLEMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(BLEMethods.SetConfig, {
    config: {
      enable: true,
      rpc: { enable: true },
      observer: { enable: true },
    },
  });
  console.log(SetConfig);
}

async function cloud() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(CloudMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(CloudMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(CloudMethods.SetConfig, {
    config: {
      enable: true,
      // server: 'shelly-api-eu.shelly.cloud:6022/jrpc',
    },
  });
  console.log(SetConfig);
}

async function system() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(SystemMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(SystemMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(SystemMethods.SetConfig, {
    config: {
      location: {
        lat: 39.99,
        lon: -9.38,
      },
    },
  });
  console.log(SetConfig);
}

async function schedule() {
  const gen2Device = new ShellyGen2DeviceHTTPAPI('192.168.1.10');

  function buildSchedule(id: number) {
    return {
      id,
      enable: false,
      timespec: '0 34 17 * * SUN,MON,TUE,WED,THU,FRI,SAT',
      calls: [
        {
          method: SwitchMethods.Set,
          params: {
            id: 0,
            on: false,
          },
        },
      ],
    };
  }

  const job1 = buildSchedule(1);
  const job2 = buildSchedule(2);
  const Create = await gen2Device.post(ScheduleMethods.Create, job1);
  console.log(Create);

  const Update = await gen2Device.post(ScheduleMethods.Update, {
    ...job1,
    calls: [
      {
        method: SwitchMethods.Set,
        params: {
          id: 0,
          on: false,
        },
      },
      {
        method: BLEMethods.SetConfig,
      },
    ],
  });
  console.log(Update);

  const List0 = await gen2Device.post(ScheduleMethods.List);
  console.log(List0);

  await gen2Device.post(ScheduleMethods.Create, job2);

  const List = await gen2Device.post(ScheduleMethods.List);
  console.log(List);

  const Delete = await gen2Device.post(ScheduleMethods.Delete, {
    id: 1,
  });
  console.log(Delete);

  const List2 = await gen2Device.post(ScheduleMethods.List);
  console.log(List2);

  const DeleteAll = await gen2Device.post(ScheduleMethods.DeleteAll);
  console.log(DeleteAll);

  const List3 = await gen2Device.post(ScheduleMethods.List);
  console.log(List3);
}

async function main() {
  // WifiMethods
  // await wifi();
  // ShellyMethods
  // await shelly();
  // BLEMethods
  // await ble();
  // CloudMethods
  // await cloud();
  // SystemMethods
  // await system();
  // ScheduleMethods
  await schedule();
}

void main();
