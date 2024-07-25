import {
  BLEMethods,
  CloudMethods, CoverMethods,
  EthernetMethods,
  InputMethods,
  KVSMethods, LightMethods, ModbusMethods,
  MQTTMethods,
  ScheduleMethods,
  ScriptMethods,
  ShellyExtraMethods,
  ShellyMethods,
  SwitchMethods,
  SystemMethods, VoltmeterMethods,
  WebhookMethods,
  WifiMethods,
  WsMethods,
  ScriptHelpers,
  KvsHelpers,
  InputHelpers,
  ShellyHelpers,
  WebhooksHelpers,
  ShellyGen2PlusHTTPAPI
} from  '@intruder-detection/shelly-api-typescript';
import * as fs from 'node:fs';
import * as path from 'node:path';

async function shelly() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

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

async function wifi() {
  // By default when the device starts for the first time, the IP of the device on it's AP is 192.168.33.1
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.33.1');

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

async function ble() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

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
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

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
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

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
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

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

// Test all script methods
async function script() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const List = await gen2Device.post(ScriptMethods.List);
  console.log(List);

  const GetStatus = await gen2Device.post(ScriptMethods.GetStatus, {
    id: 1,
  });
  console.log(GetStatus);

  const SetConfig = await gen2Device.post(ScriptMethods.SetConfig, {
    id: 1,
    config: {
      id: 1,
      name: 'TestingStuff',
      enable: true,
    },
  });
  console.log(SetConfig);

  const GetConfig = await gen2Device.post(ScriptMethods.GetConfig, {
    id: 1,
  });
  console.log(GetConfig);

  const GetCode = await gen2Device.post(ScriptMethods.GetCode, {
    id: 1,
    offset: 500,
  });
  console.log(GetCode);

  const Create = await gen2Device.post(ScriptMethods.Create, {
    name: 'testin2',
  });
  const idOfCreatedScript = Create.result.id;
  console.log(Create);

  const PutCode = await gen2Device.post(ScriptMethods.PutCode, {
    id: idOfCreatedScript,
    code: 'let a = 5 +5',
    append: false,
  });
  console.log(PutCode);

  const Start = await gen2Device.post(ScriptMethods.Start, {
    id: idOfCreatedScript,
  });
  console.log(Start);

  const Eval = await gen2Device.post(ScriptMethods.Eval, {
    id: idOfCreatedScript,
    code: 'let a = 5+5',
  });
  console.log(Eval);

  const Delete = await gen2Device.post(ScriptMethods.Delete, {
    id: idOfCreatedScript,
  });
  console.log(Delete);
}

// Test all script methods but using the helper methods
async function scriptHelpers() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');
  const scriptHelpers = new ScriptHelpers(gen2Device);
  await scriptHelpers.listScripts();
  await scriptHelpers.deleteAllScripts();
  const createdScript = await scriptHelpers.createScript('Test Bluetooth');
  const idOfScript = createdScript.result.id;
  await scriptHelpers.uploadScriptInChunks(idOfScript, fs.readFileSync(path.join(__dirname, 'code-to-upload.js'), 'utf8'));

  const updatedScript = await scriptHelpers.getScriptFullData(idOfScript);
  console.log(updatedScript);
  await scriptHelpers.startScript(idOfScript);
}

async function eth() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(EthernetMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(EthernetMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(EthernetMethods.SetConfig, {
    config: {
      enable: false,
      ipv4mode: 'dhcp',
      ip: null,
      netmask: null,
      gw: null,
      nameserver: null,
    },
  });
  console.log(SetConfig);
}

async function kvs() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const List = await gen2Device.post(KVSMethods.List);
  const GetMany = await gen2Device.post(KVSMethods.GetMany, {
    match: 'lordy',
  });
  const Set = await gen2Device.post(KVSMethods.Set, {
    key: 'my-key',
    value: 101,
    // etag: 'my-e-tag',
  });
  const Get = await gen2Device.post(KVSMethods.Get, {
    key: 'my-key',
  });
  console.log(Get);
}

