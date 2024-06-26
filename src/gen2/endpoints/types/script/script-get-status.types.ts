import { BaseShellyResponse } from '@common/generic.types';

export interface ScriptGetStatusBody {
  id: number;
}

export interface ScriptGetStatusResponse extends BaseShellyResponse<ScriptGetStatusResponseResult> {}

interface ScriptGetStatusResponseResult {
  id: number;
  running: boolean;
  mem_used: number;
  mem_peak: number;
  mem_free: number;
  errors?: (
    | 'crashed'
    | 'syntax_error'
    | 'reference_error'
    | 'type_error'
    | 'out_of_memory'
    | 'out_of_codespace'
    | 'internal_error'
    | 'not_implemented'
    | 'file_read_error'
    | 'bad_arguments'
  )[];
}
