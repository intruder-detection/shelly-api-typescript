import { ScriptInformation, ScriptListResponse } from '@gen2/endpoints/types/script/script-list.types';
import { ShellyGen2DeviceHTTPAPI } from '@gen2/shelly-gen-2-http-api';
import { ScriptMethods } from '@gen2/methods.enum';
import { ScriptCreateResponse } from '@gen2/endpoints/types/script/script-create.types';
import { ScriptDeleteResponse } from '@gen2/endpoints/types/script/script-delete.types';
import { ScriptStartResponse } from '@gen2/endpoints/types/script/script-start.types';

export class ScriptHelpers {
  constructor(private readonly gen2Device: ShellyGen2DeviceHTTPAPI) {}

  async listScripts(): Promise<ScriptListResponse> {
    return this.gen2Device.post(ScriptMethods.List);
  }

  async deleteScript(id: number): Promise<ScriptDeleteResponse> {
    return this.gen2Device.post(ScriptMethods.Delete, {
      id,
    });
  }

  async createScript(name: string): Promise<ScriptCreateResponse> {
    return await this.gen2Device.post(ScriptMethods.Create, {
      name,
    });
  }

  async getScriptWithName(name: string): Promise<ScriptInformation> {
    const scriptListResponse = await this.listScripts();
    return scriptListResponse.result?.scripts?.find((script) => script.name === name);
  }

  async getScriptWithId(id: number): Promise<ScriptInformation> {
    const scriptListResponse = await this.listScripts();
    return scriptListResponse.result?.scripts?.find((script) => script.id === id);
  }

  async getScriptFullData(id: number) {
    const [scriptConfig, scriptStatus] = await Promise.all([
      this.gen2Device.post(ScriptMethods.GetConfig, { id }),
      this.gen2Device.post(ScriptMethods.GetStatus, { id }),
    ]);
    return {
      config: scriptConfig,
      status: scriptStatus,
    };
  }

  async hasScriptWithId(id: number): Promise<boolean> {
    return (await this.getScriptWithId(id)) !== undefined;
  }

  async hasScriptWithName(name: string): Promise<boolean> {
    return (await this.getScriptWithName(name)) !== undefined;
  }

  async createNewScriptIfNotExists(name: string): Promise<number> {
    const scriptWithName = await this.getScriptWithName(name);
    if (!scriptWithName) {
      const creatScriptResponse = await this.createScript(name);
      return creatScriptResponse.result.id;
    }
    return scriptWithName.id;
  }

  async uploadScriptInChunks(id: number, code: string, chunkSize = 1024): Promise<void> {
    for (let position = 0, append = false; position < code.length; position += chunkSize) {
      const chunk = code.slice(position, position + chunkSize);
      await this.uploadChunk(id, chunk, append);
      append = true;
    }
  }

  async deleteAllScripts(): Promise<number[]> {
    const listOfScripts = await this.listScripts();
    const deletedScriptIds: number[] = [];
    for (let script of listOfScripts.result.scripts) {
      await this.deleteScript(script.id);
      deletedScriptIds.push(script.id);
    }
    return deletedScriptIds;
  }

  async disableScript(id: number): Promise<void> {
    await this.gen2Device.post(ScriptMethods.SetConfig, {
      id,
      config: {
        enable: false,
      },
    });
  }

  async enableScript(id: number): Promise<void> {
    await this.gen2Device.post(ScriptMethods.SetConfig, {
      id,
      config: {
        enable: true,
      },
    });
  }

  async startScript(id: number): Promise<ScriptStartResponse> {
    return await this.gen2Device.post(ScriptMethods.Start, {
      id,
    });
  }

  private async uploadChunk(id: number, codeChunk: string, append: boolean): Promise<void> {
    await this.gen2Device.post(ScriptMethods.PutCode, {
      id,
      code: codeChunk,
      append,
    });
  }
}
