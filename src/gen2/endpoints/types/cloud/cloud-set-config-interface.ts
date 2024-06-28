import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';
import { CloudConfig } from '@gen2/endpoints/types/cloud/cloud-common.types';

export interface CloudSetConfigBody {
  config: CloudConfig;
}

export interface CloudSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
