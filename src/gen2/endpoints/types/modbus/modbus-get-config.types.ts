import { BaseShellyResponse } from '@common/generic.types';
import { ModbusConfig } from '@gen2/endpoints/types/modbus/modbus-common.types';

export interface ModbusGetConfigResponse extends BaseShellyResponse<ModbusConfig> {}
