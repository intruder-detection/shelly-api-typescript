import { EthernetConfiguration } from '@gen2/endpoints/types/ethernet/eth-common.types';
import { RestartRequired } from '@gen2/endpoints/types/common/restart-required.types';
import { BaseShellyResponse } from '@common/generic.types';

export interface EthSetConfigBody {
  config: EthernetConfiguration;
}

export interface EthSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
