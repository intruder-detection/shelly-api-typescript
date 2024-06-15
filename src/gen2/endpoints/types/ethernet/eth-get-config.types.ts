import { EthernetConfiguration } from '@gen2/endpoints/types/ethernet/eth-common.types';
import { BaseShellyResponse } from '@gen2/generic.types';

export interface EthGetConfigResponse extends BaseShellyResponse<EthernetConfiguration> {}
