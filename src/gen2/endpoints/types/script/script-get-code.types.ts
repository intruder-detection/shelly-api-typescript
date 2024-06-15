import { BaseShellyResponse } from '@gen2/generic.types';

export interface ScriptGetCodeBody {
  id: number; // Id of the created script
  offset?: number; // Byte offset from the beginning. Default value: 0. Optional
  len?: number; // Bytes to read. Default value: maximum possible number of bytes till the end is reached. Optional
}

export interface ScriptGetCodeResponse extends BaseShellyResponse <ScriptGetCodeResponseResult> {}

interface ScriptGetCodeResponseResult {
  data: string; // The requested data chunk
  left: number; // Number of bytes remaining till the end of the code
}
