import { BaseShellyResponse } from '@common/generic.types';
import { ModbusConfig } from '@gen2/endpoints/types/modbus/modbus-common.types';
import { RestartRequired } from '@common/restart-required.types';

export interface ModbusSetConfigBody {
  config: ModbusConfig;
}

export interface ModbusSetConfigResponse extends BaseShellyResponse<RestartRequired> {}
