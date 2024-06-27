import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';
import { BTHomeDeviceMethods, BTHomeMethods, VirtualMethods } from '@gen3/methods.enum';

async function virtual() {
  // await gen3Device.post(VirtualMethods.Add, {
  //   type: 'boolean',
  //   config: {},
  // });
}

async function bthome() {
  const gen3Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen3Device.post(BTHomeMethods.GetStatus);
  console.log(GetStatus);

  const GetConfig = await gen3Device.post(BTHomeMethods.GetConfig);
  console.log(GetConfig);

  const SetConfig = await gen3Device.post(BTHomeMethods.SetConfig);
  console.log(SetConfig);

  const AddDevice = await gen3Device.post(BTHomeMethods.AddDevice, {
    config: {
      id: 1,
      name: '',
      addr: '',
      key: '',
    },
  });
  console.log(AddDevice);

  const DeleteDevice = await gen3Device.post(BTHomeMethods.DeleteDevice, {
    id: 1,
  });
  console.log(DeleteDevice);

  const AddSensor = await gen3Device.post(BTHomeMethods.AddSensor, {
    config: {
      id: 1,
      name: '',
      obj_id: 1,
      obj_idx: 1,
      addr: '',
    },
  });
  console.log(AddSensor);

  const DeleteSensor = await gen3Device.post(BTHomeMethods.DeleteSensor, {
    id: 1,
  });
  console.log(DeleteSensor);

  const StartDeviceDiscovery = await gen3Device.post(BTHomeMethods.StartDeviceDiscovery, {
    duration: 1,
  });
  console.log(StartDeviceDiscovery);

  const GetObjectInfos = await gen3Device.post(BTHomeMethods.GetObjectInfos, {
    offset: 1,
    obj_ids: [],
  });
  console.log(GetObjectInfos);
}

async function bthomeDevice() {
  const gen3Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen3Device.post(BTHomeDeviceMethods.GetStatus, { id: 1 });
  console.log(GetStatus);

  const GetConfig = await gen3Device.post(BTHomeDeviceMethods.GetConfig, { id: 1 });
  console.log(GetConfig);

  const SetConfig = await gen3Device.post(BTHomeDeviceMethods.SetConfig, {
    id: 1,
    config: {
      id: 1,
      name: '',
      addr: '',
      key: '',
    },
  });
  console.log(SetConfig);

  const GetKnownObjects = await gen3Device.post(BTHomeDeviceMethods.GetKnownObjects, { id: 1 });
  console.log(GetKnownObjects);
}

async function bthomeSensor() {
  const gen3Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');

  const GetStatus = await gen3Device.post(BTHomeDeviceMethods.GetStatus, { id: 1 });
  console.log(GetStatus);

  const GetConfig = await gen3Device.post(BTHomeDeviceMethods.GetConfig, { id: 1 });
  console.log(GetConfig);

  const SetConfig = await gen3Device.post(BTHomeDeviceMethods.SetConfig, {
    id: 1,
    config: {
      id: 1,
      name: '',
      addr: '',
      key: '',
    },
  });
  console.log(SetConfig);

  const GetKnownObjects = await gen3Device.post(BTHomeDeviceMethods.GetKnownObjects, { id: 1 });
  console.log(GetKnownObjects);
}

// TODO: Need gen3 device to test
async function main() {
  await virtual();
  await bthome();
  await bthomeDevice();
  await bthomeSensor()
}

await main();
