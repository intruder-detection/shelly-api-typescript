import { BaseShellyResponse } from '@gen2/generic.types';

export interface GetDeviceInfoBody {
  ident: boolean;
}

export interface GetDeviceInfoResponse extends BaseShellyResponse<GetDeviceInfoResponseResult> {}

export interface GetDeviceInfoResponseResult {
  name: string;
  id: string;
  mac: string;
  slot: number;
  key: string;
  batch: string;
  fw_sbits: string;
  model: string;
  gen: number;
  fw_id: string;
  ver: string;
  app: string;
  auth_en: boolean;
  auth_domain: string;
}