async function kvsHelpers() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');
  const kvsHelpers = new KvsHelpers(gen2Device);

  await kvsHelpers.deleteAll();

  const created = await kvsHelpers.setKey({ key: 'test', value: 10 });
  for (let i = 0; i < 49; i++) {
    await kvsHelpers.setKey({ key: `test_${i}`, value: 10 });
  }
  const list = await kvsHelpers.listAll();
  const hasKey = await kvsHelpers.hasKey('test');
  const deleteAll = await kvsHelpers.deleteAll();
}

async function input() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.9');

  const GetStatusOfDevice = await gen2Device.post(ShellyMethods.GetStatus);
  console.log(GetStatusOfDevice);

  const GetConfigOfDevice = await gen2Device.post(ShellyMethods.GetConfig);
  console.log(GetConfigOfDevice);

  const inputHelpers = new InputHelpers(gen2Device);
  const inputs = await inputHelpers.getInputs();
  for (const input of inputs) {
    const [config, status] = await Promise.all([inputHelpers.getStatus(input.id), inputHelpers.getConfig(input.id)]);
    console.log(config, status);
  }

  const SetConfig = await gen2Device.post(InputMethods.SetConfig, {
    id: 2,
    config: {
      id: 2,
      name: 'input dos',
      type: 'button',
      enable: true,
    },
  });
  console.log(SetConfig);

  // TODO: Need device to test
  // const ResetCounters = await gen2Device.post(InputMethods.ResetCounters, {
  //   id: 1,
  //   type: ['test'],
  // });
  // console.log(ResetCounters);

  // TODO: Need device to test
  // const CheckExpression = await gen2Device.post(InputMethods.CheckExpression, {
  //   expr: 'let x=5+5',
  //   inputs: [],
  // });
  // console.log(CheckExpression);

  // TODO: Need device to test
  // const Trigger = await gen2Device.post(InputMethods.Trigger, {
  //   id: 1,
  //   event_type: 'single_push',
  // });
  // console.log(Trigger);
}

async function mqtt() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.9');
  const shellyHelpers = new ShellyHelpers(gen2Device);

  const [deviceConfig, deviceStatus] = await Promise.all([shellyHelpers.getConfig(), shellyHelpers.getStatus()]);

  const GetStatus = await gen2Device.post(MQTTMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(MQTTMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(MQTTMethods.SetConfig, {
    config: {
      enable: true,
      server: '192.168.1.6',
      client_id: 'shelly-gateway',
      topic_prefix: deviceConfig.src,
      rpc_ntf: true,
      status_ntf: true,
    },
  });
  console.log(SetConfig);

  // await shellyHelpers.reboot({ delay_ms: 500 });
}

async function webhooks() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const ListSupported = await gen2Device.post(WebhookMethods.ListSupported);
  const List = await gen2Device.post(WebhookMethods.List);
  const webhookHelpers = new WebhooksHelpers(gen2Device);
  const Create = await webhookHelpers.creatWebhook({
    id: 1,
    event: '',
    name: 'A'.repeat(300),
    cid: 1,
    enable: false,
    ssl_ca: null,
    urls: ['https://www.google.com'],
    active_between: [],
    condition: null,
    repeat_period: 0,
  });
  // TODO: Need device to test
  const Delete = await gen2Device.post(WebhookMethods.Delete, { id: 1 });
  // TODO: Need device to test
  const DeleteAll = await gen2Device.post(WebhookMethods.DeleteAll);
}

