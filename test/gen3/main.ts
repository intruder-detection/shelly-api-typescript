import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';
import { VirtualMethods } from '@gen3/methods.enum';

async function main() {
  const gen3Device = new ShellyGen2PlusHTTPAPI('192.168.1.10');
  await gen3Device.post(VirtualMethods.Add, {
    type: 'boolean',
    config: {},
  });
}

void main();
