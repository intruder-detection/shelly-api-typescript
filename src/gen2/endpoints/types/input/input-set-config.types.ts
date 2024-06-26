import { InputConfig, InputIdBody } from '@gen2/endpoints/types/input/input-common.types';
import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';

export interface InputSetConfigBody extends InputIdBody {
  config: InputConfig;
}

export interface InputSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
