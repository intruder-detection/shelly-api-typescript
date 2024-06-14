import { BaseResponse } from '@gen2/generic.types';
import { MqttConfig } from '@gen2/endpoints/types/mqtt/mqtt-common.types';
import { WsConfig } from '@gen2/endpoints/types/ws/ws-common.types';
import { BLEConfig } from '@gen2/endpoints/types/ble/ble-common.types';

export interface GetComponentsBody {
  offset?: number;
  include?: string[];
  dynamic_only?: boolean;
}

export interface GetComponentsResponse extends BaseResponse<GetComponentsResponseResult> {}

export interface GetComponentsResponseResult {
  components: Component[];
  cfg_rev: number;
  offset: number;
  total: number;
}

export interface Component {
  key: string;
  status: Status;
  config: MqttConfig | WsConfig | BLEConfig;
}


interface Status {
  dev_list?: string;
  connected?: boolean;
}