async function websocket() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(WsMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(WsMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(WsMethods.SetConfig, {
    config: {
      enable: false,
      server: 'http://www.google.com',
      ssl_ca: '*',
    },
  });
  console.log(SetConfig);
}

async function switch_() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(SwitchMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(SwitchMethods.GetConfig, { id: 1 });
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(SwitchMethods.SetConfig, {
    id: 1,
    config: {
      id: 1,
      name: 'Some switch',
      in_mode: 'activate',
      initial_state: 'off',
      auto_on: false,
      auto_on_delay: -1,
      auto_off: false,
      auto_off_delay: -1,
      autorecover_voltage_errors: false,
      input_id: 0,
      power_limit: 2500,
      voltage_limit: 10,
      undervoltage_limit: 5,
      current_limit: 1,
    },
  });
  console.log(SetConfig);

  const Set = await gen2Device.post(SwitchMethods.Set, {
    id: 1,
    on: true,
    toggle_after: 10,
  });
  console.log(Set);

  const Toggle = await gen2Device.post(SwitchMethods.Toggle, {
    id: 1,
  });
  console.log(Toggle);

  const ResetCounters = await gen2Device.post(SwitchMethods.ResetCounters, {
    id: 1,
    type: [],
  });
  console.log(ResetCounters);
}

async function modbus() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(ModbusMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(ModbusMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(ModbusMethods.SetConfig, {
    config: {
      enable: false,
    },
  });
  console.log(SetConfig);
}

async function voltmeter() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(VoltmeterMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(VoltmeterMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(VoltmeterMethods.SetConfig, {
    config: {
      id: 1,
      name: '',
      report_thr: 1,
      range: 1,
      xvoltage: {
        expr: null,
        unit: null,
      }
    },
  });
  console.log(SetConfig);
}

async function cover() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(CoverMethods.GetStatus, {id: 1});
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(CoverMethods.GetConfig, {id :1});
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(CoverMethods.SetConfig, {
    id: 1,
    config: {
      name: '',
    },
  });
  console.log(SetConfig);

  const Calibrate = await gen2Device.post(CoverMethods.Calibrate, {
    id: 1,
  });
  console.log(Calibrate);

  const Open = await gen2Device.post(CoverMethods.Open, {
    id: 1,
    duration: 1,
  });
  console.log(Open);

  const Close = await gen2Device.post(CoverMethods.Close, {
    id: 1,
    duration: 1,
  });
  console.log(Close);

  const Stop = await gen2Device.post(CoverMethods.Stop, {
    id: 1,
  });
  console.log(Stop);

  const GoToPosition = await gen2Device.post(CoverMethods.GoToPosition, {
    id: 1,
    pos: 1,
    rel: 1,
  });
  console.log(GoToPosition);

  const ResetCounters = await gen2Device.post(CoverMethods.ResetCounters, {
    id: 1,
    type: [],
  });
  console.log(ResetCounters);
}

async function light() {
  const gen2Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen2Device.post(LightMethods.GetStatus, {id: 1});
  console.log(GetStatus);

  const GetConfig = await gen2Device.post(LightMethods.GetConfig, {id :1});
  console.log(GetConfig);

  const SetConfig = await gen2Device.post(LightMethods.SetConfig, {
    id: 1,
    config: {
      name: '',
    },
  });
  console.log(SetConfig);

  const Calibrate = await gen2Device.post(LightMethods.Calibrate, {
    id: 1,
  });
  console.log(Calibrate);

  const Set = await gen2Device.post(LightMethods.Set, {
    id: 1,
  });
  console.log(Set);

  const Toggle = await gen2Device.post(LightMethods.Toggle, {
    id: 1,
  });
  console.log(Toggle);

  const ResetCounters = await gen2Device.post(LightMethods.ResetCounters, {
    id: 1,
    type: [],
  });
  console.log(ResetCounters);
}

async function main() {
  // ShellyMethods
  // await shelly();
  // WifiMethods
  // await wifi();
  // BLEMethods
  // await ble();
  // CloudMethods
  // await cloud();
  // SystemMethods
  // await system();
  // ScheduleMethods
  // await schedule();
  // ScriptMethods
  // await script();
  // await scriptHelpers();
  // EthernetMethods TODO: Test with device that has ethernet
  // await eth();
  // KVSMethods
  // await kvs();
  // await kvsHelpers();
  // InputMethods
  // await input();
  // MQTTMethods
  // await mqtt();
  // WebhookMethods TODO: Test with device that has webhooks
  // await webhooks();
  // WsMethods
  // await websocket();
  // SwitchMethods
  // await switch_();
  // ModbusMethods TODO: Test with device that has modbus
  // await modbus();
  // VoltmeterMethods TODO: Test with device that has voltmeter
  // await voltmeter();
  // CoverMethods TODO: Test with device that has cover
  // await cover();
  // CoverMethods TODO: Test with device that has cover
  // await light();
}

void main();
