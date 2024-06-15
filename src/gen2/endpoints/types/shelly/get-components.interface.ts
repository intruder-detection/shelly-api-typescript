import { BaseShellyResponse } from '@gen2/generic.types';
import { MqttConfig } from '@gen2/endpoints/types/mqtt/mqtt-common.types';
import { WsConfig } from '@gen2/endpoints/types/ws/ws-common.types';
import { BLEConfig } from '@gen2/endpoints/types/ble/ble-common.types';
import { CloudConfig } from '@gen2/endpoints/types/cloud/cloud-common.types';
import { WifiConfig } from '@gen2/endpoints/types/wifi/common-interfaces.types';
import { SystemConfig } from '@gen2/endpoints/types/system/common.types.interfaces';

export interface GetComponentsBody {
  offset?: number;
  include?: string[];
  dynamic_only?: boolean;
}

export interface GetComponentsResponse extends BaseShellyResponse<GetComponentsResponseResult> {}

export interface GetComponentsResponseResult {
  components: Component[];
  cfg_rev: number;
  offset: number;
  total: number;
}

export interface Component {
  key: string;
  status: Status;
  config: MqttConfig | WsConfig | BLEConfig | CloudConfig | WifiConfig | SystemConfig;
}


interface Status {
  dev_list?: string;
  connected?: boolean;
}
