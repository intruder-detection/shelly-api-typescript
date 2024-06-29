import { BaseShellyResponse } from '@common/generic.types';
import { RestartRequired } from '@common/restart-required.types';
import { VoltmeterConfig } from '@gen2/endpoints/types/voltmeter/voltmeter-common.types';

export interface VoltmeterSetConfigBody {
  config: VoltmeterConfig;
}

export interface VoltmeterSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
