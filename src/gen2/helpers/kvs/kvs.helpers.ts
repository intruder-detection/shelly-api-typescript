import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { KVSMethods } from '@gen2/methods.enum';
import { KVSListResponse } from '@gen2/endpoints/types/kvs/kvs-list.types';
import { KVSDeleteResponse } from '@gen2/endpoints/types/kvs/kvs-delete.types';
import { KVSSetBody, KVSSetResponse, KVSValue } from '@gen2/endpoints/types/kvs/kvs-set.types';

export class KvsHelpers {
  constructor(private readonly gen2Device: ShellyGen2DeviceHTTPAPI) {}

  async listAll(): Promise<KVSListResponse> {
    return this.gen2Device.post(KVSMethods.List);
  }

  async deleteKey(key: string, etag: string): Promise<KVSDeleteResponse> {
    return this.gen2Device.post(KVSMethods.Delete, {
      key,
      etag
    });
  }

  async hasKey(key: string): Promise<boolean> {
    try {
      await this.gen2Device.post(KVSMethods.Get, { key });
      return true;
    } catch (e: unknown) {
      return false;
    }
  }

  async setKVS(kvs: KVSSetBody): Promise<KVSSetResponse> {
    if (kvs.key.length > 42) {
      throw new Error('Maximum key length is 42');
    }
    if (JSON.stringify(kvs.value).length > 255) {
      throw new Error('Maximum value length is 255');
    }
    const numExistingKeys = Object.keys((await this.listAll()).result.keys).length;
    if (numExistingKeys >= 50) {
      throw new Error('Maximum number of keys is 50');
    }
    return this.gen2Device.post(KVSMethods.Set, kvs);
  }

  async deleteAll(): Promise<void> {
    const allKVS = await this.listAll();
    for (const [key, val] of Object.entries(allKVS.result.keys)) {
      await this.deleteKey(key, val.etag);
    }
  }
}
