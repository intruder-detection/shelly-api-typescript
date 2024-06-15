import { BaseResponse } from '@gen2/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';
import { CloudConfig } from '@gen2/endpoints/types/cloud/cloud-common.types';

export interface CloudSetConfigBody {
  config: CloudConfig;
}

export interface CloudSetConfigResponse extends BaseResponse<RestartRequired> {}